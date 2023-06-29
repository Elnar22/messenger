import { useEffect, useMemo, useRef } from "react";
import { AUTHORS } from "../../utils/consts";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/Form";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";

export function Chat() {
  const { id } = useParams();

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const timeout = useRef();

  const sendMessage = (text) => {
    dispatch(
      addMessage(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        },
        id
      )
    );
  };

  useEffect(() => {
    const lastMessage = messages?.[messages?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        dispatch(
          addMessage(
            {
              text: "Robot answer",
              author: AUTHORS.robot,
              id: `msg-${Date.now()}`,
            },
            id
          )
        );
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="App">
      <div className="messenger-block">
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
