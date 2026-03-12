import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (value) navigate(`/kanji/${value}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="input"
          type="search"
          placeholder="Lookup a kanji by its literal (eg. '猫')"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" aria-label="Search">
        <Search />
      </Button>
    </Form>
  );
}

export default SearchBar;
