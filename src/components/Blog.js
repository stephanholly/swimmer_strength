import React, { Component } from 'react';
import * as contentful from 'contentful'
import PageContent from './PageContent'

import BlogItem from './BlogItem'


class Blog extends Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'viy9hsoregkv',
    accessToken: '56ce63633197de161178c5ba416fb7d647c318fcf1b4270173d9d80db356e23a',
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    let fun = response.items.sort((a,b) => (a.fields.date > b.fields.date) ? 1 : ((b.fields.date > a.fields.date) ? -1 : 0));
    fun = fun.reverse()

    this.setState({
      posts: fun
    })
  }
  render() {
    return (
      <PageContent>
        <div className="page-header">
          <h1 className="page-header-text">Blog</h1>
        </div>
        { this.state.posts.map(({fields}, i) =>
        <BlogItem key={i} {...fields} />
        )}
      </PageContent>
    )
  }
}

export default Blog;
