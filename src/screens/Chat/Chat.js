import { useEffect, useRef, useState } from "react";
import { AUTHORS } from "../../utils/consts";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/Form";
import { Navigate, useParams } from "react-router-dom";

export function Chat({ messages, addMessage }) {
  const { id } = useParams();
  const timeout = useRef();

  // const [messages, setMessages] = useState(initMessages);

  const sendMessage = (text) => {
    addMessage(
      {
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`,
      },
      id
    );
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage(
          {
            text: "Robot answer",
            author: AUTHORS.robot,
            id: `msg-${Date.now()}`,
          },
          id
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="App">
      <div className="messenger-block">
        <section>
          <div className="message-field">
            <MessageList messages={messages[id]} />
          </div>
          <Form onSubmit={sendMessage} />
        </section>
      </div>
    </div>
  );
}
