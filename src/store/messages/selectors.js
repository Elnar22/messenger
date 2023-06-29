export const selectMessagesByChatId = (chatId) => (state) =>
  state.messages[chatId];
