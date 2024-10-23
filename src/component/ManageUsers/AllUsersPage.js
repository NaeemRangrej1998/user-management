import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {getAllUsers} from "../../service/user.api";
import {Button} from "react-bootstrap";
import AddUser from "./AddUser";

function AllUsersPage() {
    const [user, setUser] = useState({
        data: [],
        totalPages: 0,
        pageSize: 10,
        pageNumber: 0
    })
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen,setIsOpen]=useState(false);
    useEffect(() => {
        getAllSavedUsers()
    }, [currentPage]);

    const getAllSavedUsers=()=>{
        getAllUsers(currentPage, user.pageSize).then((res) => {
            if (res.status && res.status == 200) {
                setUser({
                    data: res.data.content,
                    totalPages: res.totalPages,
                    pageSize: user.pageSize,
                    pageNumber: currentPage
                })
            }
            console.log({res});
        })
    }
    const toggleAddUser=()=>{
        setIsOpen(!isOpen)
        console.log({isOpen});
    }

    return (
        <div className="mt-5">
            <Button variant="primary" className="float-end" onClick={toggleAddUser}>Add User</Button>
            <table className="table table-striped">
                <thead className="text-center">
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {user?.data.map((users, id) => {
                    return (
                        <tr className="text-center" key={id}>
                            <td>{users.id}</td>
                            <td>{users.firstName}</td>
                            <td>{users.lastName}</td>
                            <td>{users.email}</td>
                            <td style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                                <Link to={`/edit-user/${1}`}>
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                                <Link to={`/user/${1}`}>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Link>

                                <i className="fa fa-trash" aria-hidden="true"
                                    // onClick={() => handelDelete(item.id)}
                                ></i>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <AddUser
                isOpen={isOpen}
                toggleAddUser={toggleAddUser}
                getAllSavedUsers={getAllSavedUsers}
            />
        </div>
    )
}

export default AllUsersPage
