import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {commentDelete, commentUpdate} from "./redux/actions";
import comments from "./Comments";

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState('');
    const {text, id } = data
    const dispatch = useDispatch()
    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);
    const handleUpdate = e => {
        e.preventDefault()
        console.log('submit > ', commentText)
        dispatch(commentUpdate(commentText, id))
    }
    const handleDelete = e => {
        console.log(comments)
        e.preventDefault()
        dispatch(commentDelete(id))

    }
    return (
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
            <input type="text" value={commentText} onChange={e => setCommentText(e.target.value)}/>
        </form>
    );
};

export default SingleComment;
