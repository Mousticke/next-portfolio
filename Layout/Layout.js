import { Container } from "./Layout.styles";
import { Header, Footer } from "../components";

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main id="wrapper">{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
