var canvasEle = document.getElementById('myCanvas')

if (canvasEle && canvasEle.getContext) {
    var context = canvasEle.getContext('2d');

    if (context) {
        context.fillRect(0, 0, 150, 100);
    }
}
