import { NavLink } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>SalesForge CRM</h2>

      <ul>

        <li>
          <NavLink
          to="/"
          className={({ isActive }) =>
          isActive ? "active-link" : ""
          }
          >
          Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/leads"
          className={({ isActive }) =>
          isActive ? "active-link" : ""
          }
          >
          Leads
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/add-lead"
          className={({ isActive }) =>
           isActive ? "active-link" : ""
          }
          >
          Add Lead
          </NavLink>
        </li>

        <li>
          <NavLink
          to="/team"
          className={({ isActive }) =>
          isActive ? "active-link" : ""
          }
          >
          Team
<         /NavLink>
        </li>

        <li>
         <NavLink
        to="/activities"
        className={({ isActive }) =>
        isActive ? "active-link" : ""
        }
        >
        Activities
        </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;