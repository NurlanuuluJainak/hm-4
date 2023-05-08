import { Button } from "../buttons/Buttons";
import "./Main.css";
export const Main = ({ el }) => {
  return (
    <div className="mainCard">
      <div>
        <p className="title">
          {localStorage.setItem("title", el.title)}
          {el.title}
        </p>
      </div>
      <div>
        <p className="rating">
          {localStorage.setItem("raiting", el.rating)}
          {el.rating}/stars
        </p>
      </div>
      <div>
        <img className="image" src={el.img} />
      </div>
      <Button className="delete">DELETE</Button>
      <Button className="edit">EDIT</Button>
    </div>
  );
};
