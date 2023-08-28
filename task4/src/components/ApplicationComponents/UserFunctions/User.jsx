import React, { useEffect, useState } from "react";
import { useContextData } from "../../../UserContext";
import DataTable, { createTheme } from "react-data-table-component";
import {
  NavLink,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import "../Application.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function User() {
  //pagination states

  const [searchParams, setSearchParams] = useSearchParams({
    pageNo: 1,
    items: 5,
  });

  let pageNo = searchParams.get("pageNo");
  let items = searchParams.get("items");

  const [currentPage, setcurrentPage] = useState(pageNo);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const options = ["5", "10", "15", "20"];
  const defaultOption = options[0];

  const [itemsPerPage, setitemsPerPage] = useState(items);

  const cFetch = useContextData();

  const { dId } = useParams();
  const { eId } = useParams();

  const navigate = useNavigate();

  const tableData = cFetch.users;

  useEffect(() => {
    setSearchParams({ pageNo: currentPage, items: itemsPerPage });
  }, [currentPage, itemsPerPage]);

  //DELETE USER EFFECT

  useEffect(() => {
    if (dId) {
      cFetch.deleteUser(dId);
    }
  }, [dId]);

  //DROPDOWN

  const dropDownChange = (e) => {
    setitemsPerPage(+e.value);
  };

  //PAGINATION LOGIC

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

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

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
    setSearchParams(number);
  };

  //SEARCH

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
        default: "rgba(0,0,0,0.25)",
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
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      ignoreRowClick: true,
      cell: (row) => (
        <NavLink to={`./edit-user/${row.id}`}>
          <button
            className="success"
            onClick={() => {
              cFetch.setEditedUser(row);
              console.log(cFetch.editedUser);
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
      cell: (row) => (
        // <button to={`./delete-user`}>
        <button
          className="delete"
          onClick={() => {
            navigate(`./delete-user/${row.id}`);
          }}
        >
          Delete
        </button>
        // {/* </button> */}
      ),
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <>
      <div className="max-container">
        <div className="p-10 r-10">
          <div className="small-containers">
            <div className="sub-container">
              <h2>Items Per Page</h2>
              <Dropdown
                options={options}
                value={items}
                onChange={dropDownChange}
                placeholder="Select an option"
              />
            </div>
            <div className="sub-container">
              <NavLink to={"./add-user"}>
                <button className="add-user">Add User</button>
              </NavLink>
            </div>
            <div className="sub-container">
              <h2>Search</h2>
              <input
                type="text"
                placeholder="Enter Search Text"
                className="search"
              />
            </div>
          </div>

          <DataTable
            columns={columns}
            data={pageItems}
            theme="translucent"
            highlightOnHover={true}
          />

          <div className="small-containers">
            <button
              className="fpnl pagination"
              onClick={() => {
                handlePagination(1);
              }}
              disabled={currentPage <= 1 ? true : false}
            >
              {"<<"}
            </button>
            <button
              className="fpnl pagination"
              onClick={() => {
                handlePagination(currentPage - 1);
              }}
              disabled={currentPage <= 1 ? true : false}
            >
              {"<"}
            </button>
            {renderPageNumbers}
            <button
              className="fpnl pagination"
              onClick={() => {
                handlePagination(currentPage + 1);
              }}
              disabled={currentPage >= pages.length ? true : false}
            >
              {">"}
            </button>
            <button
              className="fpnl pagination"
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
