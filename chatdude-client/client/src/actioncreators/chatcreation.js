
import { SelectChatAction,ChatAction } from "../action/chataction";
const ChatCreation=(userdata)=>{
    ChatAction.playload=userdata
    return ChatAction
}
export default ChatCreation;

export const SelectedChatCreation=(SelectUser)=>{
    SelectChatAction.payload=SelectUser;
    return SelectChatAction
}

