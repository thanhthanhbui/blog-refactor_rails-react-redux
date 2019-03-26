import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Image, Item, Button, Icon } from 'semantic-ui-react';
import BlogForm from './BlogForm'

class BlogList extends React.Component {
  state = { showForm: false, }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, }
    })
  }

  blogs = () => {
    const photograph = <Image src="http://lorempixel.com/640/480/fashion" />

    return this.props.blogs.map( blog =>
      <Item key={ blog.id }>
        <Item.Image src={ photograph } />

        <Item.Content verticalAlign='middle'>
          <Item.Header style={{ color: 'firebrick' }}>{ blog.title }</Item.Header>
          <Item.Extra>
            <Link to={`/blogs/${blog.id}`}>
              <Button inverted color='google plus' floated='right'>View Post</Button>
            </Link>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
  
  render() {
    const { showForm } = this.state

    return (
      <Container>
        <Button inverted color='red' onClick={this.toggleForm}>
          { showForm ? <Icon name='close' /> : <Icon name='add' /> }
        </Button>
        <br />
        <br />
        { showForm ?
          <BlogForm closeForm={this.toggleForm} />
        :
          <Item.Group divided>
            { this.blogs() }
          </Item.Group>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}

export default connect(mapStateToProps)(BlogList)