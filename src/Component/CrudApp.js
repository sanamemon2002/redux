import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateItem } from '../App'; 

const CrudApp = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crud);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(updateItem({ id: editId, text: input }));
      setEditId(null);
    } else {
      dispatch(addItem(input));
    }
    setInput('');
  };

  const handleEdit = (item) => {
    setInput(item.text);
    setEditId(item.id);
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          style={{ padding: '10px', width: 'calc(100% - 100px)' }}
        />
        <button
          onClick={handleAddOrUpdate}
          style={{ padding: '10px', marginLeft: '10px' }}
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <span>{item.text}</span>
            <div>
              <button
                onClick={() => handleEdit(item)}
                style={{ marginRight: '10px' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                style={{ color: 'red' }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;

