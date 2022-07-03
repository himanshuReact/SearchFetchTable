import "./styles.css";
import React, { useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";
import { dataMap } from "./AuthorData";

export default function App() {
  const [fetching, setFetching] = useState(false);
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);
  const [noResponse, setNoResponse] = useState(false);
  // const

  const handleInput = (e) => {
    console.log(e.target.value);
    setAuthor(e.target.value);
  };

  const handleFetch = () => {
    setFetching(true);
    const authorKey = Object.keys(dataMap).find((elem) =>
      elem.toLowerCase().includes(author.toLowerCase())
    );

    if (authorKey) {
      console.log(authorKey);
      setBooks(dataMap[authorKey]);
      setNoResponse(false);
    } else {
      setBooks([]);
      setNoResponse(true);
      console.log({ books });
    }
  };

  return (
    <div className="App">
      <Input handleInput={handleInput} handleFetch={handleFetch} />
      {books.length > 0 && <Table books={books} />}
      {noResponse && <div>No Results Found</div>}
    </div>
  );
}
