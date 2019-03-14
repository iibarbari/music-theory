// result = {
//     root:`C`,
//     scale:`major`,
//     scaleName:`Major Scales`,
//     scaleNotes:[`C`,`D`,`E`,`F`,`G`,`A`,`B`],
//     scaleIntervals:[`P1`,`M2`,`M3`,`P4`,`P5`,`m6`,`M7`]
// }

const notes = require(`../datas/notes.js`),
    scales = require(`../datas/scales`),
    intervals = require(`../datas/intervals`),
    printScale = require(`./printScale.js`),
    createChords = require(`./createChords.js`);


function result(scaleName, initialNote) {
    r = {
        root: initialNote,
        scale: scaleName,
        scaleName: scales[scaleName].name,
        notesInScale: printScale(scaleName, initialNote),
        intervalInScale: scales[scaleName].numbers,
        lol: () => {
            return this.intervalInScale.map(x => intervals[x])
        }

    }
    return r;
}

module.exports = function (scaleName, initialNote) {
    var query = result(scaleName, initialNote)
    return query;
}