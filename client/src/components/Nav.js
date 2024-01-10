import React, { useEffect, useState } from "react";
import General from "../american-football-player.png";
import friends from "../iconFolder/friends.png";
import more from "../iconFolder/more.png";
import Menu from "./Menu";
import Falcons from "../iconFolder/README.png";
import Seahawks from "../iconFolder/nfl-seattle-seahawks-team-logo-2-768x768.png";
import Panthers from "../iconFolder/nfl-carolina-panthers-team-logo-2-768x768.png";
import Ravens from "../iconFolder/nfl-baltimore-ravens-team-logo-2-768x768.png";
import Bills from "../iconFolder/nfl-buffalo-bills-team-logo-2-768x768.png";
import Bengals from "../iconFolder/nfl-cincinnati-bengals-team-logo-768x768.png";
import Bears from "../iconFolder/nfl-chicago-bears-team-logo-2-768x768.png";
import Browns from "../iconFolder/nfl-cleveland-browns-team-logo-2-768x768.png";
import Cowboys from "../iconFolder/nfl-dallas-cowboys-team-logo-2-768x768.png";
import Broncos from "../iconFolder/nfl-denver-broncos-team-logo-2-768x768.png";
import Texans from "../iconFolder/nfl-houston-texans-team-logo-2-768x768.png";
import Lions from "../iconFolder/nfl-detroit-lions-team-logo-2-768x768.png";
import Colts from "../iconFolder/nfl-indianapolis-colts-team-logo-2-768x768.png";
import Packers from "../iconFolder/nfl-green-bay-packers-team-logo-2-768x768.png";
import Rams from "../iconFolder/los-angeles-rams-2020-logo-300x300.png";
import Jaguars from "../iconFolder/nfl-jacksonville-jaguars-team-logo-2-768x768.png";
import Vikings from "../iconFolder/nfl-minnesota-vikings-team-logo-2-768x768.png";
import Chiefs from "../iconFolder/nfl-kansas-city-chiefs-team-logo-2-768x768.png";
import Saints from "../iconFolder/nfl-new-orleans-saints-team-logo-2-768x768.png";
import Raiders from "../iconFolder/nfl-oakland-raiders-team-logo-768x768.png";
import Giants from "../iconFolder/nfl-new-york-giants-team-logo-2-768x768.png";
import Chargers from "../iconFolder/nfl-los-angeles-chargers-team-logo-2-768x768.png";
import Eagles from "../iconFolder/nfl-philadelphia-eagles-team-logo-2-768x768.png";
import Dolphins from "../iconFolder/nfl-miami-dolphins-logo-2018-480x480.png";
import f49ers from "../iconFolder/nfl-san-francisco-49ers-team-logo-2-768x768.png";
import Patriots from "../iconFolder/nfl-new-england-patriots-team-logo-2-768x768.png";
import Jets from "../iconFolder/nfl-new-york-jets-team-logo-768x768.png";
import Steelers from "../iconFolder/nfl-pittsburgh-steelers-team-logo-2-768x768.png";
import Titans from "../iconFolder/nfl-tennessee-titans-team-logo-2-768x768.png";
import Commanders from "../iconFolder/washington-commanders-logo-480x480.png";
import Buccaneers from "../iconFolder/tampa-bay-buccaneers-2020-logo-480x480.png";
import Cardinals from "../iconFolder/nfl-arizona-cardinals-team-logo-2.png";
const Nav = (props) => {
  let [teamImage, setImage] = useState("../american-football-player.png");

  useEffect(() => {
    console.log(props.currTeam);
    switch (props.currTeam) {
      case "General":
        setImage(General);
        break;
      case "Cardinals":
        setImage(Cardinals);
        break;
      case "Falcons":
        setImage(Falcons);
        break;
      case "Panthers":
        setImage(Panthers);
        break;
      case "Ravens":
        setImage(Ravens);
        break;
      case "Bills":
        setImage(Bills);
        break;
      case "Bengals":
        setImage(Bengals);
        break;
      case "Bears":
        setImage(Bears);
        break;
      case "Cowboys":
        setImage(Cowboys);
        break;
      case "Lions":
        setImage(Lions);
        break;
      case "Packers":
        setImage(Packers);
        break;
      case "Rams":
        setImage(Rams);
        break;
      case "Browns":
        setImage(Browns);
        break;
      case "Broncos":
        setImage(Broncos);
        break;
      case "Texans":
        setImage(Texans);
        break;
      case "Colts":
        setImage(Colts);
        break;
      case "Jaguars":
        setImage(Jaguars);
        break;
      case "Vikings":
        setImage(Vikings);
        break;
      case "Chiefs":
        setImage(Chiefs);
        break;
      case "Raiders":
        setImage(Raiders);
        break;
      case "Saints":
        setImage(Saints);
        break;
      case "Giants":
        setImage(Giants);
        break;
      case "Eagles":
        setImage(Eagles);
        break;
      case "Dolphins":
        setImage(Dolphins);
        break;
      case "49ers":
        setImage(f49ers);
        break;
      case "Patriots":
        setImage(Patriots);
        break;
      case "Seahawks":
        setImage(Seahawks);
        break;
      case "Jets":
        setImage(Jets);
        break;
      case "Buccaneers":
        setImage(Buccaneers);
        break;
      case "Steelers":
        setImage(Steelers);
        break;
      case "Commanders":
        setImage(Commanders);
        break;
      case "Titans":
        setImage(Titans);
        break;
      case "Chargers":
        setImage(Chargers);
        break;
    }
  }, [props.currTeam]);
  return (
    <div>
      <ul class="bg-[#DA1E55] py-[8px] flex justify-around fixed w-screen top-0 z-30 items-center">
        <button
          onClick={() => {
            if (props.isOpen == false) {
              props.setOpen(true);
            } else {
              props.setOpen(false);
            }
          }}
        >
          <img
            className="w-[2em] h-[2em]"
            src={more}
            alt="description of image"
          />
        </button>

        <img
          className="w-[5em] h-[5em] md:mx-[10em]"
          src={teamImage}
          alt="description of image"
        />
        <img
          className="w-[2em] h-[2em]"
          src={friends}
          alt="description of image"
        />
      </ul>
    </div>
  );
};

export default Nav;
