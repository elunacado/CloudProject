import './Sidebar.css';

export default function Sidebar({ items }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Room Appointer</h2>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
