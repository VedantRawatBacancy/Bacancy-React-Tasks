import React, { useState } from "react";
import "./TaskView.css";

export default function TaskView(props) {
    const [update, forceUpdate] = useState(true);
    return (
    <>
      <div className="overflow-section">
        {props.value.map((value, index) => (
          <div key={index} className="item">
            <table>
              <tr>
                <td>{value}</td>
                <td>
                  <button
                    className="list"
                    onClick={() => {
                      props.value.splice(index,1);
                      forceUpdate(!update);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}
