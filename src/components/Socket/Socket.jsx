import { useState, useEffect } from "react";
import "../Socket/Socket.css";
import openSocket from "socket.io-client";
import header  from "../../Header-IM.jpg";
import ForumIcon from '@mui/icons-material/Forum';

const socket = openSocket("http://localhost:8080");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  socket.on("newPost", (data) => {
    setChat([...chat, data]);
  });

  socket.on("welcome", (data) => {
    console.log(data);
  });

  useEffect(() => {
    socket.on("join", (data) => {
      console.log(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChat([...chat, message]);
    setMessage("");
    socket.emit("post", message);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="Chat">
              <div className="bannerheader" style={{ backgroundImage: `url(${header})` }}></div>
      <div className="chatbox">
        {chat.length > 0 ? (
          chat.map((msg, idx) => <li key={`${idx}-${msg}`}>{msg}</li>)
        ) : (
          <span>"Start a conversation ..."</span>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          onChange={handleChange}
          value={message}
        />
                    <button className='submit'>Submit
                <span>
                  <ForumIcon />
                </span>
            </button>
        
      </form>
    </div>
  );
}

export default App;
