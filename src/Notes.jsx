import axios from "axios";
import { useEffect } from "react";

const Notes = () => {
  useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const { data } = response;
            console.log(data);
        })
  }, []);
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};

export default Notes;
