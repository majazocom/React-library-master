import React from 'react';

function Book({book, moreInfo}) {
    return (
        <article style={{ backgroundColor : book.color }} onClick={() => moreInfo(book)}>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
        </article>
    )
}

export default Book;