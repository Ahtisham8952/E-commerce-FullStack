import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function NavBar() {

  const item=useSelector((state)=>state.cart)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/cart">cart {item.length}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
