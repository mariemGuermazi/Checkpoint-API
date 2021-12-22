import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import '../App.css'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err));
    }, []);
    return (
        <div className='userList'>
            {users.map((users) => ( <UserCard users={users} key={users.id} />))}
        </div>
    )
}

export default UserList