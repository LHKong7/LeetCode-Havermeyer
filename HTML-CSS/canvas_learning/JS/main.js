const canvasEle = document.getElementById('myCanvas');
const ctx = canvasEle.getContext('2d');
const drawStraightLine = (ctx) => { // from (25, 25) to (125, 125)
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(125, 125);
    ctx.closePath();
    ctx.stroke();
}
drawStraightLine(ctx);

canvasEle.addEventListener('click', function (e) {
    const canvasInfo = canvasEle.getBoundingClientRect()
    console.log("canvasInfo: ", canvasInfo);
    console.log("isPointInPath: ", ctx.isPointInPath(e.clientX - canvasInfo.left, e.clientY - canvasInfo.top))
})

