import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const UsersList = (props) => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h2>Axios Users List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map( user =>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type="button" class="btn btn-danger" onClick={() => navigate('/users/' + user.id)}>
                                    Check profile
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default UsersList;