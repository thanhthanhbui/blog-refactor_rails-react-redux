import React from 'react'
import { Image } from 'semantic-ui-react'

const Home = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '500px',
  }}>
    <Image src={require('../images/welcome.png')} alt="logo" />
  </div>
)

export default Home