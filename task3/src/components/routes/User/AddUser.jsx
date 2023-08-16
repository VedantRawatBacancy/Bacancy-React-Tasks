import { Formik, Field, Form } from "formik";
import { useContextData } from "../../../UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiFillCheckCircle, AiOutlineRollback } from "react-icons/ai";
import "./User.css";

const pushData = (array, value) => {
  array.push(value);
};

function AddUser() {
  const conFetch = useContextData();
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container">
        <div className="child-container">
          <h1 className="welcome">Add New User</h1>
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
                duration: 1500,
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
            <Form className="bg-black">
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
              <br />
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

              <br />

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
              <br />
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

              <br />
              <button type="submit" className="bc-button edit-user">
                <AiFillCheckCircle className="check" />
              </button>
              <button type="button" className="bc-button delete" onClick={() => navigate(-1)}>
                <AiOutlineRollback className="check" />
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default AddUser;
