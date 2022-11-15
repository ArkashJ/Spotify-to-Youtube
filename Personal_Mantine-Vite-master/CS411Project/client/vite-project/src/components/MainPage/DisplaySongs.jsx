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
    let data = post.map((item) => {
        return (
            <tr key = {item.id}>
                <td>{item.duration}</td>
                <td>{item.songName}</td>
                <td>{item.albumName}</td>
                <td>{item.artist}</td>
                <td>{item.albumId}</td>
            </tr>
        )
    })
  return (
    
    <div>
        <table>
            <tbody>
                {data}
            </tbody>
        </table>
    </div>
  );
}