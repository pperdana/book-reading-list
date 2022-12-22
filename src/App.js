import BookForm from "./components/book-form.component";
import BookList from "./components/book-list.component";
import Navbar from "./components/navbar.component";
import BookContextProvider from "./contexts/books.context";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
