import React from 'react'
import { connect, } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Blogs from './Blogs'
import Blog from './Blog'
import { getBlogs, } from '../reducers/blogs'
import { Loader, Segment, Dimmer, } from 'semantic-ui-react'
import NoMatch from './NoMatch';

class FetchBlogs extends React.Component {
  state = { loaded: false, }

  componentDidMount() {
    this.props.dispatch(getBlogs(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {
    const { loaded, } = this.state;

    if (loaded) {
      return (
        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={Blog} />
        </Switch>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchBlogs);