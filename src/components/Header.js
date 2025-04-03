import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="app-header-container">
      <img className="app-logo" alt="App Logo" src={LOGO_URL}></img>
      <nav className="header-link-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
