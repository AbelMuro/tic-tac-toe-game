const checkBoard = (board) => {
    const consecutiveMarks = [];
    const winningTiles = [];

    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[r].length; c++){
            if(board[r][c] === 0) 
                break;
            else if(c === 0){
                consecutiveMarks.push(board[r][c]);
                winningTiles.push([r, c])
            }
            else if(consecutiveMarks.includes(board[r][c])){
                consecutiveMarks.push(board[r][c]);
                winningTiles.push([r, c])
            }
            else 
                break;
        }
        if(consecutiveMarks.length === 3)
            return {winner: consecutiveMarks[0], winningTiles};
        
        else{
            while(consecutiveMarks.length) consecutiveMarks.pop();
            while(winningTiles.length) winningTiles.pop();
        }
    }


    for(let c = 0; c < 3; c++){
        for(let r = 0; r < 3; r++){
            if(board[r][c] === 0)
                break;
            else if(r === 0){
                consecutiveMarks.push(board[r][c])
                winningTiles.push([r, c])
            }
            else if(consecutiveMarks.includes(board[r][c])){
                consecutiveMarks.push(board[r][c]);
                winningTiles.push([r, c]);
            }
            else
                break;
        }
        if(consecutiveMarks.length === 3)
            return {winner: consecutiveMarks[0], winningTiles};
    
        else{
            while(consecutiveMarks.length) consecutiveMarks.pop();
            while(winningTiles.length) winningTiles.pop();
        }
    }

    for(let d = 0; d < 3; d++){
        if(board[d][d] === 0)
            break;
        else if(d === 0){
            consecutiveMarks.push(board[d][d])
            winningTiles.push([d, d])
        }
        else if(consecutiveMarks.includes(board[d][d])){
            consecutiveMarks.push(board[d][d]);
            winningTiles.push([d, d]);
        }
        else
            break;
    }

    if(consecutiveMarks.length === 3)
        return {winner: consecutiveMarks[0], winningTiles};
    else{
        while(consecutiveMarks.length) consecutiveMarks.pop();
        while(winningTiles.length) winningTiles.pop();
     }
    

    for(let r = 0, c = 2; r < 2 || c >= 0; r++, c--){
        if(board[r][c] === 0)
            break;
        else if(r === 0){
            consecutiveMarks.push(board[r][c])
            winningTiles.push([r, c])
        }
        else if(consecutiveMarks.includes(board[r][c])){
            consecutiveMarks.push(board[r][c]);
            winningTiles.push([r, c]);
        }
        else
            break;
    }    

    if(consecutiveMarks.length === 3)
        return {winner: consecutiveMarks[0], winningTiles};

    else{
        while(consecutiveMarks.length) consecutiveMarks.pop();
        while(winningTiles.length) winningTiles.pop();
    }

    return {winner: '', winningTiles}
}


export default function boardReducer(board = {
    tiles: [
        [0,0,0],
        [0,0,0],
        [0,0,0]],
    winner: '',
    winningTiles: [],
}, action) {

    const allTiles = board.tiles;

    switch(action.type){
        case 'CPU_MOVE': 
            let column = Math.floor(Math.random() * 3);
            let row = Math.floor(Math.random() * 3);
            const mark = action.mark;
            const copyTiles = JSON.parse(JSON.stringify(allTiles));

            if(!allTiles[0].includes(0) && !allTiles[1].includes(0) && !allTiles[2].includes(0))
                return {tiles: copyTiles, winner: board.winner, winningTiles: board.winningTiles}    
                
            else{
                do{
                    if(copyTiles[row][column] !== 0){
                        column = Math.floor(Math.random() * 3);
                        row = Math.floor(Math.random() * 3);
                    }
                    else{
                        copyTiles[row][column] = mark;
                        break;
                    }   
                }
                while(true)
                return {tiles: copyTiles, winner: board.winner, winningTiles: board.winningTiles}                
            }

        case 'UPDATE_BOARD':
            const rowToUpdate = action.row;
            const columnToUpdate = action.column;
            const turn = action.turn;
            const newTiles = allTiles.map((row, i) => {
                if(i === rowToUpdate)
                    return row.map((column, i) => {
                        if(i === columnToUpdate)
                            return turn === 'x' ? 'x' : 'o';
                        else 
                            return column;
                    })               
                else
                    return row;
            });
            return {tiles: newTiles, winner: board.winner, winningTiles: board.winningTiles};
        case 'CHECK_BOARD':
            const {winner, winningTiles} = checkBoard(allTiles);
            return {tiles: allTiles, winner: winner, winningTiles}
        case 'CHECK_DRAW': 
            if(!allTiles[0].includes(0) && !allTiles[1].includes(0) && !allTiles[2].includes(0) && !board.winner)
                return {tiles: allTiles, winner: 'draw', winningTiles: []}   
            else
                return board;
        case 'SET_DRAW':
            return {tiles: board.tiles, winner: 'draw', winningTiles: []}
        case 'NEW_GAME':
        case 'RESTART':
            return {
                tiles: [
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]],
                winner: '',
                winningTiles: []
            }    
        default:
            return board;
    }
}