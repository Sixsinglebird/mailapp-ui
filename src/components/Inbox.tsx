import {useEffect, useState} from "react";
import NavBar from "./NavBar";

const Inbox = () => {
    const [emails, setEmails] = useState(new Array());

    useEffect(() => {
      fetch("http://localhost:8080/emails").then((response) => {
          return response.json()
      }).then((data) => {
          console.log(data);
          setEmails(data);
      })
    }, []);

  let returnValue =  formatEmails(emails);

  return (
    <div className={"page"} id={"inbox"}>
        <NavBar />
        {returnValue}
    </div>
  );
}

const formatEmails = (emails:any) => {
    let tmp = [];

    for (let i = 0; i < emails.length; i++) {
        tmp.push(
            <div className={"email"} key={i}>
                <div className={"emailHeader"}>
                    {emails[i].origin != null ? <div className={"origin"}>From: {emails[i].origin}</div> : <div>No Origin User</div>}
                </div>
                <div className={"emailSubject"}>Subject: {emails[i].subject}</div>
                <div className={"emailBody"}>{emails[i].body}</div>
            </div>
        );
    }

    return tmp;
}

export default Inbox;