import { useEffect, useState } from "react";
import Info_User from "./Info_User"
import { getAllUsers } from "../../../../services/post.subject.service";
import { keyGenerator } from "../../../../helpers/key";

import '../../../sass/layout/Users/_user_admin.scss'

const User = () => {

    const [users, setUsers] = useState([]);

    const getUsersFunction = async () => {
        const getUsers = await getAllUsers();
        setUsers(getUsers.users)
        return getUsers;
    }

    useEffect(() => {
        getUsersFunction();
    }, [])


    return (
        <div className="user-container">
            <h1 className="user-title">USUARIOS</h1>
            {
                users.map((user) => {
                    return <Info_User user={user} key={keyGenerator()} />
                })
            }
        </div>
    )
}

export default User