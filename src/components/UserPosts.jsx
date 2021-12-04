import React from "react";
import './home.css';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const UserPosts = () => {
    const [posts, getPosts] = React.useState([]);
    const { id } = useParams();
    const url = 'https://jsonplaceholder.typicode.com/posts?userId='+id;
    const navigate = useNavigate();
    
    async function getAllPosts() {
        const response = await axios.get(url);
        getPosts(response.data.slice(0,5));
    }
    React.useEffect(() => {
        getAllPosts();
    }, [])

    const handleDelete = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(console.log("Successful delete"));
        navigate('/');
    }

    return (
        <React.Fragment>
            <h2>Posts: </h2>
            <div className="cards">
            {
                posts.map(post =>
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">
                            <h5 className="card-title">{post.title}</h5>
                        </div>
                        <div className="card-body" style={{display: 'flex ', flexDirection: 'column', alignItems: 'center'}}>
                            <p className="card-text">{post.body}</p>
                            <div style={{display: 'flex ', justifyContent: 'space-evenly', width: "20%"}}>
                                <button type="button" class="btn btn-danger" onClick={() => navigate('/posts/' + post.id )}>
                                    Show
                                </button>
                                <button type="button" class="btn btn-danger" onClick={() => navigate('/posts/' + post.id + '/update')}>
                                    Modify
                                </button>
                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(post.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </React.Fragment>
    );
}

export default UserPosts;