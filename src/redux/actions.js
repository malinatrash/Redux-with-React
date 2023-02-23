import {INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE} from "./types";

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text: text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: {text, id }
    }
}











