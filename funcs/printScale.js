const notes = require(`../datas/notes.js`),
    scales = require(`../datas/scales`),
    intervals = require(`../datas/intervals`);


module.exports = function (scaleName, initialNote) {
    var noteIndex = notes.indexOf(initialNote);
    var result = [];

    scales[scaleName].numbers.forEach(function (item) {
        result.push(notes[(item + noteIndex) % 12]);
    });
    return result;
}