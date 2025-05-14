import store from '../reduxstore/store';
import './chatlist.css';
import { createChat } from '../services/apiCalls/chat';
import { useEffect, useState } from 'react';
import fetchChatList from '../services/apiCalls/fetchchatlistdata';
import { useSelector } from 'react-redux';
import { SelectedChatCreation } from '../actioncreators/chatcreation';

function Userchat({ image, userName, lastMessage, id, user }) {
  const [chatStarted, setChatStarted] = useState(false);
  const chat = useSelector((state) => state.ChatReducer.data);

  useEffect(() => {
    fetchChatList();
  }, []);

  const chatExists = chat?.some((chatItem) => chatItem.related_id === id) || chatStarted;

  async function StartChat(e) {
    e.stopPropagation(); 

    try {
      const res = await createChat({ id });
      if (res.data?.ok) {
        setChatStarted(true);  
         handle()
       
      } else {
        console.error('Failed to start chat', res.data);
        alert('Failed to start chat');
      }
    } catch (error) {
      console.error('Error starting chat:', error);
      alert('An unexpected error occurred while starting the chat.');
    }
  }
function handle(){
    store.dispatch(SelectedChatCreation(user));
}
  return (
    <div className="chat-item" onClick={chatExists&&handle}>
      <div className="chat-left">
        <img src={image} alt="profile" className="chat-img" />
        <div className="chat-details">
          <h2 className="chat-name">{userName}</h2>
          <h4 className="chat-msg">{lastMessage}</h4>
        </div>
      </div>
      <div className="chat-time">12:45 PM</div>
      <div>
        {!chatExists && (
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '5px',
              width: '50px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={StartChat}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}

export default Userchat;


