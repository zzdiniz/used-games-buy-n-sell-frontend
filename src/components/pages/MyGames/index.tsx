import { useEffect, useState } from "react"
import { Game } from "../../../types/Game"
import { Link } from "react-router-dom"
import getUserGames from "../../../utils/getUserGames"
import customStyles from "./myGames.module.css"
import GameCard from "../../GameCard"

const MyGames = () => {
    const [games,setGames] = useState<Array<Game> | null>(null)
    useEffect(()=>{
        (async () => {
            try {
                const data = await getUserGames();
                setGames(data.games)
                console.log(games)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        })();        
    },[])
    return (
        <section>
            <Link to="/games/add">Announce game</Link>
            <div className={customStyles.gamesGrid}>
            {games?games.map((game,index)=>{
                return <GameCard game={game} key={index}/>
            }):<p>You don't have any games announced</p>}
            </div>
        </section>
    )
}

export default MyGames

