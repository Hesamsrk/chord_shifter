require('dotenv').config() // config .env 
const shift = require('./shift');
const chordToString = require('./chordToString');
const fs = require('fs');
let regex =RegExp(process.env.REGEX ,'g')

// read data from input
let input = fs.readFileSync('./input.txt', 'utf8')
// make template
let template = input.replace(regex,process.env.CHORD_CONTAINER_TEMPLATE)


// make chord list
let chordList= []
while (res = regex.exec(input)) {
    let chord = {...res.groups}
    chordList.push(chord)
}

// shift chords
let newChordList = []

chordList.forEach((data)=>{
    newChordList.push(shift(data,Number(process.env.SHIFT)))
})
// write new chords on template
let output = template;
chordToString(chordList[2])
for(let chord of newChordList){
    output = output.replace(process.env.CHORD_CONTAINER_TEMPLATE,chordToString(chord))
}

// Write data in output
fs.writeFileSync('./output.txt',output)