import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8081/api/getAll";

export default function DisplaySongs() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post[0].duration}</h1>
      <p>{post[0].songName}</p>
    </div>
  );
}