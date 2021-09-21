import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PlayerFilter = () => {

    const [playerSearch, setPlayerSearch] = useState(null)

    return (
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
    )
}

export default PlayerFilter
