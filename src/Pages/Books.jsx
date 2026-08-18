import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CSS/Books.css";

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://openlibrary.org/search.json?q=programming")
            .then((response) => {
                setBooks(response.data.docs.slice(0, 10));
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch books.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="books-message">Loading books...</p>;
    }

    if (error) {
        return <p className="books-error">{error}</p>;
    }

    return (
        <div className="books-page">
            <h1 className="books-title">Programming Books</h1>

            <ul className="books-list">
                {books.map((book) => {
                    const id = book.key.split("/").pop();

                    return (
                        <li className="book-item" key={book.key}>
                            <Link className="book-name" to={`/books/${id}`}>
                                <strong>{book.title}</strong>
                            </Link>

                            <p className="book-author">
                                Author:{" "}
                                {book.author_name
                                    ? book.author_name.join(", ")
                                    : "Unknown author"}
                            </p>

                            {book.cover_i ? (
                                <img
                                    className="book-image"
                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                    alt={book.title}
                                />
                            ) : (
                                <p>No cover available</p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Books;