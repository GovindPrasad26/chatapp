import Userchat from './usechat';
import './chatlist.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetchData from '../services/apiCalls/fetchuserdata';

function Chatlist() {
  useEffect(() => {
    fetchData();  
  }, []);

  const user = useSelector((state) => state.UserReducer.result);
  console.log(user, 'helllllllllllll');

  useEffect(() => {
    console.log(user, 'expected'); 
  }, [user]);

  return (
    <div className="chat-list">
      {user && user.length > 0 ? (
        user.map((userItem) => { 
          return (
            <Userchat 
              key={userItem._id}  
              image={userItem.image}  
              userName={userItem.fname + " " + userItem.lname} 
              lastMessage={"Hey, how are you?"} 
              id={userItem._id}  
              user={userItem}
            />
          );
        })
      ) : (
        <p>No users available.</p>  
      )}
    </div>
  );
}

export default Chatlist;
