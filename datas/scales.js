const scales = {
    //Major Scale - Ionian
    //C,D,E,F,G,A,B
    major: {
        name: "Major Scale",
        numbers: [0, 2, 4, 5, 7, 9, 11]
    },

    //Minor Scale - Aeolian
    //A,B,C,D,E,F,G
    minor: {
        name: "Minor Scale",
        numbers: [0, 2, 3, 5, 7, 8, 10]
    },

    //Harmonic Minor Scale
    //A,B,C,D,E,F,G#
    //Minor Scale - Seventh note raised a sharp
    harmonicMinor: {
        name: "Harmonic Minor Scale",
        numbers: [0, 2, 3, 5, 7, 8, 11]
    },

    //Melodic Minor Scale
    //A,B,C,D,E,F#,G#
    //Minor Scale - Seventh and sixths notes raised a sharp
    melodicMinor: {
        name: "Melodic Minor Scale",
        numbers: [0, 2, 3, 5, 7, 9, 11]
    },

    //Dorian Scale
    //D,E,F,G,A,B,C
    //Minor Scale - Sixth note raised a sharp
    dorian: {
        name: "Dorian Scale",
        numbers: [0, 2, 3, 5, 7, 9, 10]
    },

    //Phrygian Scale
    //E,F,G,A,B,C,D
    //Minor Scale - Lowered second degree
    phrygian: {
        name: "Phrygian Scale",
        numbers: [0, 1, 3, 5, 7, 8, 10]
    },

    //Lydian Scale
    //F,G,A,B,C,D,E
    //Major Scale - Raised four degree
    lydian: {
        name: "Lydian Scale",
        numbers: [0, 2, 4, 6, 7, 9, 11]
    },

    //Mixolydian Scale
    //G,A,B,C,D,E,F
    //Major Scale - Lowered Second Degree
    mixolydian: {
        name: "Mixolydian Scale",
        numbers: [0, 2, 4, 5, 7, 9, 10]
    },

    //Locrian Scale
    //B,C,D,E,F,G,A
    //Minor Scale - Lowered Second and Fifth Degree
    locrian: {
        name: "Locrian Scale",
        numbers: [0, 1, 3, 5, 6, 8, 10]
    },
}

module.exports = scales;