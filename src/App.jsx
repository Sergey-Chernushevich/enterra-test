import classes from "./App.module.less";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Spinner from "./components/Spinner/Spinner";
import TournamentItem from "./components/TournamentItem/TournamentItem";
import Loader from "./components/loader/Loader";

const list = [
  {
    status: "Registering",
    pinned: true,
    type: "NL 2-7 Triple Draw",
    title: "OFC Pineapple",
    date: "12:00 pm, 28 July",
    allPlayers: 1000,
    players: 1000,
    prize: 1000000,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: false,
    sitAndGo: false,
    lateEntry: false,
  },
  {
    status: "Registering",
    pinned: true,
    type: "NL Holdem",
    title: "OFC Pineapple",
    date: "12:00 pm, 28 July",
    allPlayers: 6,
    players: 1,
    prize: 100,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: false,
    sitAndGo: false,
    lateEntry: false,
  },
  {
    status: "Cancelled",
    pinned: true,
    type: "NL OFC/pineapple prg",
    title: "Hourly Freeroll",
    date: "12:00 pm, 28 July",
    allPlayers: 10000,
    players: 1,
    prize: 1000,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: true,
    sitAndGo: false,
    lateEntry: true,
  },
  {
    status: "Cancelled",
    pinned: false,
    type: "PL Omaha h/l",
    title: "Rapid Tournament",
    date: "12:00 pm, 28 July",
    allPlayers: 0,
    players: 0,
    prize: 1000000,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: false,
    sitAndGo: false,
    lateEntry: false,
  },
  {
    status: "Cancelled",
    pinned: false,
    type: "NL 6 cards omaha h/l",
    title: "PL Omaha Knockout",
    date: "12:00 pm, 28 July",
    allPlayers: 100,
    players: 0,
    prize: 146,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: false,
    sitAndGo: true,
    lateEntry: false,
  },
  {
    status: "Registering",
    pinned: false,
    type: "NL 2-7 Triple Draw",
    title: "OFC Pineapple",
    date: "12:00 pm, 28 July",
    allPlayers: 1000,
    players: 1000,
    prize: 1000000,
    knockout: false,
    bounty: false,
    proBounty: false,
    freeRoll: false,
    sitAndGo: false,
    lateEntry: false,
  },
];

function App() {
  return (
    <div className={classes.App}>
      <h1 className={classes.mainTitle}>Poker</h1>
      <div className={classes.spinnerWrapper}>
        <Spinner />
      </div>
      <PlayerInfo balance="1000,500.00" ratingValue={5} />
      <Loader progress={70} />
      {list.map((item, index) => {
        return <TournamentItem key={index} {...item} />;
      })}
    </div>
  );
}

export default App;
