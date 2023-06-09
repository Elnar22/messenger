import "./App.css";
import { Form } from "./components/Form/Form";
import { useEffect, useState, useRef } from "react";
import { AUTHORS } from "./utils/consts";
import { MessageList } from "./components/MessageList/messageList";
import { DialogList } from "./components/DialogList/DialogList";

function App() {
  const userNames = [
    { author: "Ann", id: 1 },
    { author: "Bob", id: 2 },
    { author: "Caren", id: 3 },
    { author: "Mary", id: 4 },
    { author: "Lidi", id: 5 },
    { author: "Elnar", id: 6 },
  ];
  const timeout = useRef();

  const [messages, setMessages] = useState([]);
  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };
  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  // const [dialogs, setDialogs] = useState([...userNames]);
  // const addDialog = (newDlg) => {
  //   setDialogs([...dialogs]);
  // };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          text: "Robot answer",
          author: AUTHORS.robot,
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  return (
    <div className="App">
      <div className="messenger-block">
        <section className="dialog-list">
          <DialogList dialogs={userNames} />
        </section>
        <section>
          <div className="message-field">
            <MessageList messages={messages} />
          </div>
          <Form onSubmit={sendMessage} />
        </section>
      </div>
    </div>
  );
}

export default App;
