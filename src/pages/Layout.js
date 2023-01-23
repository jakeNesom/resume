import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import TopNav from "../components/Nav";

const Layout = () => {
  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main style={{ marginTop: "3rem" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;
