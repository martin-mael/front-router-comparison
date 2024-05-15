import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Outlet />
    </>
  );
};
