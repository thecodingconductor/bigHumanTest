import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container'
import axios from 'axios';
import PlayerList from './PlayerList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MainPage = () => {

    const [players, setPlayers] = useState([]);
    const [allPlayers, setAllPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});
    const [playerSearch, setPlayerSearch] = useState(null)

    useEffect(() => {
        getInitialPlayers();
        getAllPlayers();
        setFilter();
    }, [playerSearch])

    const getInitialPlayers = async () => {
        const {data} = await axios.get('https://api.sleeper.app/v1/players/nfl');
        const firstTen = Object.entries(data).slice(0,10);  
        setPlayers(firstTen);
    }

    const getAllPlayers = async () => {
        const {data} = await axios.get('https://api.sleeper.app/v1/players/nfl');
        const allPlayersMain = Object.entries(data)
        setAllPlayers(allPlayersMain);
    }


    const setFilter = searchText => {

        if(allPlayers.length > 0) {
            const filtered = allPlayers.filter(player => {
                const regex = new RegExp(`${searchText}`, 'gi');
                return player.full_name.match(regex)
            })

            setFilteredPlayers(filtered)
        }
    }

    return (
        <Container>
             <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search By Player Name..." variant="outlined" onChange={e => setPlayerSearch(e.target.value)}/>
      </Box>

            {players.length > 0 ? (
                <PlayerList players={players} />
            ) : <div>
                    <p>
                        Loading...
                    </p>
                </div>}
        </Container>
    )
}

export default MainPage
