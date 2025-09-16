import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectDemo() {
    const [posts, setPosts] = useState([]);
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        const API_URL = "https://picsum.photos/v2/list?page=2&limit=5";
        axios.get(API_URL)
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log("Error in Fetching data ", error);
            });
        // fetch(API_URL)
        //     .then((responseObj) => responseObj.json())
        //     .then((responseData) => setPosts(responseData))
    }, [refetch]); //if i remove this [] (dependencies) it will keep calling on infinitely

    const handleClick = () => {
        console.log(refetch);
        setRefetch(!refetch);

    }


    return (
        <>
            <button onClick={handleClick}>ReFetch Data</button>
            {posts.map((post) => {
                console.log(`post id: ${post.id} author: ${post.author} url: ${post.url}`);
                return (
                    <article>
                        <h1>Id: {post.id} author: {post.author}</h1>
                        <img src={post.download_url} height={120} width={120} />
                    </article>
                );

            })}
        </>
    );
}