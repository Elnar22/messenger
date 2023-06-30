import { useMemo } from "react";
import { AUTHORS } from "../../utils/consts";
import { MessageList } from "../../components/MessageList/messageList";
import { Form } from "../../components/Form/Form";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";

export function Chat() {
  const { id } = useParams();

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    dispatch(
      addMessageWithReply(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        },
        id
      )
    );
  };

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
