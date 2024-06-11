import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import { Game } from "../../types/Game";
import formatCurrency from "../../utils/formatCurrency";
import customStyles from "./gameCard.module.css";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const baseUrl = "http://localhost:3000";
  const images = JSON.parse(`${game.images}`);
  return (
    <div className={customStyles.card}>
      <div className={customStyles.cardImage}>
        {images ? (
          <img src={`${baseUrl}/images/games/${images[0]}`} alt="" />
        ) : (
          <p>No image found</p>
        )}
      </div>
      <div className={customStyles.cardContent}>
        <p className={customStyles.gameName}>{game.name}</p>
        <p className={customStyles.gameDescription}>{game.description}</p>
        <p className={customStyles.gamePrice}>{formatCurrency(game.price)}</p>
        <p className={customStyles.gameStatus}>
          {game.available ? (
            <div className={customStyles.actions}>
              <EditIcon />
              <DeleteIcon />
            </div>
          ) : (
            "Sold"
          )}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
