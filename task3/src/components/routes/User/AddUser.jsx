import React, { useContext, useReducer } from "react";
import { Formik, Field, Form } from "formik";
import { useContextData } from "../../../UserContext";
import "./User.css";
import { Toaster, toast } from "react-hot-toast";

const pushData = (array, value) => {
  array.push(value);
};

function AddUser() {
  const conFetch = useContextData();
  // console.log(conFetch);

  return (
    <>
      <div className="main-container">
        <Toaster position="bottom-left" reverseOrder={false}></Toaster>
        <div className="child-container">
          <h1 className="welcome">Add New User</h1>
          <br />
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              city: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              toast.success(`User Added - ${values.firstName}`, {
                style: {
                  border: "1px solid rgba(255, 165, 133, 0.75)",
                  backgroundColor: "#efefef",
                  padding: "16px",
                  color: "rgba(255, 95, 63, 1)",
                  filter: "drop-shadow(0 0 0.25em #000)",
                },
                iconTheme: {
                  primary: "rgba(255, 95, 63, 1)",
                  secondary: "#FFFAEE",
                },
              });
              pushData(conFetch.users, values);
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
                    placeholder="Jane"
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
                    placeholder="Doe"
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
                    placeholder="jane@acme.com"
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
                    placeholder="Ahmedabad"
                    className="form-input"
                  />
                </td>
              </tr>
              <br />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddUser;
