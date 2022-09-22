import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className=" flex gap-20 justify-center px-20 py-5 items-center">
        <li className="navlink">
          <Link to="/">Home</Link>
        </li>
        <li className="navlink">
          <Link to="about/">About</Link>
        </li>
        <li className="navlink">
          <Link to="blogs/">Blogs</Link>
        </li>
        <li className="navlink btn">
          <Link to="contact/">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
