export const Home = () => {
  const clickHandler = () => {
    alert("Hello, world!");
  };

  return (
    <div className="text-center">
      <h1>Home</h1>
      <button className="btn btn-primary" onClick={clickHandler}>Click me</button>
      <br />
      <br />
      <input type="text" className=" border border-gray-950 rounded-lg" placeholder="Type something"
        onChange={(e) => { console.log(e.target.value) }}
        onBlur={() => { console.log("onBlur発火") }}
        onFocus={() => { console.log("onFocus発火") }}
      />
      <br />
      <br />
      <div className="w-full h-20 bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400 focus:bg-cyan-500"
        onMouseEnter={() => { console.log("onMouseEnter発火") }}
        onMouseLeave={() => { console.log("onMouseLeave発火") }}
      >Hover me</div>
    </div>
  );
}