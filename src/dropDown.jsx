import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const DropDown = ({
  title,
  data,
  index_column,
  index_row,
  content,
  setContent,
}) => {
  const [result, setResult] = useState(data);
  const onSubmit = (event) => {
    content[index_row + 1][index_column] = result;
    setContent(content);
    event.preventDefault();
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Label>{title}</Form.Label>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title={""}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Вариант 1</Dropdown.Item>
            <Dropdown.Item href="#"> Вариант 2</Dropdown.Item>
            <Dropdown.Item href="#">Вариант 3</Dropdown.Item>
            <Dropdown.Divider />
          </DropdownButton>
          <Form.Control
            name="text"
            defaultValue={data}
            onChange={(event) => {
              setResult(event.target.value);
            }}
          />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default DropDown;

