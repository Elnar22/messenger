import "./chatList.styles.css";
import { Link, Outlet } from "react-router-dom";

const userNames = [
  { author: "Ann", id: 1 },
  { author: "Bob", id: 2 },
  { author: "Caren", id: 3 },
  { author: "Mary", id: 4 },
  { author: "Lidi", id: 5 },
  { author: "Elnar", id: 6 },
];

export const ChatList = () => (
  <>
    <ul className="chat_list">
      {userNames.map((chat) => (
        <li key={chat.id}>
          <Link to={`/chat/${chat.id}`} component="a">
            {chat.author}
          </Link>
        </li>
      ))}
    </ul>
    <Outlet />
  </>
);
