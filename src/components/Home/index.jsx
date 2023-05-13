import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Main, Section, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
import logoImg from "../../assets/images/logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            <Logo src={logoImg} logo onClick={() => navigate("/home")} />
            Houzing
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            ))}
          </Section>
          <Section>
            <button>Sign In</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Home;
