import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./CSS/BookDetails.css";

function BookDetails() {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/works/${id}.json`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch book details.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <p className="book-details-message">
                Loading book details...
            </p>
        );
    }

    if (error) {
        return <p className="book-details-error">{error}</p>;
    }

    const description =
        typeof book.description === "string"
            ? book.description
            : book.description?.value || "No description available.";

    return (
        <div className="book-details-page">
            <div className="book-details-card">
                <h1 className="book-details-title">{book.title}</h1>

                {book.covers && book.covers.length > 0 ? (
                    <img
                        className="book-details-image"
                        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                        alt={book.title}
                    />
                ) : (
                    <p>No cover available</p>
                )}

                <h2 className="book-details-heading">Description</h2>

                <p className="book-details-description">
                    {description}
                </p>

                <Link className="back-link" to="/books">
                    Back to Books
                </Link>
            </div>
        </div>
    );
}

export default BookDetails;