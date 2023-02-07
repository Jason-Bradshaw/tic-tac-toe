const board = [
    null, null, null,
    null, null, null,
    null, null, null
]

function playmark(mark, celladdress){
    board[celladdress] = mark
}