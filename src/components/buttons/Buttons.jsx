import "./Button.css";
export const Button = (props) => {
  return (
    <div className="divBtn">
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};
