// Counter Pattern

// Compare if two arrays conternt the same items in squared.

let array1 = [1,2,2]
let array2 = [1,4,4]

function same(items1, items2) {
    if (items1.length !== items2.length ) {
        return false
    }
    let same1 = {}
    let same2 = {}
    for (let value of items1) {
        same1[value] = (same1[value] || 0) + 1
    }
    for (let value of items2){
        same2[value] = (same2[value] || 0) + 1
    }

    for (let value in same1){
        if ( !(same1[value] ** 2 in same2) ) {
            return false
        }
        if (same2[value ** 2] !== same1[value]) {
            return false
        }
    }
    return true
}

