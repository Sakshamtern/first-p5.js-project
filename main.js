function preload()
{
    img = loadImage('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg');
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 150);
}

function draw()
{
    image(img, 220, 140, 200, 200);

    fill(0, 69, 0) ;
    stroke(69, 69, 69);
    circle(50, 50, 90);

    fill(0, 69, 0) ;
    stroke(69, 69, 69);
    circle(590, 50, 90);

    fill(0, 69, 0) ;
    stroke(69, 69, 69);
    circle(50, 430, 90);

    fill(0, 69, 0) ;
    stroke(69, 69, 69);
    circle(590, 430, 90);

    fill(210, 0, 0) ;
    stroke(69, 0, 0);
    rect(93, 423, 454, 20);

    fill(210, 0, 0) ;
    stroke(69, 0, 0);
    rect(93, 40, 454, 20);

    fill(210, 0, 0) ;
    stroke(69, 0, 0);
    rect(40, 95, 20, 292);

    fill(210, 0, 0) ;
    stroke(69, 0, 0);
    rect(580, 95, 20, 292);
}

function take_snapshot()
{
    save('google.png'); 
}
    