let leads = [];
    alert("Please fill all fields");
    return;
  }

  const lead = {
    id: Date.now(),
    name,
    company,
    email,
    status
  };

  leads.push(lead);

  displayLeads();
  updateDashboard();

  document.getElementById("name").value = "";
  document.getElementById("company").value = "";
  document.getElementById("email").value = "";
}

function displayLeads() {

  const tableBody = document.getElementById("leadTableBody");

  tableBody.innerHTML = "";

  leads.forEach((lead) => {

    tableBody.innerHTML += `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.company}</td>
        <td>${lead.email}</td>
        <td>${lead.status}</td>
        <td>
          <button class="delete-btn" onclick="deleteLead(${lead.id})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

function deleteLead(id) {

  leads = leads.filter((lead) => lead.id !== id);

  displayLeads();
  updateDashboard();
}

function updateDashboard() {

  document.getElementById("totalLeads").innerText = leads.length;

  const interested = leads.filter(
    (lead) => lead.status === "Interested"
  ).length;

  const closed = leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  document.getElementById("interestedLeads").innerText = interested;
  document.getElementById("closedLeads").innerText = closed;
}