import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Member from "./components/Member";

const list = [{ name: "bob", email: "bob24.gmail.com", role: "frontend" }];
function App1() {
  const [members, setMembers] = useState(list);
  return (
    <div className="App">
      {members.map(member => (
        <div>
          <Member member={members} />
          <Form setmembers={setMembers} />
          {/* <h2>{member.name},</h2> <h2>{member.email}</h2> <h2>{member.role}</h2>{" "} */}
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);

export default App1;
