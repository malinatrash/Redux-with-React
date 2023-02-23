import React, {useEffect, useState} from 'react';

const SingleComment = ({data}) => {
    const { text, id } = data
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text]);
    const handleInput = e => {
        e.preventDefault()
        setCommentText(e.target.value)
    }
    return (
        <form className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
        </form>
    );
};

export default SingleComment;
