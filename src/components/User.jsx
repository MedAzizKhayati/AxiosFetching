import React from "react";
import './home.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import UserPosts from "./UserPosts";

const User = () => {
    const [user, getUser] = React.useState({ company: "", address: "" })
    const { id } = useParams();
    const urlUser = 'https://jsonplaceholder.typicode.com/users/' + id;

    async function getUserApi() {
        const response = await axios.get(urlUser);
        getUser(response.data);
    }

    React.useEffect(() => {
        getUserApi();
    }, [])

    return (
        <React.Fragment>
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center"> <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> <span className="name mt-3">{user.name}</span> <span className="idd">@{user.username}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">{user.email}</span> <span><i className="fa fa-copy"></i></span> </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">{Math.ceil(Math.random()*10000)} <span className="follow">Followers</span></span> </div>
                        <div className="text mt-3"><span>Phone Number: {user.phone}</span><br/></div>
                        <div className="text mt-3"><span><h4>Company:</h4></span><strong>Company name: </strong> {user.company.name}<br/><strong>Company description:</strong> {user.company.bs} </div>                    </div>
                </div>
            </div>
            <UserPosts />
        </React.Fragment>
    );
}

export default User;