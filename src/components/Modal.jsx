import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import AssignToComponent from './AssignToComponent';
import CommentInput from './CommentInput';
import CommentsList from './CommentsList';
import DisplayDate from './DisplayDate';
import EventActions from './EventActions';
import InputComponent from './InputComponent';
import NoteComponent from './NoteComponent';

const Modal = ({ date = 'May 5, 2024 at 8:00-10:00 AM' ,handleCloseClick}) => {
  const comments = useSelector((state) => state.comments.comments);

  const renderComments = useMemo(() => {
    return comments.map((comment) => <CommentsList key={comment.id} {...comment} />);
  }, [comments]);

  return (
    <>
      <EventActions eventId="2" handleCloseClick={handleCloseClick} />
      <div className='modal-header'>
        <InputComponent />
        <DisplayDate date={date} />
      </div>
      <div className='modal-body'>
        <AssignToComponent imageSrc='https://manojsatwase.github.io/images/mylogo.jpeg' assigneeName='Jane Smith' />
        <NoteComponent phoneNumber='09405035308' website='www.flowervenor.com' />
      </div>
      <hr />
      <div className='modal-comment'>
        <h4>Comments</h4>
        <div className='comments-container'>
          {renderComments.length > 0 ? renderComments : <p>No comments yet.</p>}
        </div>
      </div>
      <div className='modal-footer'>
        <CommentInput />
      </div>
    </>
  );
};

Modal.propTypes = {
  date: PropTypes.string,
};

export default Modal;
