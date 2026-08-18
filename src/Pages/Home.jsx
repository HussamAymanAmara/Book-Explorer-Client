import { Link } from "react-router-dom";
import "./CSS/Home.css";

function Home() {
    return (
        <div className="home-page">
            <h1 className="home-title">
                Welcome to Book Explorer
            </h1>

            <img
                className="home-image"
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt="Books in a library"
            />

            <p className="home-description">
                Explore programming books and view detailed information about each
                book.
            </p>

            <Link className="home-link" to="/books">
                Explore Books
            </Link>
        </div>
    );
}

export default Home;