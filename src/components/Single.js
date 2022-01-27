import React from 'react';
import { Card } from 'react-bootstrap';

const Single = ({user}) => {
  if(user == undefined){return<></>}
 
  return <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={user.avatar} />
  <Card.Body>
    
    
    <div className="data">
        <h4 className="username ">{`${user.first_name} ${user.last_name}`}</h4>
        <p className="useremail ">{`${user.email}`}</p>
      </div>

   
  </Card.Body>
</Card>;


};

export default Single;
