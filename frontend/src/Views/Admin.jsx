import React from "react";
import Add from "../components/Add";
import User from "../components/User";

const Admin = ({users, delUser, addUser}) => {
    return (
        <>
        <Add addUser={addUser} />
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Delete?</th>
            </tr>
            </thead>
                <tbody>
                    {users.map((u)=>(<User key = {u._id} user={u} delUser={delUser}/>))}
                </tbody>
        </table>
        </>
    )
}

export default Admin