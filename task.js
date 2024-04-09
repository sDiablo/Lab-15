function canPlaceQueen(board, row, col, n) {
    // Перевірка по вертикалі вгору
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) {
            return false;
        }
    }

    // Перевірка по діагоналі вгору-ліворуч
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    // Перевірка по діагоналі вгору-праворуч
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 1) {
            return false;
        }
    }

    return true;
}

function solveNQueensUtil(board, row, n, results) {
    if (row === n) {
        const solution = board.map(row => row.join(''));
        results.push(solution);
        return;
    }

    for (let i = 0; i < n; i++) {
        if (canPlaceQueen(board, row, i, n)) {
            board[row][i] = 1;
            solveNQueensUtil(board, row + 1, n, results);
            board[row][i] = 0; // backtrack
        }
    }
}

function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    const results = [];
    solveNQueensUtil(board, 0, n, results);
    return results;
}

// Приклад використання:
const n = 4;
const solutions = solveNQueens(n);
console.log(`Рішень для ${n} ферзів на шахівниці ${n} x ${n}:`);
solutions.forEach((solution, index) => {
    console.log(`Рішення ${index + 1}:`);
    solution.forEach(row => console.log(row));
});
