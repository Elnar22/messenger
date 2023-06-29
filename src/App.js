import "./App.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import { Profile } from "./screens/Profile/Profile";
import { Home } from "./screens/Home/Home";
import { useState } from "react";
import { addChat, deleteChat } from "./store/chats/actions";
import { selectChats } from "./store/chats/selectors";

const initialChats = [
  { author: "Ann", id: 1 },
  { author: "Bob", id: 2 },
  { author: "Caren", id: 3 },
  { author: "Mary", id: 4 },
  { author: "Lidi", id: 5 },
  { author: "Elnar", id: 6 },
];
const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(initialMessages);

  const addMessage = (newMsg, id) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const addNewChat = (newChat) => {
    dispatch(addChat(newChat));
    setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    dispatch(deleteChat(id));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[id];

      return newMessages;
    });
  };
  return (
    <BrowserRouter>
      <section className="main">
        <div className="content_container">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/chat"
              element={
                <ChatList
                  deleteChat={removeChat}
                  addChat={addNewChat}
                  chats={chats}
                />
              }
            >
              <Route
                path=":id"
                element={<Chat messages={messages} addMessage={addMessage} />}
              />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
