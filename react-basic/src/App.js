// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { Article, TextInput, Counter, ToggleButton } from "./component/index";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("deatiger");
  const ids = ["deatiger", "gaearon", "aws", "google", "facebook"];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((error) => console.error());
  }, [id]);

  return (
    <>
      <div>
        <Article
          title={"新・日本一わかりやすいReact入門1"}
          content={"今日のトピックはpropsについて"}
        />
        <TextInput />
        <p>
          {id}の、Github上の名前は{name}です
        </p>
        <button onClick={getRandomId}>IDを変更</button>
        {/* <Counter /> */}
        {/* <ToggleButton /> */}
      </div>
    </>
  );
}

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
