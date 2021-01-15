import React from 'react';

function BookInfo({book, close}) {
    return (
        <article>
            <header>
                <a href="#" onClick={() => close('')}>X</a>
            </header>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
            <p>{book.plot}</p>
        </article>
    )
}

export default BookInfo;