import React from 'react'
import { Header, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateBlog, addBlog } from '../reducers/blogs';

class BlogForm extends React.Component {
  initialState = { title: '', body: '', }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, closeForm } = this.props
    const blog = { ...this.state }
    const func = this.props.id ? updateBlog : addBlog
    dispatch(func(blog))
    closeForm()
  }

  render() {
    const { id, title, body } = this.props

    return (
      <div style = {styles.bg}>
        <br />
        <Header as='h1' style={styles.header}>
          { id ? 'Edit Post' : 'Add Post'}
        </Header>
        <Form style={styles.form} onSubmit={this.handleSubmit}>
          <Input
            name='title'
            placeholder='Title'
            defaultValue={title}
            required
            onChange={this.handleChange}
            style={{ width: '100%', }}
          />
          <br />
          <Input
            name='body'
            placeholder='Body'
            defaultValue={body}
            required
            onChange={this.handleChange}
            style={{ height: '100px', width: '100%', }}
          />
          <Form.Button inverted color='red' style = {styles.btn}>
            { id ? 'Update' : 'Post'}            
          </Form.Button>
        </Form>
        <br />
        <br />
      </div>
    )
  }
}

const styles = {
  bg: {
    background: 'linear-gradient(to bottom right, pink, lightblue)',
    height: '100%'
  },
  btn: {
    margin: '20px'
  },
  header: {
    textAlign: 'center',
    color: 'deepskyblue',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    marginRight: '50px',
  }
}

export default connect()(BlogForm)