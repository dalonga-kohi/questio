import { Link } from "react-router-dom";

interface IProps {
    id: number
    title: string,
    img: string
}

const Card = ({ id, title, img }: IProps) => {
    return (
      <Link to={`/quest/${id}`} className="">
        <h3>{title}</h3>
        <img src={img} alt="" />
      </Link>
    );
  };

  export default Card;