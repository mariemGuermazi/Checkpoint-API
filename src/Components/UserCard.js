import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css';



const UserCard = ({users}) => {
    
    
    return (
        <div className='userCard' >
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height: 280}} variant="top" src="https://wce.education/wp-content/uploads/2020/09/wce-avatar.png"  />
                    <Card.Body>
                        <Card.Title>{users.name}</Card.Title>
                        <ListGroup variant="flush">
                        <ListGroup.Item>Username: {users.username}</ListGroup.Item>
                        </ListGroup>
                        <Button  variant="outline-dark">
                            <Link to={`/users/${users.id}`} className='profile-btn'>Check profile</Link>
                        </Button>
                    </Card.Body>
                </Card>
            
        </div>
    )
}
export default UserCard