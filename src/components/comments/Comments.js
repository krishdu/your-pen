import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';

import useLocalstorage from '../hooks/use-localstorage';
import {getAllComments} from '../lib/api';
import CommentsList from '../comments/CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {quoteId} = params;
  
  const { sendRequest, status, data: loadedComments } = useLocalstorage(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;
  if(status === 'pending'){
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if(status === 'completed' && loadedComments && loadedComments.length > 0){
    comments = <CommentsList comments={loadedComments} />
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className='centered'>No Motivation found!</p>
  }
  
  return (
    <section className={classes.comments}>
      <h2>Why It's Motivating</h2>
      {!isAddingComment && (
        <button className='btn--flat' onClick={startAddCommentHandler}>
          Add
        </button>
      )}

      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddComment={onAddCommentHandler}/>}

      {comments}

    </section>
  );
};

export default Comments;
