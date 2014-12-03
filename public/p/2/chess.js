var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');

for (p = 0; p < canvas.height; p += canvas.height/8 ) {
    for (i = 0; i < canvas.width; i += canvas.width/8 ) {

        if (i % canvas.height == 0 && p % canvas.width == 0) {
            context.rect(i,p,canvas.width/8,canvas.width/8);
        } else {
            context.fillRect(i,p,canvas.width/8,canvas.width/8);
        }

        context.stroke();
    }
}
