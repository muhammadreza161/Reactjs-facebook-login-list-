// import React from 'react'
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../src/css/style.css";

const JobList = () => {
  const url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";

  const [users, setUsers] = useState([]);

  const getDataUsers = async () => {
    const response = await fetch("http://dev3.dansmultipro.co.id/api/recruitment/positions.json");
    const dataku = await response.json();
    const users = dataku.slice(0, 8);
    setUsers(users);
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <div className="App">
      {/* <h1>Jobs List</h1>
      {users.map((user) => {
        return (
          <div>
            <h3 key={user.id}> Nama Perusahaan : {user.company}</h3>
            <h3 key={user.id}> Location : {user.location}</h3>
          </div>
        );
      })} */}
      <div>
        <div className=" my-4">
          <h1><b>Jobs List</b></h1>
        </div>
        <Container>
          <Table className="tabel" striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Job</th>
                <th>Company</th>
                <th>Location</th>
                {/* <th>Description</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td> {user.title}</td>
                    <td> {user.company}</td>
                    <td> {user.location} </td>
                    {/* <td> {user.description} </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};
export default JobList;
