import React from "react";
import './home.css';
import UsersList from "./UsersList";
import axios from "axios";
const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users, getUsers] = React.useState([]);
    async function getAllUsers(){
        const response = await axios.get(url);
        getUsers(response.data);
    }  
    React.useEffect(() => {
        getAllUsers();
    }, [])
    return(
        <React.Fragment>
            <h1>Axios</h1>
            <p>
                Many projects on the web need to interface with a REST API at 
                some stage in their development. Axios is a lightweight HTTP client 
                based on the $http service within Angular.js v1.x and is similar to the
                native JavaScript Fetch API.
            </p>
            <UsersList users={users}/>
        </React.Fragment>
    );
}

export default Home;