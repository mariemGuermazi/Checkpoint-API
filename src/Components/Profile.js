import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ListGroup, Card} from 'react-bootstrap'

const Profile = () => {
    const { id } = useParams();
    const [user,setUser]= useState([])
    useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
          .then((res) => setUser(res.data[0]))
          .catch((err) => console.log(err));
      }, []);
    return (
        <div>
           <Card>
            <Card.Header as="h5">Profile</Card.Header>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                    <ListGroup.Item>Address: {user.address.street} 
                    {user.address.suite} {user.address.city} {user.address.zipcode}</ListGroup.Item>
                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                    <ListGroup.Item>Website: {user.company.name}</ListGroup.Item>
                    <ListGroup.Item>Website: {user.website}</ListGroup.Item>
                    
                </ListGroup>
                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default Profile
