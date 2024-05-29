import React, { useState } from 'react';

const InputComponent = () => {
  const [eventDetails, setEventDetails] = useState('Flower Arrangement');
  const [editingDetails, setEditingDetails] = useState(true);

  const handleEditDetails = () => {
    setEditingDetails(true);
  };

  const handleSaveDetails = (e) => {
    if (e.key === 'Enter') {
      setEditingDetails(false);
    }
  };

  return (
    <>
      {editingDetails ? (
        <input
          type="text"
          value={eventDetails}
          placeholder='Please Enter...'
          onChange={(e) => setEventDetails(e.target.value)}
          onKeyDown={handleSaveDetails}
          onBlur={() => setEditingDetails(false)}
          autoFocus
        />
      ) : (
        <p onClick={handleEditDetails}>{eventDetails}</p>
      )}
    </>
  );
};

export default InputComponent;
