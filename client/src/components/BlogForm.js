import React from 'react'
import { Header, Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

class BlogForm extends React.Component {
  state = { title: '', body: '', }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, body } = this.state
    const blog = { id, title, body, editing: false }
    dispatch({ type: 'ADD_BLOG', blog, })
    dispatch({ type: 'INC_ID', })
    this.props.history.push('/blogs')
    this.setState({ title: '', body: '', })
  }

  render() {
    const { title, body } = this.state
    return (
      <div style = {styles.bg}>
        <br />
        <Header as='h1' style={styles.header}>Add Blog</Header>
        <Form style={styles.form} onSubmit={this.handleSubmit}>
          <Input
            name='title'
            placeholder='Title'
            value={title}
            required
            onChange={this.handleChange}
            style={{ width: '100%', }}
          />
          <br />
          <Input
            name='body'
            placeholder='Body'
            value={body}
            required
            onChange={this.handleChange}
            style={{ height: '100px', width: '100%', }}
          />
          <Form.Button inverted color='red' style = {styles.btn}>Post</Form.Button>
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

const mapStateToProps = (state) => {
  return { id: state.getId }
}

export default connect(mapStateToProps)(BlogForm)