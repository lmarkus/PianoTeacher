var fs = require('fs')
var parseMidi = require('midi-file').parseMidi
var writeMidi = require('midi-file').writeMidi
const readline = require('readline');
const util = require("util");
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const whiteKey = "░" + RESET;
const blackKey = "█" + RESET;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let song =
    [
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 53
        },
        {
            "deltaTime": 384,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 56
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 61
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 64,
            "velocity": 54
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 57
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 763,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 65
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 64
        },
        {
            "deltaTime": 15,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 64,
            "velocity": 0
        },
        {
            "deltaTime": 369,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 67
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 58
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 64,
            "velocity": 51
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 61
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 59,
            "velocity": 61
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 59,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 57,
            "velocity": 61
        },
        {
            "deltaTime": 217,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 64,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 74,
            "velocity": 71
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 57,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 58
        },
        {
            "deltaTime": 512,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 74,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 74,
            "velocity": 66
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 71,
            "velocity": 58
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 55
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 74,
            "velocity": 0
        },
        {
            "deltaTime": 507,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 61
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 58
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 71
        },
        {
            "deltaTime": 15,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 71,
            "velocity": 0
        },
        {
            "deltaTime": 497,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 59
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 49
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 62
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 724,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 59
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 53,
            "velocity": 54
        },
        {
            "deltaTime": 512,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 63
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 72
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 53,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 53,
            "velocity": 59
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 379,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 71,
            "velocity": 55
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 48
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 71,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 59
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 53,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 72
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 379,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 61
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 67
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 64,
            "velocity": 66
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 65
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 724,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 64,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 63
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 53,
            "velocity": 59
        },
        {
            "deltaTime": 512,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 62
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 70
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 53,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 53,
            "velocity": 57
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 379,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 71,
            "velocity": 60
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 53
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 71,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 59
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 53,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 68
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 379,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 69,
            "velocity": 62
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 60
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 69,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 64,
            "velocity": 51
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 58
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 59,
            "velocity": 55
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 59,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 57,
            "velocity": 60
        },
        {
            "deltaTime": 217,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 64,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 74,
            "velocity": 74
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 57,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 57
        },
        {
            "deltaTime": 512,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 74,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 74,
            "velocity": 68
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 77,
            "velocity": 72
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 67
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 74,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 74,
            "velocity": 59
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 77,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 71,
            "velocity": 64
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 74,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 80
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 83
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 71,
            "velocity": 0
        },
        {
            "deltaTime": 763,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 76,
            "velocity": 76
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 66
        },
        {
            "deltaTime": 15,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 714,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 76,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 72,
            "velocity": 53
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 64
        },
        {
            "deltaTime": 256,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 45
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 72,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 64,
            "velocity": 58
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 251,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 67,
            "velocity": 62
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 55,
            "velocity": 56
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 64,
            "velocity": 0
        },
        {
            "deltaTime": 379,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 65,
            "velocity": 55
        },
        {
            "deltaTime": 7,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 67,
            "velocity": 0
        },
        {
            "deltaTime": 121,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 62,
            "velocity": 47
        },
        {
            "deltaTime": 2,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 65,
            "velocity": 0
        },
        {
            "deltaTime": 254,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 59
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 55,
            "velocity": 0
        },
        {
            "deltaTime": 0,
            "channel": 0,
            "type": "noteOn",
            "noteNumber": 60,
            "velocity": 68
        },
        {
            "deltaTime": 5,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 62,
            "velocity": 0
        },
        {
            "deltaTime": 724,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        },
        {
            "deltaTime": 39,
            "channel": 0,
            "type": "noteOff",
            "noteNumber": 60,
            "velocity": 0
        }
    ];

// Read MIDI file into a buffer
let input = fs.readFileSync('silent_night_easy.mid')

// Parse it into an intermediate representation
// This will take any array-like object.  It just needs to support .length, .slice, and the [] indexed element getter.
// Buffers do that, so do native JS arrays, typed arrays, etc.
let parsed = parseMidi(input);

//console.log(parsed);


let keyboard = new Array(127).fill(false);


function renderKeyboard() {
    let keys = new Array(127);
    let keyPressed;

    for (let i = 0; i < 127; i++) {

        keyPressed = keyboard[i];
        let inOctave = i % 12;
        switch (inOctave) {
            //White keys
            case 0:
            case 2:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                keys[i] = keyPressed ? RED + whiteKey : whiteKey;
                break;
            //Black Keys
            default:
                keys[i] = keyPressed ? RED + blackKey : blackKey;
                break;
        }

    }

    //readline.clearLine(process.stdout, 0);
    readline.clearScreenDown(process.stdout);
    readline.cursorTo(process.stdout, 0);
    rl.write(keys.join(''));
}


function processSongFromIndex(song, index) {
    let chunk = song[index];

    do {
        if (chunk.type && chunk.type === 'noteOn') {
            keyboard[chunk.noteNumber] = true;
        }
        else if (chunk.type && chunk.type === 'noteOff') {
            keyboard[chunk.noteNumber] = false;
        }
        index++;
        chunk = song[index];
    } while (index < song.length && chunk.deltaTime === 0); // Process all events happening at this point in time.

    if (index === song.length) {
        readline.clearLine(process.stdout, 0);
        rl.close();
        return;
    }

   renderKeyboard();
    setTimeout(() => {
        processSongFromIndex(song, index)
    }, chunk.deltaTime*2);


}

processSongFromIndex(song, 0);


//


