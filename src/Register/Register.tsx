"use client";
import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({});
  const handleClick = async () => {
    try {
      var dataObj = {
        data: data,
      };

      const res = await fetch(
        "https://register-server-nu.vercel.app/std/register",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json", // Indicate that the request body is JSON
          },
          body: JSON.stringify(dataObj),
        }
      );
      const result = await res.json();
      const { acknowledged, insertedId } = result;
      if (acknowledged && insertedId) {
        alert("success");
      } else {
        alert("fail");
      }
    } catch (ex: any) {
      console.error(ex);
      alert(ex.message);
    }
  };

  const handleChange = (eve: any) => {
    const { name, value } = eve.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <h1>Register</h1>
      <p>
        <b>Name:</b>
        <input onChange={handleChange} name="name" />
      </p>
      <p>
        <b>Roll no:</b>
        <input type="number" onChange={handleChange} name="rno" />
      </p>
      <p>
        <b>Location:</b>
        <textarea onChange={handleChange} name="loc" />
      </p>
      <p>
        <button onClick={handleClick}>Register</button>
      </p>
    </div>
  );
};

export default Register;
