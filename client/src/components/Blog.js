import React from 'react'
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'

class Blog extends React.Component {
  handleDelete = () => {
    this.props.dispatch({
      type: 'DELETE_BLOG',
      id: this.props.blog.id
    })
  }

  handleUpdate = () => {
    this.props.dispatch({
      type: 'EDIT_BLOG',
      id: this.props.blog.id
    })
  }

  render() {
    return (
      <div>
        <h3 style={{ color: 'royalblue', textDecoration: 'underline', }}>{this.props.blog.title}</h3>
        <p style={{ color: 'cornflowerblue' }}>{this.props.blog.body}</p>
        <Button inverted color='blue' onClick={this.handleUpdate}>
          <Icon name='edit' />
        </Button>
        <Button inverted color='red' onClick={this.handleDelete}>
          <Icon name='trash' />
        </Button>
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

export default connect()(Blog)