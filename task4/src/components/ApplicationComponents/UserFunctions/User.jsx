import React, { useEffect, useState } from "react";
import { useContextData } from "../../../UserContext";
import DataTable, { createTheme } from "react-data-table-component";
import { NavLink, useSearchParams } from "react-router-dom";
import "../Application.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function User() {
  const cFetch = useContextData();
  const tableData = cFetch.users;
  const setter = cFetch.setIndex;

  const [searchParams, setSearchParams] = useSearchParams("pageNo")

   //DROPDOWN

   const options = ["5", "10", "15", "20"];
   const defaultOption = options[0];
 
   const dropDownChange = (e) => {
     setitemsPerPage(+e.value);
   };

  //PAGINATION LOGIC

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(defaultOption);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(tableData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pageItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageEvent = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handlePageEvent}
          className={currentPage == number ? "pagination active" : "pagination"}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  const handlePagination = (number) => {
    setcurrentPage(number);
  };

 

  //GET EDIT INDEX

  const findIndex = (value) => {
    console.log(value.firstName);
    let index = tableData.findIndex((i) => {
      return (
        i.firstName === value.firstName &&
        i.lastName === value.lastName &&
        i.city === value.city &&
        i.email === value.email
      );
    });
    setter(index);
  };

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
    {
      ignoreRowClick: true,
      cell: (row) => (
        <NavLink to={"./edit-user"}>
          <button
            className="success"
            onClick={() => {
              findIndex(row);
            }}
          >
            Edit
          </button>
        </NavLink>
      ),
      allowOverflow: true,
      button: true,
    },
    {
      ignoreRowClick: true,
      cell: () => <button className="delete">Delete</button>,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="max-container">
        <div className="p-10 r-10">
          <NavLink to={"./add-user"}>
            <button className="add-user">Add User</button>
          </NavLink>

          <div className="small-containers">
            <Dropdown
              options={options}
              value={defaultOption}
              onChange={dropDownChange}
              placeholder="Select an option"
            />
          </div>

          <DataTable
            columns={columns}
            data={pageItems}
            theme="translucent"
            highlightOnHover={true}
          />

          <div className="small-containers">
            <button
              className="fpnl"
              onClick={() => {
                handlePagination(1);
              }}
              disabled={currentPage <= 1 ? true : false}
            >
              {"<<"}
            </button>
            <button
              className="fpnl"
              onClick={() => {
                handlePagination(currentPage - 1);
              }}
              disabled={currentPage <= 1 ? true : false}
            >
              {"<"}
            </button>
            {renderPageNumbers}
            <button
              className="fpnl"
              onClick={() => {
                handlePagination(currentPage + 1);
              }}
              disabled={currentPage >= pages.length ? true : false}
            >
              {">"}
            </button>
            <button
              className="fpnl"
              onClick={() => {
                handlePagination(pages.length);
              }}
              disabled={currentPage >= pages.length ? true : false}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
