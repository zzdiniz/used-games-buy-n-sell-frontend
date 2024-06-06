import { ChangeEvent, FormEvent, useState } from "react";
import { Game } from "../../../types/Game";
import { Link } from "react-router-dom";
import customStyles from "../Register/styles.module.css"
import Input from "../../form/Input";
import addGameStyles from "./addGame.module.css"

const AddGame = () => {
  const [game, setGame] = useState<Game|Object>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  };
  const handleSubimit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    //registerUser(user)
  }
  return (
    <section>
      <form onSubmit={handleSubimit} className={customStyles.form} id="gameForm">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          handleChange={handleInputChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Description"
          handleChange={handleInputChange}
        />
        <Input
          type="text"
          name="price"
          placeholder="Price"
          handleChange={handleInputChange}
        />
        <select name="platform" form="gameForm" className={addGameStyles.selectInput}>
            <option className={addGameStyles.selectOption} value="">Choose the game platform</option>
            <option className={addGameStyles.selectOption} value="Playstation">Playstation</option>
            <option className={addGameStyles.selectOption} value="Xbox">Xbox</option>
            <option className={addGameStyles.selectOption} value="Nintendo">Nintendo</option>
        </select>
        <button type="submit" className={customStyles.submit}>
        Announce game
        </button>
      </form>
    </section>
  );
};

export default AddGame;
