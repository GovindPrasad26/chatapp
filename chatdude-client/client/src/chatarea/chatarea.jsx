import './chatarea.css'
import ChatFooter from './chatfooter';
import Chatheader from './chatheader';
import Chatbody from './chatbody';
function Chatarea(){
    return(<div className="chat">
     <Chatheader/>
     <Chatbody/>
    <ChatFooter/>
    </div>)
}
export default Chatarea;