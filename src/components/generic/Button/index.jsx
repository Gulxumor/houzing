import { Container } from "./style";

const Button = ({ children, type, width, onClick }) => (
  <Container type={type} width={width} onClick={onClick}>
    {children || "Button"}
  </Container>
);

export default Button;
