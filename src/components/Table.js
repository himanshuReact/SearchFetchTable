import React, { useState } from "react";
import { dataMap } from "../AuthorData";
import "../styles.css";

const Table = ({ books }) => {
  const renderHeader = () => {
    return (
      <tr>
        <td>ArticleId</td>
        <td>Title</td>
        <td>Upvotes</td>
        <td>Date</td>
      </tr>
    );
  };

  const renderBody = () => {
    return books.map((elem) => {
      return (
        <tr>
          <td>{elem.articleId}</td>
          <td>{elem.title}</td>
          <td>{elem.upvotes}</td>
          <td>{elem.date}</td>
        </tr>
      );
    });
  };

  return (
    <table className="book__details">
      {renderHeader()}
      {renderBody()}
    </table>
  );
};

export default Table;
