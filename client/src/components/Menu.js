import React, { useEffect, useState } from "react";

const Menu = (props) => {
  let [teamList, setTeam] = useState([
    "General",
    "49ers",
    "Bears",
    "Bengals",
    "Bills",
    "Broncos",
    "Browns",
    "Buccaneers",
    "Cardinals",
    "Chargers",
    "Chiefs",
    "Colts",
    "Commanders",
    "Cowboys",
    "Dolphins",
    "Eagles",
    "Falcons",
    "Giants",
    "Jaguars",
    "Jets",
    "Lions",
    "Packers",
    "Panthers",
    "Patriots",
    "Raiders",
    "Rams",
    "Ravens",
    "Saints",
    "Seahawks",
    "Steelers",
    "Texans",
    "Titans",
    "Vikings",
  ]);
  let [text, setText] = useState("");
  let [display, setDisplay] = useState([]);
  let search = (text) => {
    let count = 0;
    setDisplay([]);
    for (let i = 0; i < 32; i++) {
      if (text === teamList[i].slice(0, text.length)) {
        setDisplay((teams) => [...teams, teamList[i]]);
        count++;
        if (count > 8) {
          break;
        }
      }
    }
  };

  let handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    search(text);
  }, [text]);

  return (
    <wrapper>
      <div
        class="overlay"
        onClick={() => {
          if (props.isOpen == true) {
            props.setOpen(false);
          }
        }}
      >
        <div
          class="modalContainer flex flex-col items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <form
            onSubmit={search}
            class="flex items-center w-screen mt-[16px] mb-0"
          >
            <input
              onChange={handleChange}
              value={text}
              class="rounded-full pl-2 py-1 mt[1em] border-black border-[1px] border-solid w-full mx-[16px] mb-0"
            ></input>
            <button
              type="submit"
              class="search absolute right-[30px] mb-0"
            ></button>
          </form>
          <div>
            {display && (
              <div className={`flex flex-col w-screen`}>
                {display.map((team) => {
                  return (
                    <div>
                      <p
                        class="bg-[#ffffff] hover:bg-gray-100 delay-[25ms] border-[#000000] border-b-2 py-2 text-center mx-[32px] shadow-black shadow-md cursor-pointer"
                        onClick={() => {
                          props.setTeam(team);
                          props.setOpen(false);
                        }}
                      >
                        {team}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </wrapper>
  );
};

export default Menu;
