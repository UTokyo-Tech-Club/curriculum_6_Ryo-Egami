import { useState } from "react";

type FormProps = {
  onSubmit: (name: string, email: string) => void;
};

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(name, email);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={submit}>
      <label>Name: </label>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email: </label>
      <input
        type={"email"}
        style={{ marginBottom: 20 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type={"submit"}>Submit</button>
    </form>
  );
};

export default Form;