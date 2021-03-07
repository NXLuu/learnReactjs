

function tick() {
  const elem= (
    <div>
      <h1>Hello, word!!</h1>
      <h2>It is {new Date.toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(document.getElementById("root"), elem);
}
tick();