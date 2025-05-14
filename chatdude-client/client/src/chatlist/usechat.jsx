// import { useDispatch } from 'react-redux';
// import './chatlist.css';
// import { createChat } from '../services/apiCalls/chat';
// import { useEffect } from 'react';
// import fetchChatList from '../services/apiCalls/fetchchatlistdata';
// import { useSelector } from 'react-redux';
// import { SelectedChatCreation } from '../actioncreators/chatcreation';
// import { useState } from 'react';
// function Userchat({ image, userName, lastMessage, id,user }) {
//   const[startedchat,setstartedchat]=useState(false)

//   const chat = useSelector((state) => state.ChatReducer.data);
// const dispatch=useDispatch()

//   useEffect(() => {
//     fetchChatList();  
//   }, []);

//   // Check if the user already has a chat (compare with related_id)
  
//   const chatExists = chat?.some(chatItem => chatItem.related_id === id)||startedchat;
//   async function StartChat() {
//     try {
//       const res = await createChat({ id });
//       if (res.data.ok) {
//         // Refresh the page after starting the chat
//         setstartedchat(true)
//       } else {
//         throw Error('failed to start chat');
//       }
//     } catch (error) {
//       alert('Failed to start chat');
//     }
//   }
//    function addSelectedChat(){
//    dispatch(SelectedChatCreation(user))
//    }
//   return (
//     <div className="chat-item"  onClick={chatExists && addSelectedChat}>
//       <div className="chat-left">
//         <img src={image} alt="profile" className="chat-img" />
//         <div className="chat-details">
//           <h2 className="chat-name">{userName}</h2>
//           <h4 className="chat-msg">{lastMessage}</h4>
//         </div>
//       </div>
//       <div className="chat-time">12:45 PM</div>
//       <div>
//         {
//           !chatExists &&  (
//             <button
//               style={{
//                 backgroundColor: 'green',
//                 color: 'white',
//                 padding: '5px',
//                 width: '50px',
//                 border: 'none'
//               }}
//               onClick={StartChat}
//             >
//               start
//             </button>
//           )
//         }
//       </div>
//     </div>
//   );
// }




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
    e.stopPropagation(); // prevent div onClick from triggering

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


// import store from '../reduxstore/store';
// import './chatlist.css';
// import { createChat } from '../services/apiCalls/chat';
// import { useEffect, useState } from 'react';
// import fetchChatList from '../services/apiCalls/fetchchatlistdata';
// import { useSelector } from 'react-redux';
// import { SelectedChatCreation } from '../actioncreators/chatcreation';

// function Userchat({ image, userName, lastMessage, id, user }) {
//   const [chatStarted, setChatStarted] = useState(false);
//   const chat = useSelector((state) => state.ChatReducer.data);

//   useEffect(() => {
//     fetchChatList();
//   }, []);

//   // Check if chat already exists or it was just started
//   const chatExists = chat?.some((chatItem) => chatItem.related_id === id) || chatStarted;

//   // ✅ Called when user clicks the Start button
//   async function StartChat(e) {
//     e.stopPropagation(); // Prevent card click

//     try {
//       const res = await createChat({ id });
//       if (res.data?.ok) {
//         setChatStarted(true);
//         store.dispatch(SelectedChatCreation(user));
//         fetchChatList(); // Refresh the chat list after creating
//       } else {
//         alert('Failed to start chat');
//         console.error(res.data);
//       }
//     } catch (error) {
//       alert('An error occurred');
//       console.error(error);
//     }
//   }

//   // ✅ Called when user clicks existing chat card
//   function openExistingChat() {
//     if (chatExists) {
//       store.dispatch(SelectedChatCreation(user));
//     }
//   }

//   return (
//     <div className="chat-item" onClick={openExistingChat}>
//       <div className="chat-left">
//         <img src={image} alt="profile" className="chat-img" />
//         <div className="chat-details">
//           <h2 className="chat-name">{userName}</h2>
//           <h4 className="chat-msg">{lastMessage}</h4>
//         </div>
//       </div>
//       <div className="chat-time">12:45 PM</div>
//       <div>
//         {!chatExists && (
//           <button
//             style={{
//               backgroundColor: 'green',
//               color: 'white',
//               padding: '5px',
//               width: '50px',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//             onClick={StartChat}
//           >
//             Start
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Userchat;
