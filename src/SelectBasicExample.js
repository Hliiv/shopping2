import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
;

function SelectBasicExample({ value, onChange }) {
 
  return (
    <Dropdown onSelect={onChange}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {value || 'Select an option'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Bread">Bread</Dropdown.Item>
        <Dropdown.Item eventKey="Butter">Butter</Dropdown.Item>
        <Dropdown.Item eventKey="Apples">Apples</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectBasicExample;