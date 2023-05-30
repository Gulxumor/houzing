import { Container } from "./style";

const Input = ({
  type,
  width,
  onChange,
  placeholder,
  value,
  defaultValue,
  name,
  height,
}) => (
  <Container
    type={type}
    width={width}
    height={height}
    onChange={onChange}
    placeholder={placeholder}
    name={name}
    value={value}
    defaultValue={defaultValue}
  />
);

export default Input;
