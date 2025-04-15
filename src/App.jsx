import { useState } from 'react';
import './App.css';

const App = () => {

  const [activePage, setActivePage] = useState('cars');

  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="bg-yellow-700 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Item Viewer</h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => showPage('cars')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Cars
        </button>
        <button
          onClick={() => showPage('books')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Books
        </button>
        <button
          onClick={() => showPage('tvs')}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          TVs
        </button>
      </div>

      <div
        id="cars"
        className={`page ${activePage === 'cars' ? '' : 'hidden'} bg-white p-4 rounded shadow-md w-full max-w-md`}
      >
        <h2 className="bg-red-700 text-xl font-semibold mb-2">Cars</h2>
        <ul className="list-disc list-inside bg-blue-500">
          <li>Tesla Model S</li>
          <li>BMW M3</li>
          <li>Ford Mustang</li>
          <li>Honda Civic</li>
        </ul>
      </div>

      <div
        id="books"
        className={`page ${activePage === 'books' ? '' : 'hidden'} bg-white p-4 rounded shadow-md w-full max-w-md`}
      >
        <h2 className="bg-pink-500 text-xl font-semibold mb-2">Books</h2>
        <ul className="bg-green-600 list-disc list-inside">
          <li>The Great Gatsby</li>
          <li>1984 by George Orwell</li>
          <li>To Kill a Mockingbird</li>
          <li>Harry Potter Series</li>
        </ul>
      </div>

      <div
        id="tvs"
        className={`page ${activePage === 'tvs' ? '' : 'hidden'} bg-white p-4 rounded shadow-md w-full max-w-md`}
      >
        <h2 className="text-xl font-semibold mb-2 bg-indigo-500">TVs</h2>
        <ul className="list-disc list-inside bg-purple-500">
          <li>Samsung QLED</li>
          <li>LG OLED CX</li>
          <li>Sony Bravia</li>
          <li>TCL Roku TV</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
