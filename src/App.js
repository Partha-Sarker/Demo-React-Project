import Anime from './components/Anime'
import CreateAnime from "./components/CreateAnime";
import {useEffect, useState} from "react";

function App() {
    const [animeDB, setAnimeDB] = useState([])

    useEffect(() => {
        const fetchAnimeList = async () => {
            const res = await fetch('http://localhost:8080/')
            const data = await res.json()
            setAnimeDB(data)
        }
        fetchAnimeList()
    }, [])

    function addAnimeToDB(name) {
        setAnimeDB([...animeDB, name])
    }

    return (
        <div className="w-4/6 mx-auto my-5 border-2 p-3">
            <CreateAnime onAddClick={addAnimeToDB}/>
            {animeDB.map((name, index) =>
                <Anime key={index} title={name}/>
            )}
        </div>
    );
}

export default App;
