import Form from 'react-bootstrap/Form';

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Multiple select example">
      <option>Open this select menu</option>
      <option value="1">Bread</option>
      <option value="2">Butter</option>
      <option value="3">Apples</option>
    </Form.Select>
  );
}

export default SelectBasicExample;