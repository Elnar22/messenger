import "./chatList.styles.css";
import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import {
  clearMessages,
  initMessagesForChat,
} from "../../store/messages/actions";
import { addChat, deleteChat } from "../../store/chats/actions";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const handleSubmit = (newChatName) => {
    const newChat = {
      author: newChatName,
      id: `chat-${Date.now()}`,
    };

    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id));
  };

  const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id));
  };

  return (
    <>
      <ul className="chat_list">
        {chats.map((chat) => (
          <div key={chat.id}>
            <li>
              <Link to={`/chat/${chat.id}`} component="a">
                {chat.author}
              </Link>
            </li>
            <span onClick={() => handleRemoveChat(chat.id)}>Delete</span>
          </div>
        ))}
      </ul>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};
