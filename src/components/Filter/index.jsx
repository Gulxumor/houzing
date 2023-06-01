import { Dropdown } from "antd";
import { Button, Input } from "../generic";
import { Container, Icons } from "./style";

const Filter = () => {
  const menu = () => <div>test</div>;

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city or ZIP code"}
      />
      <Dropdown
        menu={menu}
        placement="bottomRight"
        arrow={{ pointArCenter: true }}
      >
        <Button type={"light"}>
          <Icons.Advanced /> Advanced
        </Button>
      </Dropdown>
      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
