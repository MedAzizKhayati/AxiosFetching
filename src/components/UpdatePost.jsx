import React from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
const UpdatePost = () => {
    const [post, getPost] = React.useState([]);
    const { id } = useParams();
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    const navigate = useNavigate();
    const titleRef = React.useRef();
    const bodyRef = React.useRef();

    async function getApiPost() {
        const response = await axios.get(url);
        getPost(response.data);
    }
    React.useEffect(() => {
        getApiPost();
    }, [])

    const handleSubmit = (id) => {
        const post = { title: titleRef.current.value, body: bodyRef.current.value};
        console.log(post);
        axios.put(url, post)
            .then(navigate('/posts/' + id));
    }
    return (
        <React.Fragment>
            <h4>Post: </h4>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input ref={titleRef} type="text" class="form-control" placeholder={post.title}>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Post's body</label>
                    <input ref={bodyRef} type="text" class="form-control" placeholder={post.body}/>           
                </div>
                <button type="button" class="btn btn-primary" onClick = {() => handleSubmit(post.id)}>Submit</button>
            </form>
        </React.Fragment>
    );
}

export default UpdatePost;