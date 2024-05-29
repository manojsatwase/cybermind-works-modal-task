import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';

import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import SelectOption from './selectComponent/SelectOption';

const AssignToComponent = ({ imageSrc, assigneeName }) => {
  const [toggle, setToggle] = useState(false);
  const [selectOption, setSelectOption] = useState('');

  const toggleHandler = () => setToggle(prevState => !prevState);

  const handleSelectOption = (name) => {
    setSelectOption(name);
    setToggle(false); 
  };

  return (
    <>
    <div className='assign-to'>
      <IoPersonOutline />
      <span>Assign to :</span>
      <div className='dropdown' onClick={toggleHandler}>
        <img src={imageSrc} alt={assigneeName} />
        <span>{selectOption || assigneeName}</span>
        {toggle ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
      </div>
    </div>
     {toggle && <SelectOption onChange={handleSelectOption} />}
     </>
  );
};

export default AssignToComponent;
