import { CREATE, DELETE, LIKE_POST, READ, UPDATE } from '../constants/actionTypes.js'

export default (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload]
        case READ:
            return action.payload
        case UPDATE:
        case LIKE_POST:
            return posts.map((item) => item._id === action.payload._id ? action.payload : item)
        case DELETE:
            return posts.filter((item) => item._id !== action.payload)
        default:
            return posts
    }
}
