import Anime from './components/Anime'
import CreateAnime from "./components/CreateAnime";
import {useEffect, useState} from "react";

function App() {
    const [animeDB, setAnimeDB] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/').then(res => res.json()).then(data => setAnimeDB(data))
    }, [])

    function addAnimeToDB(anime) {
        fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(anime),
        })
        .then(response => response.json())
        .then((anime) => {
            setAnimeDB([...animeDB, anime])
        })
    }

    return (
        <div className="w-4/6 mx-auto my-5 border-2 p-3">
            <CreateAnime onAddClick={addAnimeToDB}/>
            {animeDB.map((anime) =>
                <Anime key={anime['id']} anime={anime}/>
            )}
        </div>
    );
}

export default App;
