import React, { Component } from 'react';
import * as contentful from 'contentful'
import _ from 'lodash'
import PageContent from './PageContent'
import BlogNav from './BlogNav'
import BlogContent from './BlogContent'

class BlogPost extends Component {
  state = {
    posts: [],
    post: null,
    obj: null
  }

  client = contentful.createClient({
    space: 'viy9hsoregkv',
    accessToken: '56ce63633197de161178c5ba416fb7d647c318fcf1b4270173d9d80db356e23a',
  })

  componentDidMount(){
    this.fetchPosts().then(this.setPosts)
  }

  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    let fun = response.items.sort((a,b) => (a.fields.date > b.fields.date) ? 1 : ((b.fields.date > a.fields.date) ? -1 : 0));
    this.setState({ posts: fun})
  }

  componentDidUpdate(prevState) {
    if (this.state.posts !== prevState.posts && this.state.post === null) {
        this.setState({ post : _.filter(this.state.posts, {fields: {path: this.props.match.params.blogPost}}) })
    }
  }


render() {
  let obj;
  let marker;
  if(this.props.location.state){
    obj =  this.props.location.state.props
    marker = true;
  } else {
    obj  = this.state.post
    marker = false
  }

    return (
        <PageContent>
          {marker ? <BlogNav date={ obj.date } to="/blog"/> : <BlogNav date={ obj ? obj[0].fields.date : 'loading' } to="/blog"/>}
          {marker ? <BlogContent {...obj } /> : <BlogContent { ...( obj ? obj[0].fields : null) } />}
        </PageContent>
    )
  }
}



export default BlogPost
