import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Logo, Link } from "./style";
import logoImg from "../../assets/images/logo.png";
import { navbar } from "../../utils/navbar";
import {Button} from "../generic";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Wrapper>
          <Section onClick={() => navigate("/")} logo="true">
            <Logo src={logoImg} /> Houzing
          </Section>
          <Section>
            {navbar.map(
              ({ title, path, hidden }, index) =>
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
            )}
          </Section>
          <Section >
            <Button type={"dark"} onClick={() => navigate("sign-in")}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Container>
      <Filter /> 
      <Outlet />
    </>
  );
};

export default Navbar;