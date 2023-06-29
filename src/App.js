import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { ChatList } from "./components/ChatList/ChatList";
import { Profile } from "./screens/Profile/Profile";
import { Home } from "./screens/Home/Home";

function App() {
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
            <Route path="/chat" element={<ChatList />}>
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
