import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* When we add our own anchor tag, the Link behind the hood dont executes its anchor tag  */}
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default Button;
