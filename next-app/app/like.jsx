'use client'
import { useState } from "react";

export default function Like() {
    const [likes, setLikes] = useState(2);

    function handleClick() {
        setLikes(likes * likes);
    }

    return (
        <div>
            <button onClick = {handleClick}>Likes ({likes})</button>
        </div>
    );
}