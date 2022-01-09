import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../contract";
import Link from "next/link";

export const FeedbackContext = React.createContext();
const iface = new ethers.utils.Interface([
  "function createFeed(uint256 _rate, string calldata _message, string calldata _user)",
]);

export const FeedbackProvider = ({ children }) => {
  const [txStatus, setTxStatus] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [isLoadingFeeds, setIsLoadingFeeds] = useState(false);
  const [formData, setFormData] = useState({
    rate: 1,
    message: "",
    user: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const getEthereumContract = () => {
    const provider = new ethers.providers.InfuraProvider(
      process.env.ETHEREUM_NETWORK,
      process.env.INFURA_PROVIDER_ID,
      process.env.INFURA_PROVIDER_SECRET,
    );
    const signer = new ethers.Wallet(
      process.env.ACCOUNT_INTERACTION_PRIVATE_KEY,
      provider,
    );
    const feedback_instance = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    );
    return feedback_instance;
  };

  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const getAllFeedback = async () => {
    try {
      const instance = getEthereumContract();
      const feeds = await instance.getAllFeeds();
      const structuredFeeds = feeds.map((feed) => ({
        user: feed.user,
        message: feed.message,
        rate: Number(feed.rate),
        id: Number(feed.id),
        createdAt: new Date(feed.createdAt.toNumber() * 1000).toLocaleString(),
      }));

      return {
        feeds: structuredFeeds,
      };
    } catch (error) {
      console.log(error);
      return {
        feeds: [],
        status: "😥 " + error.message,
      };
    }
  };

  const createFeed = async () => {
    const { rate, message, user } = formData;
    if (rate > 5 || rate < 0) {
      return {
        status: "❌ Your rate must be between 0 and 5.",
      };
    }
    if (message === "" || message.length < 10) {
      return {
        status: "❌ Your message must be filled with 10 characters minimum.",
      };
    }

    if (user === "" || user.length < 5) {
      return {
        status: "❌ You must provide a username with 5 characters minimum.",
      };
    }
    try {
      const instance = getEthereumContract();

      const gasLimit = await instance.estimateGas.createFeed(
        rate,
        message,
        user,
      );
      const gasPrice = await instance.provider.getGasPrice();
      /*const currentBlock = await instance.provider.getBlock("latest");
      const feeData = await instance.provider.getFeeData();
      const baseFee = Number(currentBlock.baseFeePerGas);
      const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
      const maxFeePerGas = baseFee + Number(feeData.maxPriorityFeePerGas) - 1; EIP 1559*/

      const nonce = await instance.provider.getTransactionCount(
        process.env.ACCOUNT_INTERACTION_PUBLIC_KEY,
        "latest",
      );
      const chainId = (await instance.provider.getNetwork()).chainId;
      const tx = {
        gasLimit: gasLimit._hex,
        gasPrice: gasPrice._hex,
        /*maxFeePerGas: maxFeePerGas,
        maxPriorityFeePerGas: maxPriorityFeePerGas, EIP 1559*/
        from: process.env.ACCOUNT_INTERACTION_PUBLIC_KEY,
        to: contractAddress,
        nonce: nonce,
        chainId: chainId,
        data: iface.encodeFunctionData("createFeed", [rate, message, user]),
      };

      const signedTx = await instance.signer.signTransaction(tx);
      /*console.log("Signed Transaction:", signedTx);
      const txHash = ethers.utils.keccak256(signedTx);
      console.log("Precomputed txHash:", txHash);*/
      const sendSignTx = await instance.provider.sendTransaction(signedTx);
      //console.log(sendSignTx);
      setTxStatus(
        <span>
          ✅{" "}
          <Link
            href={`https://ropsten.etherscan.io/tx/${sendSignTx.hash}`}
            passHref
          >
            <a target="_blank" rel="noreferrer noopener">
              View the status of your feedback on Etherscan!
            </a>
          </Link>
          <br />
          ℹ️ Once the transaction is verified by the network, the feedback will
          be updated automatically.
        </span>,
      );
      setFormData({
        rate: 1,
        message: "",
        user: "",
      });
    } catch (error) {
      setTxStatus("😥 " + error.message);
      setFormData({
        rate: 1,
        message: "",
        user: "",
      });
    }
  };

  const feedListener = async () => {
    // event OnNewFeed(uint indexed createdAt, string message, string user, uint256 rate);
    const instance = getEthereumContract();
    const feedCount = await instance.getFeedsCount();
    instance.on("OnNewFeed", (createdAt, message, user, rate) => {
      const structuredFeed = {
        user: user,
        message: message,
        rate: Number(rate),
        id: Number(feedCount),
        createdAt: new Date(createdAt.toNumber() * 1000).toLocaleString(),
      };
      setFeeds((prevState) => [...prevState, structuredFeed]);
      setTxStatus(
        <span>
          🎉 Your feedback has been added to the blockchain for the eternity.{" "}
        </span>,
      );
    });
  };

  useEffect(() => {
    async function fetchFeeds() {
      setIsLoadingFeeds(true);
      const { feeds, status } = await getAllFeedback();
      setFeeds(feeds);
      if (status) setTxStatus(status);
      setIsLoadingFeeds(false);
    }
    feedListener();
    fetchFeeds();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        isLoadingFeeds,
        feeds,
        createFeed,
        txStatus,
        handleChange,
        formData,
        setFormData,
        hoverRating,
        setHoverRating,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
