import React from 'react'
import { Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '500px',
    }}>
      <Image src={require('../images/404.jpg')} alt="logo" />
    </div>
    <Link to='/'>
      <Button inverted color='black' style={styles}>Go Home</Button>
    </Link>
  </div>
)

const styles = {
  color: 'gray',
  margin: '50px',
}

export default NoMatch