import "./message.styles.css";

export const Message = ({ text, author }) => {
  return (
    <div className="message">
      <div>From: {author}</div>
      <div>Message text: {text}</div>
    </div>
  );
};
