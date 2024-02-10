import { memo } from "react";

export const Childarea = memo((props) => {
  const { open, onClickClose } = props;

  return (
    <>
      {open ? (
        <div className="bg-emerald-200 p-4">
          <p>子コンポーネント</p>
          <button className="border rounded bg-red-200" onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
