import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlayerList = ({players}) => {

    
    function createData(name, position, status) {
        return { name, position, status };
      }



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Player Name
                        </TableCell>
                        <TableCell align="right">
                           Position
                        </TableCell>
                        <TableCell align="right">
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {players.map(player => (
                    <TableRow key={player[0]}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                         <TableCell component="th" scope="row">
                            {player[1].full_name}
                        </TableCell>
                        <TableCell align="right">
                            {player[1].position}
                        </TableCell>
                        <TableCell align="right">
                            {player[1].status}
                        </TableCell>
                    </TableRow>
            
            ))}
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}

export default PlayerList
