const notes = require(`../datas/notes.js`),
    scales = require(`../datas/scales`),
    intervals = require(`../datas/intervals`),
    printScale = require(`./printScale.js`)
    mod = require(`./mod.js`);

module.exports = function (scaleName, initialNote) {
    var scale = printScale(scaleName, initialNote);
    var chords = [];
    var temp = [];

    for (let i = 0; i < scale.length; i++) {
        for (let k = 0; k < 5; k = k + 2) {
            temp.push(scale[mod(i + k, scale.length)]);
        }
        chords.push(temp);
        temp = [];
    }
    console.log(chords);
    return chords;
}