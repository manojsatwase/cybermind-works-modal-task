import { createSlice } from '@reduxjs/toolkit';
import { comments } from '../../utils/constant';

const initialState = {
  comments
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment(state, action) {
      state.comments.push(action.payload);
    },
    editComment(state, action) {
      const { id, updatedComment } = action.payload;
      const existingComment = state.comments.find((comment) => comment.id === id);
      if (existingComment) {
        existingComment.comment = updatedComment;
      }
    },
    deleteComment(state, action) {
      const id = action.payload;
      state.comments = state.comments.filter((comment) => comment.id !== id);
    },
    toggleComplete(state, action) {
      const id = action.payload;
      const existingComment = state.comments.find((comment) => comment.id === id);
      if (existingComment) {
        existingComment.isComplete = !existingComment.isComplete;
      }
    },
  },
});

export const { addComment, editComment, deleteComment, toggleComplete } = commentsSlice.actions;

export default commentsSlice.reducer;
