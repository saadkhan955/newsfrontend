import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const loadMenu = async () => {
    try {
      const endpoint = "http://devback.lndo.site:8000/api/news-menu-api/main";
      const response = await fetch(endpoint);
      if (response.status === 200) {
        const data = await response.json();
        setMainMenu(data);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-item.dropdown")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="navbar-nav">
      {mainMenu.map((item, index) =>
        item.sub_menu ? (
          <li
            key={index}
            className={`nav-item dropdown ${
              activeDropdown === index ? "show" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.url}
              className={`nav-link dropdown-toggle ${
                activeDropdown === index ? "show" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(index);
              }}
              aria-expanded={activeDropdown === index}
            >
              {item.title}
            </Link>
            <div
              className={`dropdown-menu rounded-0 m-0 ${
                activeDropdown === index ? "show" : ""
              }`}
              style={{
                display: activeDropdown === index ? "block" : "none",
              }}
            >
              {item.sub_menu.map((subItem, subIndex) => (
                <Link
                  to={subItem.url}
                  key={subIndex}
                  className="dropdown-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </li>
        ) : (
          <li key={index} className="nav-item">
            <Link to={item.url} className="nav-link">
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
