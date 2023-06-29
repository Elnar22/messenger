import "./chatList.styles.css";
import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";

export const ChatList = ({ chats, addChat, deleteChat }) => {
  const handleSubmit = (newChatName) => {
    const newChat = {
      author: newChatName,
      id: `chat-${Date.now()}`,
    };

    addChat(newChat);
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
            <span onClick={() => deleteChat(chat.id)}>Delete</span>
          </div>
        ))}
      </ul>
      <Form onSubmit={handleSubmit} />
      <Outlet />
    </>
  );
};
