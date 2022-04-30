import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  console.log("I was in redirect page");

  return null;
};
