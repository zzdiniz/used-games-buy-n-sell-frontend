import { ChangeEvent, FormEvent, useState } from "react";
import { Game } from "../../../types/Game";
import customStyles from "../Register/styles.module.css";
import Input from "../../form/Input";
import addGameStyles from "./addGame.module.css";
import addGame from "../../../utils/addGame";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
  const [game, setGame] = useState<Game | Object>({});
  const [preview, setPreview] = useState<Array<string>>([]);
  const [currentPreview, setCurrentPreview] = useState(0);
  const navigate = useNavigate()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const previewUrls = filesArray.map((file) => URL.createObjectURL(file));
      setPreview(previewUrls);
      setGame({ ...game, images: filesArray });
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const gameData = game as Game;

    Object.entries(gameData).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }
      if (key === "images" && Array.isArray(value)) {
        value.forEach((image) => formData.append("images", image));
      }
      formData.append(key, value);
    });
    addGame(formData)
    navigate('/games/my-games')
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className={`${addGameStyles.addForm}`}
        id="gameForm"
      >
        <div className={addGameStyles.previewWrapper}>
          {preview.length > 0 ? (
            preview.map((image, index) => {
              return (
                <img
                  className={`${addGameStyles.image} ${
                    index === currentPreview && addGameStyles.currentImage
                  }`}
                  src={image}
                  alt={`Preview ${index}`}
                  key={index}
                />
              );
            })
          ) : (
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          )}
          <div className={addGameStyles.indicatorsRow}>
            {preview.map((_, index) => {
              return (
                <button
                  className={addGameStyles.indicator}
                  onClick={() => setCurrentPreview(index)}
                  key={index}
                >
                  <img
                    className={addGameStyles.indicatorImage}
                    src={preview[index]}
                    alt=""
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className={customStyles.form}>
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
            type="number"
            name="price"
            placeholder="Price"
            handleChange={handleInputChange}
          />
          <select
            name="platform"
            form="gameForm"
            className={addGameStyles.selectInput}
            onChange={handleSelectChange}
          >
            <option className={addGameStyles.selectOption} value="">
              Choose the game platform
            </option>
            <option className={addGameStyles.selectOption} value="Playstation">
              Playstation
            </option>
            <option className={addGameStyles.selectOption} value="Xbox">
              Xbox
            </option>
            <option className={addGameStyles.selectOption} value="Nintendo">
              Nintendo
            </option>
          </select>
          <button type="submit" className={customStyles.submit}>
            Announce game
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddGame;
