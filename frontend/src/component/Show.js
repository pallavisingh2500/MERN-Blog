import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            img: '',
            content: '',
            createdAt: ''
        }
    }
    async componentDidMount() {
        console.log(this.props);
        let blog = await axios.get(`/blogs/${this.props.match.params.id}`);
        blog = blog.data;
        this.setState({ author: blog.author, img: blog.img, content: blog.content, createdAt: blog.createdAt })
    }
    deleteBlogHandler = async () => {
        await axios.delete(`/blogs/${this.props.match.params.id}`);
        this.props.history.push('/blogs');
    }
    render() {
        return (
            <div>
                <h1>Show Blog</h1>
                <Card style={{ width: '40rem' }} className="Blog">
                    <Card.Img variant="top" src={this.state.img} />
                    <Card.Body>
                        <Card.Title>{this.state.author}</Card.Title>
                        <Card.Text>
                            {this.state.content}
                        </Card.Text>
                        <Link to={`/blogs/${this.props.match.params.id}/edit`}>
                            <Button variant="success" >Edit</Button>
                        </Link>
                        {/* <Link style={{ margin: '10px' }} to={`/blogs/${this.state.id}`}>
                            <Button variant="danger" >Delete</Button>
                        </Link> */}
                        <Button onClick={this.deleteBlogHandler} style={{ margin: '10px' }} variant="danger" >Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
