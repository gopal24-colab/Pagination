import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type UserListType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

const Users = () => {
  // const page: number = Math.floor(Math.random() * 10);
  const url = `https:/reqres.in/api/users?page=${1}`;

  const [lists, setLists] = useState<UserListType[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setLists(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table width="100%">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => {
            return (
              <tr key={list.id}>
                <td>
                  <img
                    src={list.avatar}
                    alt={list.first_name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>
                  <Link to={`/userdetails/${list.id}`}>{list.first_name}</Link>
                </td>
                <td>{list.last_name}</td>
                <td>{list.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
