import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type UserParamsType = {
  id: number;
};

type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

const UserDetails = () => {
  const { id } = useParams<UserParamsType | any>();
  const url: string = `https:/reqres.in/api/users/${id}`;

  const [user, setUser] = useState<UserType | any>();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <div>
        <h1>
          {user?.first_name} {user?.last_name}
        </h1>
        <h3>{user?.email}</h3>
      </div>
      <div>
        <img src={user?.avatar} alt="" />
      </div>
    </div>
  );
};

export default UserDetails;
