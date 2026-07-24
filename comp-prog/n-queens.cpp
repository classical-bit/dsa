#include <iostream>
#include <vector>

using namespace std;

void printBoard(vector<string> &board)
{
    for (string &row : board)
    {
        for (char cell : row)
        {
            cout << cell << " ";
        }
        cout << "\n";
    }
    cout << string(2 * board.size() - 1, '-') << "\n";
}

void nQueens(int row, int n, vector<string> &board,
             vector<bool> &cols, vector<bool> &diag1,
             vector<bool> &diag2, int &queenCount)
{
    if (row == n)
    {
        queenCount++;
        cout << "Solution #" << queenCount << ":\n";
        printBoard(board);
        return;
    }

    for (int col = 0; col < n; col++)
    {
        int d1 = (row - col) + (n - 1);
        int d2 = row + col;

        if (cols[col] || diag1[d1] || diag2[d2])
        {
            continue;
        }

        board[row][col] = 'Q';
        cols[col] = true;
        diag1[d1] = true;
        diag2[d2] = true;

        nQueens(row + 1, n, board, cols, diag1, diag2, queenCount);

        board[row][col] = '.';
        cols[col] = false;
        diag1[d1] = false;
        diag2[d2] = false;
    }
}

int main()
{
    int n = 15; // Board size

    vector<string> board(n, string(n, '.'));
    printBoard(board);

    vector<bool> cols(n, false);
    vector<bool> diag1(2 * n - 1, false);
    vector<bool> diag2(2 * n - 1, false);

    int queenCount = 0;
    nQueens(0, n, board, cols, diag1, diag2, queenCount);

    return 0;
}