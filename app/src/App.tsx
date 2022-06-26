import { useState, useEffect } from "react";
import axios from "axios";

async function getJsonSample() {
  const res = await axios.get("http://localhost:3000/data/sample.json");
  return res.data;
}

function useHook() {
  const [data, setData] = useState<any>({});
  
  useEffect(() => {
    getJsonSample().then((data) => {
      setData(data);
    });
  }, []);

  return JSON.stringify(data, null, 2);
}

function App() {
  const data = useHook();

  return (
    <div>{data}</div>
  );
}

export default App;
