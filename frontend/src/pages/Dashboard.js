import { useEffect, useState } from "react";

import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

function Dashboard() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/leads"
    );

    setLeads(res.data);
  };

  const totalLeads = leads.length;

  const interestedLeads =
    leads.filter(
      (lead) => lead.status === "Interested"
    ).length;

  const closedLeads =
    leads.filter(
      (lead) => lead.status === "Closed"
    ).length;

  const newLeads =
    leads.filter(
      (lead) => lead.status === "New"
    ).length;

  const pieData = [
    {
      name: "New",
      value: newLeads
    },

    {
      name: "Interested",
      value: interestedLeads
    },

    {
      name: "Closed",
      value: closedLeads
    }
  ];

  const COLORS = [
    "#3b82f6",
    "#f59e0b",
    "#22c55e"
  ];

  const barData = [
    { month: "Jan", leads: 20 },
    { month: "Feb", leads: 35 },
    { month: "Mar", leads: 50 },
    { month: "Apr", leads: 40 }
  ];

  return (

    <div>

      <h1>
        Manufacturing Sales Dashboard
      </h1>

      <div className="cards">

        <div className="card">

          <h2>{totalLeads}</h2>

          <p>Total Leads</p>

        </div>

        <div className="card">

          <h2>{interestedLeads}</h2>

          <p>Interested Clients</p>

        </div>

        <div className="card">

          <h2>{closedLeads}</h2>

          <p>Closed Deals</p>

        </div>

        <div className="card">

          <h2>
            ₹{closedLeads * 50000}
          </h2>

          <p>Estimated Revenue</p>

        </div>

      </div>

      <div className="charts-container">

        <div className="chart-box">

          <h2>
            Lead Status Distribution
          </h2>

          <PieChart
            width={350}
            height={300}
          >

            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >

              {
                pieData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />

                  )
                )
              }

            </Pie>

            <Tooltip />

          </PieChart>

        </div>

        <div className="chart-box">

          <h2>
            Monthly Lead Growth
          </h2>

          <BarChart
            width={450}
            height={300}
            data={barData}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="leads"
              fill="#3b82f6"
            />

          </BarChart>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;