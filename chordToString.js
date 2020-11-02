module.exports = function chordToString(chord){
    for(let i in chord){
        if(chord[i]===undefined){
            chord[i] = ''
        }
    }
    let str = '';
    for(let j in chord){
        str+=(chord[j])
    }
    return str
    
}