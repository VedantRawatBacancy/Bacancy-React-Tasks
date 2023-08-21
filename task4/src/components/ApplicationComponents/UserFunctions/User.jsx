import React, { useEffect } from "react";
import { useContextData } from "../../../UserContext";
import DataTable, { createTheme } from "react-data-table-component";
import { NavLink } from "react-router-dom";
import "../Application.css";

function User() {
  const cFetch = useContextData();
  const tableData = cFetch.users;

  createTheme(
    "translucent",
    {
      text: {
        primary: "#121212",
        secondary: "#252525",
      },
      background: {
        default: "rgba(255,255,255,0.5)",
      },
      context: {
        background: "#cb4b16",
        text: "#121212",
      },
      divider: {
        default: "rgba(0,0,0,0.15)",
      },
      button: {
        default: "#2aa198",
        hover: "rgba(0,0,0,.08)",
        focus: "rgba(255,255,255,.12)",
        disabled: "rgba(255, 255, 255, .34)",
      },
      sortFocus: {
        default: "#2aa198",
      },
    },
    "light"
  );

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  ];

  return (
    <>
      <div className="max-container">
        <div className="p-10 r-10">
          <NavLink to={"./add-user"}>
            <button className="add-user">Add User</button>
          </NavLink>
          <hr />
          <DataTable
            columns={columns}
            data={tableData}
            theme="translucent"
            // selectableRows
            pagination={true}
            highlightOnHover={true}
            onRowClicked={(row, event) => {}}
          />
        </div>
      </div>
    </>
  );
}

export default User;
