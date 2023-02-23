import React from 'react';

const SingleComment = (props) => {
    console.log('single comment props > ', props)
    return (
        <form className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type="text"/>
        </form>
    );
};

export default SingleComment;
