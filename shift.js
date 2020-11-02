// base = A B C D E F G
// A  A#  B  C  C#  D  D#  E  F  F#  G   G#
// 1  2   3  4  5   6  7   8  9  10  11  12 
function moveChord(index,shitfValue){
    if (typeof shitfValue !== 'number') throw Error(typeof shitfValue)
    if (shitfValue === 0) throw Error("shitfValue can not be 0.")
    if (shitfValue > 11 || shitfValue < -11) throw Error("shitfValue out of range: "+shitfValue)
    let i = index;
    i+=shitfValue
    if(i>12){
        i -=12
    }
    if(i<0){
        i+=12
    }
    return i
}


function setIndex(chord) {
    indexlib = {
        'A': 1,
        'B': 3,
        'C': 4,
        'D': 6,
        'E': 8,
        'F': 9,
        'G': 11
    }
    let index = indexlib[chord.base]
    m = chord.move
    if (m === '#') {
        index++
    } else if (m === 'b') {
        index--
    } else if (m === undefined) {

    } else {
        throw Error("something went wrong in setIndex()")
    }
    return index

}

function findByIndex(index) {
    if(typeof index != 'number') throw Error(`typeof index is ${typeof index}`)
    let i=index;
    let sharp = false;
    baselib = {
        1:'A',
        3:'B',
        4:'C',
        6:'D',
        8:'E',
        9:'F',
        11:'G'
    }
    if(baselib[i] === undefined){
        i--
        sharp = true;
    }
    let base = baselib[i]

    if(base===undefined){
        throw Error("something went wrong in findByIndex()")
    }


    return {base, sharp};



}
module.exports = function Shift(chord, shitfValue) {
    let options = {
        ...chord
    }
    let index = setIndex(chord)
    let changedIndex = moveChord(index,shitfValue)
    let answer = findByIndex(changedIndex)
    options.base = answer.base
    if(answer.sharp){
        options.move = '#'
    }
    else{
        options.move = undefined
    }
    return options
    
}

