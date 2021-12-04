import React from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
const Post = () => {
    const [post, getPost] = React.useState([]);
    const [comments, getComments] = React.useState([]);
    const { id } = useParams();
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    const urlComments = 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments';
    const navigate = useNavigate();
    async function getApiPost() {
        const response = await axios.get(url);
        getPost(response.data);
    }
    async function getAllComments() {
        const response = await axios.get(urlComments);
        getComments(response.data);
    }
    React.useEffect(() => {
        getApiPost();
        getAllComments();
    }, [])
    return (
        <React.Fragment>
            <h4>Post: </h4>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">
                    <h5 className="card-title">{post.title}</h5>
                </div>
                <div className="card-body" >
                    <p className="card-text">{post.body}</p>
                    <button type="button" class="btn btn-danger" onClick={() => navigate('/posts/' + post.id + '/update')}>
                        Modify
                    </button>
                </div>
            </div>
            <h4>Comments: </h4>
            {
                comments.map(comment =>
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">
                            <h5 className="card-title">Name: {comment.name}</h5>
                            <h5 className="card-title">Email: {comment.email}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{comment.body}</p>
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
}

export default Post;