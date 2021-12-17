import { Container, MainContainer } from "./Layout.styles";
import { Footer } from "@/components";

function Layout({ children }) {
  return (
    <Container id="wrapper">
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  );
}

export default Layout;
