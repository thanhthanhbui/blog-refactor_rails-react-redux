import React from 'react'
import { Image } from 'semantic-ui-react';
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

export default Blogs