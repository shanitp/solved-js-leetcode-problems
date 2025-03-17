// This JavaScript function rotate(matrix) rotates an n×n 2D matrix 90 degrees clockwise in-place. 
// For example, given:
// 1  2  3
// 4  5  6
// 7  8  9

// After transposition, it becomes:
// 1  4  7
// 2  5  8
// 3  6  9


function rotate(matrix) {
    const n = matrix.length;
    
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap elements at matrix[i][j] and matrix[j][i]
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
printMatrix(matrix);

rotate(matrix);

console.log("Matrix after 90 degree rotation:");
printMatrix(matrix);
