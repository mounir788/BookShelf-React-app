import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelfName, updateBookShelf }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfName}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<li key={book.id}>
							<Book book={book} updateBookShelf={updateBookShelf} />
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Shelf;
