import classes from "./Spinner.module.less";
import spiner from "../../assets/spinner.svg";

function Spinner() {
  return (
    <div className={classes.spinner}>
      <img src={spiner} alt="spiner" />
    </div>
  );
}

export default Spinner;
