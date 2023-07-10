export default (posts = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...posts, action.payload]
        case 'READ':
            return action.payload
        case 'UPDATE':
            return posts.map((item) => item._id === action.payload._id ? action.payload : item)
        case 'DELETE':
            return posts.filter((item) => item._id !== action.payload._id)
        default:
            return posts
    }
}
