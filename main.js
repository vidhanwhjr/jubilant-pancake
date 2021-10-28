function setup(){
    myCanvas = createCanvas(400, 300);
    myCanvas.position(550, 400);
    img = createCapture(VIDEO);
    img.hide();
    
    tint_color = "";
}

function draw(){
    image(img, 0, 0, 400, 400);
    tint(tint_color);
}

function apply(){
    tint_color = document.getElementById("Filter_color").value;
}

function take_snapshot(){
    save('Picture.png');
}