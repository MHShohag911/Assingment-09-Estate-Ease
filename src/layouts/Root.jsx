import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../components/Navbar/ComplexNavbar";
import { Container } from "@mui/material";
import { Footer } from "../components/Footer/Footer";

const Root = () => {
  return (
    <Container maxWidth={false}>
      <ComplexNavbar></ComplexNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Root;
