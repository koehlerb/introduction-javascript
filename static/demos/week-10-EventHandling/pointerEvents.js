/**
 * cloned from https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
 * 2024-02-10
 * This example is a simple drawing app that uses pointer events to draw on a canvas.
 * The app listens for pointerdown, pointermove, pointerup, and pointercancel events on the canvas element.
 * It uses the pointerId property of the event object to keep track of the ongoing touches.
 * It uses the clientX and clientY properties of the event object to draw on the canvas.
 * It uses the pointerType property of the event object to determine the color of the line.
 */
const ongoingTouches = [];
function startup() {
    const el = document.getElementsByTagName("canvas")[0];
    // the following 2 lines are added to clear the canvas after drawings occurred
    const canvas = el.getContext("2d");
    canvas.clearRect(0, 0, el.width, el.height);

    el.addEventListener("pointerdown", handleStart, false);
    el.addEventListener("pointerup", handleEnd, false);
    el.addEventListener("pointercancel", handleCancel, false);
    el.addEventListener("pointermove", handleMove, false);
    // this line is added for clearing the log textbox
    log("initialize");

    log("initialized.");
}
function handleStart(evt) {
    log("pointerdown.");
    const el = document.getElementsByTagName("canvas")[0];
    const ctx = el.getContext("2d");

    log(`pointerdown: id = ${evt.pointerId}`);
    ongoingTouches.push(copyTouch(evt));
    const color = colorForTouch(evt);
    ctx.beginPath();
    ctx.arc(evt.clientX, evt.clientY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
}
function handleMove(evt) {
    const el = document.getElementsByTagName("canvas")[0];
    const ctx = el.getContext("2d");
    const color = colorForTouch(evt);
    const idx = ongoingTouchIndexById(evt.pointerId);

    log(`continuing touch: idx =  ${idx}`);
    if (idx >= 0) {
        ctx.beginPath();
        log(
            `ctx.moveTo(${ongoingTouches[idx].pageX}, ${ongoingTouches[idx].pageY});`
        );
        ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
        log(`ctx.lineTo(${evt.clientX}, ${evt.clientY});`);
        ctx.lineTo(evt.clientX, evt.clientY);
        ctx.lineWidth = 4;
        ctx.strokeStyle = color;
        ctx.stroke();

        ongoingTouches.splice(idx, 1, copyTouch(evt)); // swap in the new touch record
        log(".");
    } else {
        log(`can't figure out which touch to continue: idx = ${idx}`);
    }
}
function handleEnd(evt) {
    log("pointerup");
    const el = document.getElementsByTagName("canvas")[0];
    const ctx = el.getContext("2d");
    const color = colorForTouch(evt);
    const idx = ongoingTouchIndexById(evt.pointerId);

    if (idx >= 0) {
        ctx.lineWidth = 4;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
        ctx.lineTo(evt.clientX, evt.clientY);
        ctx.fillRect(evt.clientX - 4, evt.clientY - 4, 8, 8); // and a square at the end
        ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
        log("can't figure out which touch to end");
    }
}
function handleCancel(evt) {
    log(`pointercancel: id = ${evt.pointerId}`);
    const idx = ongoingTouchIndexById(evt.pointerId);
    ongoingTouches.splice(idx, 1); // remove it; we're done
}
function colorForTouch(touch) {
    let r = touch.pointerId % 16;
    let g = Math.floor(touch.pointerId / 3) % 16;
    let b = Math.floor(touch.pointerId / 7) % 16;
    r = r.toString(16); // make it a hex digit
    g = g.toString(16); // make it a hex digit
    b = b.toString(16); // make it a hex digit
    const color = `#${r}${g}${b}`;
    log(`color for touch with identifier ${touch.pointerId} = ${color}`);
    return color;
}
function copyTouch(touch) {
    return {
        identifier: touch.pointerId,
        pageX: touch.clientX,
        pageY: touch.clientY,
    };
}
function ongoingTouchIndexById(idToFind) {
    for (let i = 0; i < ongoingTouches.length; i++) {
        const id = ongoingTouches[i].identifier;

        if (id === idToFind) {
            return i;
        }
    }
    return -1; // not found
}
function log(msg) {
    const p = document.getElementById("log");
    // this line is added for clearing the log textbox
    p.innerHTML = msg == 'initialize' ? "" : `${msg}\n${p.innerHTML}`;
}