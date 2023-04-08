import { redirect } from "react-router-dom";

const requireAuth = async () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/login?message=You must log in first.");
  }
};

export default requireAuth;
