(function () {

    const deg = (rads) => rads * Math.PI / 180;
    const canvas = document.getElementById("cv")
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const keyboardWidth = 400;
    let keyboardX = 100;
    let keyboardY = 500;
    let laserToKeyboard = (keyboardY - (height / 2));
    const numKeys = 60;
    const keyWidth = keyboardWidth / numKeys;
    const currentKeyField = document.getElementById("currentKey");

    const FULL = 2 * Math.PI;
    const HALF = Math.PI;
    const QUARTER = Math.PI / 2;
    const THREEQT = 3 * Math.PI / 2;

    let onKeys = new Array(numKeys);

    for (let i = 0; i < 10; i++) {
        onKeys[i] = true;
    }

    let laserOn = false;

    const mirrorWidth = 100;

    function drawMirror(angle) {
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-(mirrorWidth / 2), 0);
        ctx.lineTo(mirrorWidth / 2, 0);
        ctx.stroke();
        ctx.restore();
        //ctx.setTransform(1, 0, 0, 1, 0, 0);
    }


    function drawKeyboard() {
        ctx.save();
        let key = new Path2D();
        key.rect(0, 0, keyWidth, 5);


        ctx.translate(keyboardX, keyboardY);
        for (let i = 0; i < numKeys; i++) {


            if (onKeys[i]) {
                ctx.fillStyle = "blue";
                ctx.fill(key);
            }

            ctx.stroke(key);

            ctx.translate(keyWidth, 0)
        }

        ctx.restore();

    }


    function drawLaser(angle) {

        ctx.save();

        ctx.setLineDash(laserOn ? [] : [3, 3]); //Solid line for on, dashed for off
        ctx.lineWidth = laserOn ? 3.5 : 1; //Solid line for on, dashed for off


        //Draw Laser Base
        ctx.translate(width / 2, height);
        ctx.fillRect(-5, 0, 10, -20);

        //Draw Laser to mirror
        ctx.beginPath();
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -height / 2);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        //Reset and center
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        //Draw mirror to keyboard plane.
        ctx.strokeStyle = 'blue';
        ctx.translate(width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.rotate(angle * 2);
        let lineto = Math.abs(laserToKeyboard / (Math.cos(angle * 2) + .00000001));
        ctx.lineTo(0, lineto); //Salted to avoid division by zero.


        ctx.stroke();
        ctx.restore();
    }


    function getKey(angle) {


        if (angle > Math.PI / 4 || angle < -Math.PI / 4) {
            return null;
        }
        let distanceFromCenter = -Math.tan(angle * 2) * laserToKeyboard;
        let horizontalDistanceFromKeyboardStart = (width / 2 - keyboardX) + distanceFromCenter;
        let currentKey = Math.floor((horizontalDistanceFromKeyboardStart / keyboardWidth) * numKeys);

        if (currentKey < 0 || currentKey >= numKeys) {
            return null;
        }

        return currentKey;
    }


    function animate(time = 0) {
        ctx.clearRect(0, 0, width, height);
        let angle = (time / 2000) % FULL;
        let apparentAngle = angle;
        if (angle > QUARTER && angle < THREEQT) {
            apparentAngle = angle - HALF;
        }
        else if (angle > THREEQT) {
            apparentAngle = angle - FULL;
        }


        let currentKey = getKey(apparentAngle);
        //currentKeyField.innerText = currentKey || "Outside";
        if (currentKey === null) {
            laserOn = false;
        }
        else {
            laserOn = !!onKeys[currentKey];
        }

        drawKeyboard();
        drawMirror(angle);
        drawLaser(apparentAngle);
        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);

    setInterval(() => {
        shuffleArray(onKeys)
    }, 5000)

})();


function log(s) {

    document.getElementById("currentKey").innerText = s;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
