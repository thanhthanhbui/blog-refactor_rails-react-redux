import React from 'react'
import { connect } from 'react-redux';
import { Button, Icon, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BlogForm from './BlogForm'
import { deleteBlog } from '../reducers/blogs'

class Blog extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  handleDelete = () => {
    const { blog, dispatch, history: { push } } = this.props
    dispatch(deleteBlog(blog.id))
    push('/blogs')
  }
  // handleDelete = () => {
  //   this.props.dispatch({
  //     type: 'DELETE_BLOG',
  //     id: this.props.blog.id
  //   })
  // }

  // handleUpdate = () => {
  //   this.props.dispatch({
  //     type: 'EDIT_BLOG',
  //     id: this.props.blog.id
  //   })
  // }

  render() {
    const { blog = {} } = this.props
    const { showForm } = this.state

    return (
      <Container style={styles.bg}>
        <br />
        <div style={styles.div}>
          <Link to='/blogs'>
            <Button inverted color='green'>
              <Icon name='home' />
            </Button>
          </Link>
          <Button inverted color='blue' onClick={this.toggleForm}>
            { showForm ? <Icon name='close' /> : <Icon name='edit' />}
          </Button>
          <Button inverted color='red' onClick={this.handleDelete}>
            <Icon name='trash' />
          </Button>
        </div>
        { showForm ?
          <BlogForm {...blog} closeForm={this.toggleForm} />
        :
          <div style={styles.div}>
            <Header as='h3' style={{ color: 'royalblue', textDecoration: 'underline', }}>{blog.title}</Header>
            <p style={{ color: 'cornflowerblue' }}>{blog.body}</p>
          </div>
        }
      </Container>
    )
  }
}

const styles = {
  bg: {
    background: 'linear-gradient(to bottom right, pink, lightblue)',
    height: '100%',
    width: '100%',
  },
  div: {
    margin: '50px',
  },
}

const mapStateToProps = (state, props) => {
  return { blog: state.blogs.find( blog => blog.id === parseInt(props.match.params.id) ) }
}

export default connect(mapStateToProps)(Blog)