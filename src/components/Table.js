import React from "react";
import { Data } from "./Data";
const Table = () => {
  return (
    <div>
      <h1>Table</h1>
      <input type="text" placeholder="search" />
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
        </thead>
        <tbody>
          {Data.map((data) => (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <select>
          <option value="">---select---</option>
          <option value="10">2</option>
          <option value="10">4</option>
          <option value="10">5</option>
        </select>
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Table;
