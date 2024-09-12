import classes from "./PlayerInfo.module.less";
import avatar from "../../assets/avatar.jpg";
import star from "../../assets/star.svg";
import hideEye from "../../assets/hide-eye.png";
import eye from "../../assets/eye.png";
import { useState } from "react";

function PlayerInfo({ ratingValue, balance }) {
  const [visibility, setVisibility] = useState(true);

  const ratingStars = [];

  for (let i = 0; i < ratingValue; i++) {
    ratingStars.push(
      <img className={classes.star} key={i} src={star} alt="star" />
    );
  }

  function changeVisibilityHandler() {
    setVisibility(!visibility);
  }

  return (
    <div className={classes.playerInfo}>
      <div className={classes.playerInfo__userNameBlock}>
        <h2 className={classes.playerInfo__userName}>LongUserName</h2>
        <div className={classes.playerInfo__rating}>{ratingStars}</div>
      </div>
      <div className={classes.playerInfo__avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classes.playerInfo__balanceBlock}>
        <button
          className={
            visibility
              ? classes.playerInfo__button
              : `${classes.playerInfo__button} ${classes.show}`
          }
          onClick={changeVisibilityHandler}
        >
          <img src={!visibility ? eye : hideEye} />
        </button>
        <p className={classes.playerInfo__balance}>
          {visibility ? `$${balance}` : "Show balance"}
        </p>
      </div>
    </div>
  );
}

export default PlayerInfo;
