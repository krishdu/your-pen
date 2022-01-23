import { useEffect, useRef } from 'react';
import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

import useLocalstorage from '../hooks/use-localstorage';
import {addComment} from '../lib/api';

/**
 * add new comment form component
 * @param  {} quoteId
 * @param  {} onAddComment
 */
const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { quoteId, onAddComment} = props;
  const {sendRequest, status, error} = useLocalstorage(addComment);
 //  debugger;
  useEffect(() => {
    if(status === 'completed' & !error){
      onAddComment();
    }
  }, [error, status, onAddComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const commentData = commentTextRef.current.value;
    sendRequest({commentData, quoteId});
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <div className='centered'>
        <LoadingSpinner />
      </div>
      }
      <div className={classes.control}>
        <label htmlFor='comment'>Your Thought</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
