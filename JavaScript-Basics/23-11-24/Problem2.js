// Spirally Traversing a Matrix

function spirallyTraversingAMatrix(N, matrix) {
    let t = 0;
    let b = N - 1;
    let l = 0;
    let r = N - 1;
    let S = 0;
    let str = ""
    while (S < N * N) {
        for (let i = l; i <= r && S < N * N; i++) {
            str = str + matrix[t][i] + " ";
            S++;
        }
        t++;
        for (let i = t; i <= b && S < N * N; i++) {
            str = str + matrix[i][r] + " ";
            console.log(str);
            S++;
        }
        r--;
        for (let i = r; i >= l && S < N * N; i--) {
            str = str + matrix[b][i] + " ";
            S++;
        }
        b--;
        for (let i = b; i >= t && S < N * N; i--) {
            str = str + matrix[i][l] + " ";
            S++;
        }
        l++;
    }
    console.log(str);

}
spirallyTraversingAMatrix(4, [[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8]]);
