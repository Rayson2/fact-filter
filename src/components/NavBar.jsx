import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import '../styles/NavBar.scss';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="navBar">
      <div className="navLeft">
        <Link to="/" >
        <div className='container'>
          <img src="/logo.png" alt="Logo" className="logo" />
          <h1 className="name">Fact Filter</h1></div>
        </Link>
      </div>

      <nav className={`navRight ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        <div className="dropdown" onClick={toggleDropdown}>
          <span>
            Format <ChevronDown size={16} />
          </span>
          {dropdownOpen && (
            <div className="dropdownMenu">
              <Link to="/format/text" onClick={() => setMobileOpen(false)}>Text</Link>
              <Link to="/format/image" onClick={() => setMobileOpen(false)}>Image</Link>
              <Link to="/format/video" onClick={() => setMobileOpen(false)}>Video</Link>
              <Link to="/format/audio" onClick={() => setMobileOpen(false)}>Audio</Link>
            </div>
          )}
        </div>
      </nav>

      <button className="navToggle" onClick={toggleMobile} aria-label="Toggle navigation">
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Navbar;
