import { useEffect, useState } from "react";

function UseEffectDemo(){

const[posts,setPosts] = useState([]);
const[refetch,setRefetch] = useState(false);
//useEffect(businessFn/sideeffects,dependencies)
useEffect(()=>{
    const API_URL = "https://picsum.photos/v2/list?page=2&limit=5";
    fetch(API_URL).then((responseObj)=>responseObj.json())
    .then((responseData)=>setPosts(responseData))
},[])

const handleclick=()=>{
    console.log("refetch value",refetch);
    setRefetch(!refetch);
    console.log("refetch value after change",refetch);
}


    return(
        <>
            <main>
                <button onClick={handleclick}>Refetch</button>
                {posts.map((post) => {
                    console.log(`post id ${post.id} author: ${post.author} url: ${post.download_url}`);
                    return (
                        <article key={post.id}>
                            <h1>id:{post.id} author: {post.author}</h1>
                            <img  src={post.download_url} alt={post.author} />
                        </article>
                    );
                })}
            </main>
           
        </>
    );
}

export default UseEffectDemo;