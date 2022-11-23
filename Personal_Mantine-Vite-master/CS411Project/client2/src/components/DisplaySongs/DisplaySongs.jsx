import {useEffect, useState} from "react";
import axios from "axios";

const baseURL = "http://localhost:8081/api/getAll"

export default function DisplaySongs(){
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
        })
    }, []);

    if(!post) return null;

    return (
        <div>
            <h1>Hello</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}