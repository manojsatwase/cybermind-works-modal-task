import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsSendArrowDown } from 'react-icons/bs';

import { addComment, editComment } from '../Redux/slices/commentsSlice';

const CommentInput = ({ initialText = '', onSubmit, editMode = false }) => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      if (editMode) {
        dispatch(editComment({ id: Date.now().toString(), updatedComment: commentText }));
      } else {
        dispatch(addComment({ 
          id: Date.now().toString(),
          user_pic: 'https://manojsatwase.github.io/images/mylogo.jpeg',
          name: "Manoj Satwase",
          comment: commentText,
          owner: true,
          isComplete:false
        }));
      }
      setCommentText('');
      if (onSubmit) {
        onSubmit();
      }
    }
  };

  useEffect(() => {
    setCommentText(initialText);
  }, [initialText]);

  return (
    <form className='commentForm' onSubmit={handleSubmit}>
      <div className='user-pic'>
        <img loading='lazy' src="https://manojsatwase.github.io/images/mylogo.jpeg" alt="manoj" />
      </div>
      <div className='comment-control'>
        <input
          type='text'
          placeholder='Write comment...'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button type='submit'><BsSendArrowDown /></button>
      </div>
    </form>
  );
};

export default CommentInput;
