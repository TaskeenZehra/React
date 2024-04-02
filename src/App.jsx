import React, { useState } from 'react';
import Show from './show.jsx';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "AB" },
    { id: 2, name: "CD" },
    { id: 3, name: "EF" },
    { id: 4, name: "GH" },
    { id: 5, name: "IJ" },
    { id: 6, name: "KL" },
    { id: 7, name: "MN" },
    { id: 8, name: "OP" },
    { id: 9, name: "QR" },
    { id: 10, name: "ST" },
    { id: 11, name: "UV" },
    { id: 12, name: "WX" },
    { id: 13, name: "YZ" },
    { id: 14, name: "BA" },
    { id: 15, name: "DC" },
    { id: 16, name: "FE" },
    { id: 17, name: "HG" },
    { id: 18, name: "JI" },
    { id: 19, name: "LK" },
    { id: 20, name: "NM" },
  ]);

  const [count, setCount] = useState(10);
  const [name, setName] = useState('');

  const handleShowMore = () => {
    setCount(prev => prev + 2);
  };

  const handleShowLess = () => {
    setCount(prev => Math.max(6, prev - 2));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAddItem = () => {
    if (name !== '') { 
      const newItem = {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        name: name
      };
      setData(prevData => [...prevData, newItem]);
      setName('');
    }
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <div style={{backgroundColor:"pink",borderColor:"black",border:"5px"}}>
      <br /><center><h1>Welcome to my basic TO-DO List</h1></center><br />
      {data.slice(0, count).map(x => (
        <div key={x.id}>
          <Show x={x} />
          <button style={buttonStyle} onClick={() => handleDelete(x.id)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder='Enter your Name'
        style={{ margin: "10px" , height:"20px"}}
      />
      <button onClick={handleAddItem} style={buttonStyle}>Add Item</button>
      <button onClick={handleShowMore} style={buttonStyle}>Show More</button>
      <button onClick={handleShowLess} style={buttonStyle}>Show Less</button>
      <br /><br />
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "brown",
  color: "white",
  borderColor: "black",
  height: "30px",
  width: "100px",
  margin: "10px"
};

export default App;
