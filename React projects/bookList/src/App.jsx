import { useState } from 'react'

function App() {

  const [books, setBooks] = useState([
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 15.99 },
    { id: 2, title: '1984', author: 'George Orwell', price: 12.99 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 18.99 },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 14.99 },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleRemove = (id) => {

    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleAddClick = () => {
    setNewBook({ title: '', author: '', price: '' });
    setIsFormVisible(true);
  };

  const handleSave = () => {
    if (newBook.title && newBook.author && newBook.price) {
      setBooks((prevBooks) => [
        ...prevBooks,
        {
          id: prevBooks.length + 1,
          title: newBook.title,
          author: newBook.author,
          price: parseFloat(newBook.price),
        },
      ]);
      setNewBook({ title: '', author: '', price: '' });
      setIsFormVisible(false);
    } else {
      alert('Please fill in all fields for the new book.');
    }
  };



  return (
    <div>
      <h1>Book List</h1>
      <button onClick={handleAddClick}>Add</button>

      {isFormVisible && (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <label>Author:</label>
          <input
            type="text"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <label>Price:</label>
          <input
            type="number"
            value={newBook.price}
            onChange={(e) => setNewBook({ ...newBook, price: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>{book.title} by {book.author} - ${book.price}</span>
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
