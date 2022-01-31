import { Link, Outlet } from "react-router-dom";

const presset = {
  styles: {
    NavLink: {
      width: "100px",
      height: "50px",
      fontSize: "20px",
      listStyleType: "none",
      textDecoration: "none",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    NavBar: {
      List: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "green",
      },
    },
  },
};

function NavBar() {
  return (
    <nav>
      <ul style={presset.styles.NavBar.List}>
        <Link style={presset.styles.NavLink} to="/">
          Home
        </Link>
        <Link style={presset.styles.NavLink} to={"/blogs"}>
          Blogs
        </Link>
        <Link style={presset.styles.NavLink} to={"/contact"}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
