import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, } from 'semantic-ui-react';

class EditForm extends React.Component {
  state = { title: '', body: '', }

  componentDidMount() {
    if (this.props.blog.id)
      this.setState({ title: this.props.blog.title, body: this.props.blog.body, });
    }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleEdit = (e) => {
    e.preventDefault()
    const newTitle = this.state.title
    const newBody = this.state.body
    const blog = { newTitle, newBody, }
    this.props.dispatch({ 
      type: 'UPDATE_BLOG', 
      id: this.props.blog.id,
      blog: blog
    })
  }

  render() {
    const { title, body, } = this.state
    return (
      <div style = {styles.bg}>
        <Form style={styles.form} onSubmit={this.handleEdit}>
          <Input
            name='title'
            placeholder='Title'
            value={title}
            defaultValue={this.props.blog.title}
            required
            onChange={this.handleChange}
            style={{ width: '100%', }}
            />
          <br />
          <Input
            name='body'
            placeholder='Body'
            value={body}
            defaultValue={this.props.blog.body}
            required
            onChange={this.handleChange}
            style={{ height: '100px', width: '100%', }}
            />
          <Form.Button inverted color='red' style={styles.btn}>Update</Form.Button>
        </Form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
    marginRight: '50px',
  }
}

export default connect()(EditForm)