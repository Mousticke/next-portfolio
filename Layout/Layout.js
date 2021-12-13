import { Container } from "./Layout.styles";
import { Footer } from "../components";

function Layout({ children }) {
  return (
    <Container id="wrapper">
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
