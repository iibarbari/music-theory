const notes = require(`../datas/notes.js`),
    scales = require(`../datas/scales`),
    intervals = require(`../datas/intervals`),
    printScale = require(`./printScale.js`),
    createChords = require(`./createChords.js`),
    mod = require(`./mod.js`);

module.exports = function (scaleName, initialNote) {
    var chords = createChords(scaleName, initialNote);
    for (let z = 0; z < chords.length; z++) {
        var temp = [];
        chords[z].forEach(function (note, index) {
            temp.push(notes.indexOf(note));
        });
    }
    var aralik = temp.map(note => intervals[mod(note - temp[0], 12)]);
    console.log(aralik);
    return aralik;
}