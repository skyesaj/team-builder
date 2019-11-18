import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  // this makes your searchbar let you type
  const changeHandler = event => {
    // event.preventDefault();
    // props.addNewMember(member);
    // setMember({ ...member, [event.target.name]: event.target.value })
    setMember({
      ...member,
      [event.target.name]: event.target.value
    });

    console.log(event.target.value);
  };

  const submitForm = event => {
    // console.log (member) to have form show up in console
    console.log(member);
    event.preventDefault();
    setMember(member);
    // setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label html="title">Name</label>
      <input
        id="title"
        name="name"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={member.name}
      />

      <label html="title">Email</label>
      <input
        id="title"
        name="email"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={member.email}
      />

      <label html="title">Role</label>
      <input
        id="title"
        name="role"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={member.role}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
