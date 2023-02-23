import {COMMENT_CREATE} from "../types";

export const intitalState = {
    comments: []
}

export const commentsReducer = (state = intitalState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
    }
}


