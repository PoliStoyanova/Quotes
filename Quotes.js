import React, { useEffect, useState } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    function fetchQuotes() {
        fetch("https://dummyjson.com/quotes?limit=10")
            .then(response => response.json())
            .then(quotes => {
                setQuotes(quotes);
                console.log(quotes);
            })
    }

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <div>
            <h1>Цитати</h1>
            <ul>
                {quotes.map((q, index) => (
                    <li key={index}>
                        <blockquote>{q.quote}</blockquote>
                        <p>- {q.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}