import React, {useState} from 'react';
import SingleComment from "./SingleComment";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {commentCreate} from "./redux/actions";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
        const { commentsReducer } = state
        return commentsReducer.comments
    })
    const dispatch = useDispatch()
    const handleInput = e => {
        console.log('input >', e.target.value)
        setTextComment(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit >> ', textComment)
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }
    console.log('comments props > ', props)
    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input type="text" value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!! comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
        </div>
    );
};

export default Comments;
