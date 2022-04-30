import React from "react";
import { useParams } from "react-router-dom";

// http://localhost:3003/users/manoid

export const UserPage = () => {
  const { id } = useParams();

  return <div>User id: {id}</div>;
};
