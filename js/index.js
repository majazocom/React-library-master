import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Book from './book';
import books from '../assets/childrensbooks.json';
import BookInfo from './bookInfo';

// 1. importera alla böckerna från min JSON
// 3. för att sedan skicka in en och en i Book-komponenten som prop
// 4. ta varje bok och bryt ut till egen komponent så man kan titta på infon om den

function App(props) {
    const [currentBook, setCurrentBook] = useState('');

    return (
        <section class="library">
            <div class="wrapper">
                <h1>Books</h1>
                {currentBook ? <BookInfo book={currentBook} close={setCurrentBook} /> :
                    <main>
                        {/* //2. mappa ut dem  */}
                        {props.books.map((book, index) => {
                            return <Book book={book} moreInfo={setCurrentBook} key={index} />
                        })}
                    </main>
                }
            </div>
        </section>
    )
}

ReactDOM.render(<App books={books} />, document.getElementById('root'));