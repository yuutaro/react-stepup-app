import { useState } from "react";

export const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }

  return (
    <div className="bg-white">
      <h1 className="text-4xl text-center">Hello world!</h1>
      <div className="text-center">counter</div>
      <button onClick={() => { increment() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <p>{num}</p>
    </div>
  );
};
