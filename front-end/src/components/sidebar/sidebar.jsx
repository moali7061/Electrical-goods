import "./sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h3>Navbar</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Disabled</a></li>
      </ul>
    </nav>
  );
}
