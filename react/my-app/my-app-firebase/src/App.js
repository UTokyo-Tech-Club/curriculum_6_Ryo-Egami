import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(0); 

  
  const handleSubmit = async () => {
    try {
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
      
      
      const obj = Object.values(data).filter((v) => v.name === "inada")[0];
      if (obj) {
        setAge(obj.age + 10); 
      } else {
        console.error("指定された名前のデータが見つかりませんでした。");
      }
    } catch (error) {
      console.error("データの取得に失敗しました。", error);
    }
  };

  return (
    <div>
      <h1>年齢 +10 アプリ</h1>
      <button onClick={handleSubmit}>名前と年齢を取得</button>
      <p>年齢: {age}歳</p> 
    </div>
  );
};

export default App;
