import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Image } from 'semantic-ui-react';
import BlogList from './BlogList';

const Blogs =() => (
  <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '500px',
    }}>
      <Image src={require('../images/blog-banner.jpg')} alt="logo" />
    </div>
    <div style={styles.bg}>
      <Link to='./blogs/new'>
        <Button inverted color='red' style={styles.btn}>
          <Icon name='add' />
          Add Blog
        </Button>
      </Link>
        <br />
        <br />
      <BlogList />
    </div>
  </div>
)

const styles = {
  bg: {
    background: 'linear-gradient(to bottom right, pink, lightblue)',
    height: '100%'
  },
  btn: {
    margin: '40px'
  }
}
    // btn:hover {
    //   background: '#606060',
    //   transition: 'background 0.2s ease',
    // }

export default Blogs