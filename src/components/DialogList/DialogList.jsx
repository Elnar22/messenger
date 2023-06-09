import { Dialog } from "../Dialog/Dialog";

export const DialogList = ({ dialogs }) =>
  dialogs.map((dlg) => <Dialog key={dlg.id} author={dlg.author} />);
