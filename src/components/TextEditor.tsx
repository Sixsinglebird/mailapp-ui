import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const TextEditor = () => {
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [recipient, setRecipient] = useState("");

    const sendEmail = () => {
        let email = {
            origin: "test",
            recipient: recipient,
            subject: subject,
            body: message
        };
        setMessage("");
        setSubject("");
        setRecipient("");

        fetch("http://localhost:8080/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        })
    }

    return <div className={"textEditor"}>
        <input type={"text"} placeholder={"Recipient"} onChange={(e) => setRecipient(e.target.value)} />
        <input type={"text"} placeholder={"Subject"} onChange={(e) => setSubject(e.target.value)} />
        <ReactQuill id={"reactQuillObject"} theme={"snow"} value={message} onChange={setMessage} />
        <button onClick={sendEmail}>Send Email</button>
    </div>;
};

export default TextEditor;