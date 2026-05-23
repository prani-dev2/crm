import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>BDA CRM</h2>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/leads">Leads</Link>
        </li>

        <li>
          <Link to="/add-lead">Add Lead</Link>
        </li>

        <li>
          <Link to="/team">Team</Link>
        </li>

        <li>
          <Link to="/activities">Activities</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;