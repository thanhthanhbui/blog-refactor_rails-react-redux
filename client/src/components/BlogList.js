import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import EditForm from './EditForm'

class BlogList extends React.Component {
  render() {
    const { blogs } = this.props
    return (
      <div>
        <ul>
          { blogs.map( blog => (
            <div key={blog.id}>
              {blog.editing ? <EditForm blog={blog} key={blog.id} /> :
              <Blog key={blog.id} blog={blog} /> }
            </div>
          ))}
        </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}

export default connect(mapStateToProps)(BlogList)