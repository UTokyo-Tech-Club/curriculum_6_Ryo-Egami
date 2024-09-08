import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import React from "react";

const App: React.FC = () => {
  // handleSubmit関数を定義し、nameとemailを受け取る
  const handleSubmit = (name: string, email: string): void => {
    console.log("onSubmit:", name, email);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* FormコンポーネントにonSubmitをpropsとして渡す */}
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;