import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('Something went wrong while rendering the component.');
    console.error('Caught by componentDidCatch:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Failed to load posts. Please try again later.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
