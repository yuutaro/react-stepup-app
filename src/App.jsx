import { useState, useCallback } from "react";
import { Childarea } from "./Childarea";
import { Inlinestyle } from "./components/Inlinestyle";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);


  return (
    <div className="bg-white text-center">
      <input className=" border rounded mt-8" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button className="border rounded bg-emerald-200" onClick={onClickOpen}>表示</button>
      <br />
      <br />
      <Childarea open={open} onClickClose={onClickClose} />
      <br />
      <br />
      <Inlinestyle />
    </div>
  );
};
