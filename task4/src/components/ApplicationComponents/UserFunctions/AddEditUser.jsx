import { Formik, Field, Form } from "formik";
import { useContextData } from "../../../UserContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AiFillCheckCircle, AiOutlineRollback } from "react-icons/ai";

import "../Application.css";

const pushData = (array, value) => {
  array.push(value);
};



function AddEditUser(props) {


  const conFetch = useContextData();
  const navigate = useNavigate();

  const editVal = conFetch.editedUser;

  let initVal = {};
  let head = "";
  let toastName = "";
  let toastColor = "";
  let toastBorder = "";

  if (props.type == "add") {
    initVal = { firstName: "", lastName: "", email: "", city: "" };
    head = "Add User";
    toastName = "User Added";
    toastColor = "rgba(50, 100, 10, 1)";
    toastBorder = "rgba(50, 100, 10, 1)";
    console.log("add mode");
  } else if (props.type == "edit") {
    initVal = editVal;
    head = "Edit User";
    console.log("edit Mode");
    toastName = "User Edited";
    toastColor = "red";
    toastBorder = "red";
  }

  return (
    <>
      <div className="max-container-form">
        <Formik
          initialValues={initVal}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            toast.success(`${toastName} - ${values.firstName}`, {
              duration: 1500,
              style: {
                border: `1px solid ${toastBorder}`,
                backgroundColor: "#efefef",
                padding: "16px",
                color: `${toastColor}`,
                filter: "drop-shadow(0 0 0.25em #000)",
              },  
              iconTheme: {
                primary: `${toastColor}`,
                secondary: "#FFFAEE",
              },
            });
            if(props.type==="add"){pushData(conFetch.users, values);}
            else if(props.type==="edit"){conFetch.editUser(values)}
          }}
        >
          <Form className="form-container">
            <h2>{head}</h2>

            <td className="field">
              <label htmlFor="id">ID</label>
            </td>
            <td>
              <Field
                id="id"
                name="id"
                placeholder="0,1,2,3,4,..."
                className="form-input"
              />
            </td>
            <br />
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
            <div className="button-container">
              <button type="submit" className="aef-button success">
                <AiFillCheckCircle className="check" />
              </button>
              <button
                type="button"
                className="aef-button delete"
                onClick={() => navigate(-1)}
              >
                <AiOutlineRollback className="check" />
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddEditUser;
