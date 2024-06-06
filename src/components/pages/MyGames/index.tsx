import { useState } from "react"
import { Game } from "../../../types/Game"
import { Link } from "react-router-dom"

const MyGames = () => {
    const [games,setGames] = useState<Array<Game> | null>(null)
    return (
        <section>
            <Link to="/games/add">Announce game</Link>
            {games?<p>My games announced</p>:<p>You don't have any games announced</p>}
        </section>
    )
}

export default MyGames

