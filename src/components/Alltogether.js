import React from 'react';
import Single from './Single';
const Alltogether = ({userData}) => {
  
  return <div className='card-container'>
  <Single/>
  
  {/* {userData.map((user) => console.log(user))} */}



  {userData.map((user) => <Single key={user.id} user={user}/>)}
  
  
</div>;
};

export default Alltogether;
