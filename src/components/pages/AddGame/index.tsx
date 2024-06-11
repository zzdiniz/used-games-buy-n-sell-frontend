import { ChangeEvent, FormEvent, useState } from "react";
import { Game } from "../../../types/Game";
import customStyles from "../Register/styles.module.css";
import Input from "../../form/Input";
import addGameStyles from "./addGame.module.css";

const AddGame = () => {
  const [game, setGame] = useState<Game | Object>({});
  const [preview, setPreview] = useState<Array<string>>([]);
  const [currentPreview,setCurrentPreview] = useState(0)

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("game->", game);
    //registerUser(user)
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
                  className={`${addGameStyles.image} ${index === currentPreview && addGameStyles.currentImage}`}
                  src={image}
                  alt={`Preview ${index}`}
                  key={index}
                />
              );
            })
          ) : (
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          )}
          <div className={addGameStyles.indicatorsRow}>
            {preview.map((_,index)=>{
              return <button className={addGameStyles.indicator} onClick={()=>setCurrentPreview(index)} key={index}>
                <img className={addGameStyles.indicatorImage} src={preview[index]} alt="" />
              </button>
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
            type="text"
            name="price"
            placeholder="Price"
            handleChange={handleInputChange}
          />
          <select
            name="platform"
            form="gameForm"
            className={addGameStyles.selectInput}
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
