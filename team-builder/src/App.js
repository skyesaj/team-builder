// import useState

import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import data from "./data";
import Form from "./components/Form";
import Member from "./components/Member";

// useState needs empty array
// list of Teammembers("") array of objects
// object pair needs {role}
function App() {
  const [members, setMember] = useState("");

  // MemberUpdate?
  const memberUpdate = person => {
    setMember([...members, person]);
  };

  members.map(member => (
    <div>
      <h2>{member.name},</h2> <h2>{member.email}</h2> <h2>{member.role}</h2>{" "}
    </div>
  ));
}

//

// return (
//   /* step 1 */
//   <div className="App">
//     <Form members={members} />
//     <Member team={members} />
//   </div>
// );

export default App;
