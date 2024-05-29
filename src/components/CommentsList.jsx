import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FaEdit, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

import { deleteComment, editComment, toggleComplete } from "../Redux/slices/commentsSlice";

const CommentsList = ({ id, user_pic, name, comment, owner = false, isComplete }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  const handleDelete = useCallback(() => {
    dispatch(deleteComment(id));
  }, [dispatch, id]);

  const handleSave = useCallback(() => {
    dispatch(editComment({ id, updatedComment: editedComment }));
    setIsEditing(false);
  }, [dispatch, id, editedComment]);

  const handleToggleComplete = useCallback(() => {
    dispatch(toggleComplete(id));
  }, [dispatch, id]);

  return (
    <div className={`display-comments ${isComplete ? 'complete' : ''}`}>
      <div className='user-pic'>
        <img src={user_pic} alt={name} />
      </div>
      <div className='comment'>
        <h3>{name}</h3>
        <div>
          {isEditing ? (
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          ) : (
            <p>{comment}</p>
          )}
          {owner && (
            <>
              {isEditing ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <>
                  <button onClick={() => setIsEditing(true)}>
                    <FaEdit />
                  </button>
                  <button onClick={handleDelete}>
                    <RiDeleteBinLine />
                  </button>
                  <button onClick={handleToggleComplete}>
                    {isComplete ? <FaTimesCircle /> :   <FaCheckCircle />}
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
