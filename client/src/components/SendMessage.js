import React, { useState, useEffect } from "react";
function SendMessage(props) {
  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  let [text, setText] = useState("");
  let [formData, setFormData] = useState([]);

  let [user, setUser] = useState({ id: generateRandomString(10) })
  useEffect(() => {
    updateChat(props.currTeam);
  }, []);

  useEffect(() => {
    props.socket.on("recevied-message", async (data) => {
      updateChat({ team: props.currTeam });
    });
  }, [props.socket]);

  let updateChat = async (currTeam = { team: "General" }) => {
    let res = await fetch("http://localhost:3001/getMessage", {
      method: "POST",
      body: JSON.stringify(currTeam),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setFormData(await res.json());
  };
  let handleChange = (event) => {
    // To get user input value to state use
    setText(event.target.value);
  };
  // this is a test branch with test line 11
  let postMessage = async (event) => {
    // Too add message to list of messages
    event.preventDefault();
    if (text.length > 0) {
      let bodyData = { message: text, team: props.currTeam, user: user.id  };
      let res = await fetch("http://localhost:3001/sendmessage", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.socket.emit("send-message", "data");
      updateChat(bodyData);
    } else {
      console.log("Please Enter A Message");
    }
    setText("");
  };

  return (
    <div class="mt-[6em]">
      <form
        onSubmit={postMessage}
        class="bottom-[5px] fixed flex items-center w-screen"
      >
        <input
          onChange={handleChange}
          value={text}
          class="rounded-full pl-2 py-1 mt[1em] border-black border-[1px] border-solid w-full mx-[16px]"
        ></input>
        <button
          type="submit"
          class="circle bg-[#2B8FFC] rounded-full absolute right-[19px]"
        ></button>
      </form>
      {formData && (
        <div className={`flex flex-col overflow-scroll main-content`}>
          {formData.map((message) => {
            if (message.user == user.id) {
              return (
                <div class="ml-[33%] mr-[8px]">
                  <p class="bg-[#2B8FFC] rounded-xl pl-[1em] py-[.2em] my-2 text-left">
                    {message.message}
                  </p>
                </div>
              );
            } else {
              return (
                <div class="mr-[33%] ml-[8px]">
                  <p class="bg-[#dae8f6] rounded-xl pl-[1em] py-[.2em] my-2 text-left">
                    {message.message}
                  </p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default SendMessage;
