import React from "react";
import { useState } from "react";

// 型定義: Formコンポーネントのpropsで受け取る関数の型
interface FormProps {
  onSubmit: (name: string, email: string) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // submit関数で親コンポーネントから渡されたhandleSubmitを呼び出す
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSubmit(name, email); // 親から渡された関数にnameとemailを渡す
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={submit}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email: </label>
      <input
        type="email"
        style={{ marginBottom: 20 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;