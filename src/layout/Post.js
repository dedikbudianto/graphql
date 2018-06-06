import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends Component {
  render () {
    const postingData = this.props.data.posts;
    console.log(this.props);
    return (
      <div>
        {/* {postingData.map(value =>
          <h1 key={value.id}>{value.title}</h1>
        )} */}test
      </div>
    )
  }
}

export default graphql(gql`
  query Posting {
    posts {
      id
      title
      link
      modified
      content
    }
  }`
)(Post);
