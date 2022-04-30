import React from "react";
import { useSearchParams } from "react-router-dom";

// http://localhost:3003/users?name=juozas&age=70

export const UsersPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      <p>User:</p>
      <p>username: {name ? name : "-"}</p>
      <p>age: {age ? age : "-"}</p>
    </div>
  );
};
