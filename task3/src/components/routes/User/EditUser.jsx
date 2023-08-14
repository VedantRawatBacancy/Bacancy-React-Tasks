import React, { useEffect, useState } from "react";
import { useContextData } from "../../../UserContext";
import { Formik, Field, Form } from "formik";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import "./User.css";

function EditUser(props) {
  const { id } = useParams();
  const conFetch = useContextData();

  return (
    <>
      <div className="main-container">
        <Toaster position="bottom-left" reverseOrder={false}></Toaster>
        <div className="child-container">
          <h1 className="welcome-edit">Edit User</h1>
          <br />
          <Formik
            initialValues={{
              firstName: conFetch.users[id].firstName,
              lastName: conFetch.users[id].lastName,
              email: conFetch.users[id].email,
              city: conFetch.users[id].city,
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              toast.success(`User Edited - ${values.firstName}`, {
                style: {
                  border: "1px solid rgba(20, 130, 50, 0.75)",
                  backgroundColor: "#efefef",
                  padding: "16px",
                  color: "rgba(20, 130, 50, 1)",
                  filter: "drop-shadow(0 0 0.25em #000)",
                },
                iconTheme: {
                  primary: "rgba(20, 130, 50, 0.75)",
                  secondary: "#FFFAEE",
                },
              });
              conFetch.editUser(id, values);
              console.log(values);
            }}
          >
            <Form>
              <tr>
                <td className="field">
                  <label htmlFor="firstName">First Name</label>
                </td>
                <td>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder={conFetch.users[id].firstName}
                    className="form-input"
                  />
                </td>

                <td className="field">
                  <label htmlFor="lastName">Last Name</label>
                </td>
                <td>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder={conFetch.users[id].lastName}
                    className="form-input"
                  />
                </td>
              </tr>

              <br />

              <tr>
                <td className="field">
                  <label htmlFor="email">Email</label>
                </td>
                <td>
                  <Field
                    id="email"
                    name="email"
                    placeholder={conFetch.users[id].email}
                    type="email"
                    className="form-input"
                  />
                </td>

                <td className="field">
                  <label htmlFor="city">City</label>
                </td>
                <td>
                  <Field
                    id="city"
                    name="city"
                    placeholder={conFetch.users[id].city}
                    className="form-input"
                  />
                </td>
              </tr>
              <br />
              <button type="submit">EDIT USER</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default EditUser;
