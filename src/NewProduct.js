import React, { useState } from 'react';
import SelectBasicExample from './SelectBasicExample';

function NewProduct({ addProduct }) {
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const submitValues = () => {
    console.log("About to submit values");
    console.log('description', description);
    addProduct({ description, unit, amount });
    setDescription('');
    setUnit('');
    setAmount('');
  };

  const AmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="product-box">
          <input
          
            className="product-name"
            placeholder="Product name"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div className="dropdown-container">
            <SelectBasicExample
              value={selectedValue}
              onChange={handleSelectChange}
            />
          </div>
        </div>
      </div>
      <input
        className="col-2"
        placeholder="Unit"
        value={unit}
        onChange={(event) => setUnit(event.target.value)}
      />
      <input
        className="col-2"
        placeholder="Amount"
        value={amount}
        onChange={AmountChange}
      />
      <button className='col-2' onClick={submitValues}>
        Add
      </button>
    </div>
  )
}

export default NewProduct


