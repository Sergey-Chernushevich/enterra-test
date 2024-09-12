import classes from "./Loader.module.less";

function Loader({ progress }) {
  const progressLineStyles = {
    width: `${progress}%`,
  };

  return (
    <div className={classes.loader}>
      <div className={classes.loader__line}>
        <div
          style={progressLineStyles}
          className={classes.loader__progressLine}
        ></div>
      </div>
      <p className={classes.loader__progress}>Loadind {progress}%</p>
    </div>
  );
}

export default Loader;
