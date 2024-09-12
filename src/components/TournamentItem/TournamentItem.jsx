import classes from "./TournamentItem.module.less";
import pin from "../../assets/pin.svg";
import clock from "../../assets/clock.svg";
import playerIcon from "../../assets/players.svg";
import tourney from "../../assets/tourney.svg";
import knockoutImg from "../../assets/Knockout.svg";
import bountyImg from "../../assets/Bounty.svg";
import proBountyImg from "../../assets/ProBounty.svg";
import freeRollImg from "../../assets/FreeRoll.svg";
import rapidImg from "../../assets/Rapid.svg";
import timeImg from "../../assets/time.svg";

function TournamentItem({
  status,
  pinned,
  type,
  title,
  date,
  allPlayers,
  players,
  prize,
  knockout,
  bounty,
  proBounty,
  freeRoll,
  sitAndGo,
  lateEntry,
}) {
  return (
    <div
      className={
        status === "Cancelled"
          ? `${classes.tournamentItem} ${classes.cancelled}`
          : `${classes.tournamentItem}`
      }
    >
      <div
        className={
          status === "Cancelled"
            ? `${classes.tournamentItem__status} ${classes.cancelled}`
            : `${classes.tournamentItem__status}`
        }
      >
        <p>{status}</p>
      </div>
      <div className={classes.tournamentItem__info}>
        <div className={classes.tournamentItem__infoBlock1}>
          <div className={classes.tournamentItem__infoSubBlock}>
            {pinned && <img className={classes.pin} src={pin} alt="pin" />}
            <div className={classes.tournamentItem__type}>{type}</div>
            <div className={classes.tournamentItem__options}>
              {knockout && <img src={knockoutImg} />}
              {bounty && <img src={bountyImg} />}
              {proBounty && <img src={proBountyImg} />}
              {freeRoll && <img src={freeRollImg} />}
              {sitAndGo && <img src={rapidImg} />}
              {lateEntry && <img src={timeImg} />}
            </div>

            <h3 className={classes.tournamentItem__title}>{title}</h3>
          </div>
          <button
            disabled={status === "Cancelled" ? true : false}
            className={
              status === "Cancelled"
                ? `${classes.tournamentItem__button} ${classes.cancelled}`
                : `${classes.tournamentItem__button}`
            }
          >
            {status === "Registering" ? "join table" : "cancelled"}
          </button>
        </div>
        <div className={classes.tournamentItem__infoBlock2}>
          <div
            className={`${classes.tournamentItem__data} ${classes.tournamentItem__date} `}
          >
            <img src={clock} alt="date" /> {date}
          </div>
          <div
            className={`${classes.tournamentItem__data} ${classes.tournamentItem__players} `}
          >
            <img src={playerIcon} alt="" /> {players} / {allPlayers}
          </div>
          <div
            className={`${classes.tournamentItem__data} ${classes.tournamentItem__prize} `}
          >
            <img src={tourney} alt="prize" /> {prize}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentItem;
