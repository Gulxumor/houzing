import { Container, Icon, Wrapper } from "./style";

const Input = ({
  type,
  width,
  onChange,
  placeholder,
  value,
  defaultValue,
  name,
  height,
  icon,
}) => (
  <Wrapper>
    <Icon>{icon}</Icon>
    <Container
      type={type}
      icon={icon}
      width={width}
      height={height}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
    />
  </Wrapper>
);

export default Input;
