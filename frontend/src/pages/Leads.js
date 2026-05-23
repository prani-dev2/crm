import { useEffect, useState } from "react";

import axios from "axios";

function Leads() {

  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [editingLead, setEditingLead] =
    useState(null);

  const [editData, setEditData] = useState({
    name: "",
    company: "",
    email: "",
    status: "New"
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/leads"
    );

    setLeads(res.data);
  };

  const deleteLead = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/leads/${id}`
    );

    fetchLeads();
  };

  const startEdit = (lead) => {

    setEditingLead(lead._id);

    setEditData({
      name: lead.name,
      company: lead.company,
      email: lead.email,
      status: lead.status
    });
  };

  const handleEditChange = (e) => {

    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const saveEdit = async () => {

    await axios.put(
      `http://localhost:5000/api/leads/${editingLead}`,
      editData
    );

    setEditingLead(null);

    fetchLeads();
  };

  const filteredLeads = leads.filter((lead) => {

    const matchesSearch =
      lead.name.toLowerCase().includes(
        search.toLowerCase()
      ) ||

      lead.company.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchesStatus =
      statusFilter === "All" ||
      lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (

    <div>

      <h1>Lead Pipeline</h1>

      <div className="filters">

        <input
          type="text"
          placeholder="Search by name/company"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="New">
            New
          </option>

          <option value="Interested">
            Interested
          </option>

          <option value="Closed">
            Closed
          </option>

        </select>

      </div>

      <div className="leads-container">

        {
          filteredLeads.map((lead) => (

            <div
              className="lead-box"
              key={lead._id}
            >

              {
                editingLead === lead._id
                ? (

                  <>

                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                    />

                    <input
                      type="text"
                      name="company"
                      value={editData.company}
                      onChange={handleEditChange}
                    />

                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                    />

                    <select
                      name="status"
                      value={editData.status}
                      onChange={handleEditChange}
                    >

                      <option>New</option>

                      <option>Interested</option>

                      <option>Closed</option>

                    </select>

                    <button
                      className="save-btn"
                      onClick={saveEdit}
                    >
                      Save
                    </button>

                  </>

                )

                : (

                  <>

                    <h2>{lead.name}</h2>

                    <p>
                      <strong>Company:</strong>
                      {" "}
                      {lead.company}
                    </p>

                    <p>
                      <strong>Email:</strong>
                      {" "}
                      {lead.email}
                    </p>

                    <span
                      className={`status ${lead.status}`}
                    >
                      {lead.status}
                    </span>

                    <br />

                    <button
                      className="edit-btn"
                      onClick={() => startEdit(lead)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteLead(lead._id)
                      }
                    >
                      Delete
                    </button>

                  </>

                )
              }

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Leads;