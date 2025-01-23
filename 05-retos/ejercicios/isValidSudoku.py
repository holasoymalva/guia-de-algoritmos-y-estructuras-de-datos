class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                val = board[i][j]
                if val == '.':
                    continue
                box_index = (i//3) * 3 + (j//3)

                if val in rows[i] or val in cols[j] or val in  boxes[box_index]:
                    return False

                rows[i].add(val)
                cols[j].add(val)
                boxes[box_index].add(val)
        return True
