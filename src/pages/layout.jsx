import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-teal-50 to-teal-200">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}