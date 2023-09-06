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
            return {winningMark: consecutiveMarks[0], winningTiles};
        
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
            return {winningMark: consecutiveMarks[0], winningTiles};
    
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
        return {winningMark: consecutiveMarks[0], winningTiles};
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
        return {winningMark: consecutiveMarks[0], winningTiles};

    else{
        while(consecutiveMarks.length) consecutiveMarks.pop();
        while(winningTiles.length) winningTiles.pop();
    }

    return {winningMark: '', winningTiles}
}





export default function boardReducer(board = {
    tiles: [
        [0,0,0],
        [0,0,0],
        [0,0,0]],
    winningMark: '',
    winningTiles: []
}, action) {

    const allTiles = board.tiles;

    switch(action.type){
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
            return {tiles: newTiles, winningMark: board.winningMark, winningTiles: board.winningTiles};
        case 'CHECK_BOARD':
            const {winningMark, winningTiles} = checkBoard(allTiles);
            return {tiles: allTiles, winningMark, winningTiles}

        case 'RESTART':
            return {
                tiles: [
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]],
                winningMark: '',
                winningTiles: []
            }    
        default:
            return board;
    }
}