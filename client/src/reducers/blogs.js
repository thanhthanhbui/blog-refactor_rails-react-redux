const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.id)
    case 'EDIT_BLOG':
      return state.map((blog) => blog.id === action.id ? {...blog, editing: !blog.editing} : blog)
    case 'UPDATE_BLOG':
      return state.map((blog) => {
        if (blog.id === action.id) {
          return {
            ...blog,
            title: action.blog.newTitle,
            body: action.blog.newBody,
            editing: !blog.editing
          }
        } else
            return blog
      })
    default:
      return state
  }
}

export default blogs