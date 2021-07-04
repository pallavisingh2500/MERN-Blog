import React, { Component } from 'react'
import Blog from './Blog';
import './BlogList.css';
import axios from 'axios';
export default class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                //Author
                //Content
                //Image
                // {
                //     author: 'Pallavi',
                //     content: 'Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.',
                //     img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                // },
                // {
                //     author: 'Pallavi',
                //     content: 'Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.',
                //     img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                // },
                // {
                //     author: 'Pallavi',
                //     content: 'Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.',
                //     img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                // },
                // {
                //     author: 'Pallavi',
                //     content: 'Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.',
                //     img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                // },

            ]
        }
    }
    async componentDidMount() {
        const fetchedBlogs = await axios.get('/blogs');
        this.setState({ blogs: fetchedBlogs.data });
    }
    render() {
        let blogList = this.state.blogs.map((blog) => {
            return <Blog
                key={blog._id}
                id={blog._id}
                author={blog.author}
                img={blog.img}
                content={blog.content}
                createdAt={blog.createdAt}
            />
        })
        return (
            <div className="BlogList">
                {blogList}
            </div>
        )
    }
}
