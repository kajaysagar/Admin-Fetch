import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddStudent() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");
  let handleSave = async () => {
    await fetch("https://5cc0603882ec6a00149f3b19.mockapi.io/Admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        degree,
        dept,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
    navigate("/all-students");
  };
  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Degree</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Degree"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Department</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setDept(e.target.value)}
            placeholder="Department"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
