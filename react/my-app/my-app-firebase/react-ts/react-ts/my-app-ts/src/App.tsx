import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [age, setAge] = useState<number>(0);

  const handleSubmit = async (name: string, email: string) => {
    const response = await fetch(
      "https://project-1-81d3d-default-rtdb.firebaseio.com/tweets.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const person = Object.values(data).find((v: any) => v.name === name);
    
    if (person) {
      setAge(person.age + 10);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <p>Calculated Age: {age}</p>
    </div>
  );
};

export default App;
