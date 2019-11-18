import React from "react";

const Member = props => {
  console.log(props);
  return (
    <div className="member">
      {props.member.map((data, index) => {
        return (
          <div className="data" key={index}>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
