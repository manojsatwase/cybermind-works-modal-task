import React from 'react';
import ButtonComponent from './ButtonComponent';
import { FaCheck, FaTrash, FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteComment, toggleComplete } from '../Redux/slices/commentsSlice';

const EventActions = ({ eventId , handleCloseClick }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete(eventId));
  };

  const handleDeleteClick = () => {
    dispatch(deleteComment(eventId));
  };

  return (
    <div className='event-actions'>
      <div className='btn-complete'>
        <ButtonComponent Icon={FaCheck} handleClick={handleCompleteClick} />
      </div>
      <div className='btn-edit-delete'>
        <ButtonComponent Icon={FaTrash} handleClick={handleDeleteClick} />
        <ButtonComponent Icon={FaTimes} handleClick={handleCloseClick} />
      </div>
    </div>
  );
};

export default EventActions;
