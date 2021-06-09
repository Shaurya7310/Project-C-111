function setup(){
    canvas = createCanvas(640,400)
    canvas.position(150,160)
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,210,100,220,200)
    fill(255,0,0)
    stroke(255,0,0)
    rect(80,30,200,29)
    
    circle(50,50,80)
    fill(0,255,0)
    stroke(0,255,0)
    circle(320,50,80)
    fill(255, 165, 0)
    stroke(255, 165, 0)
    circle(550,50,80)
    fill(0,255,0)
    stroke(0,255,0)
    rect(350,30,160,29)
    fill(255, 165, 0)
    stroke(255, 165, 0)
    rect(537,80,29,255)
    
    fill(255,0,0)
    stroke(255,0,0)
    circle(50,340,80)
    fill(0,255,0)
    stroke(0,255,0)
    circle(320,50,80)
    fill(255, 165, 0)
    stroke(255, 165, 0)
    circle(550,50,80)
    fill(255,0,0)
    stroke(255, 0, 0)
    rect(35,60,30,255)
    fill(0, 255, 0)
    stroke(0, 255, 0)
    circle(320,345,80)
    fill(255,0,0)
    stroke(255, 0, 0)
    rect(70,330,210,30)
    fill(255, 165, 0)
    stroke(255, 165, 0)
    circle(550,346,80)
    fill(0, 255, 0)
    stroke(0, 255, 0)
   rect(350,330,160,30)
    
   
   
}
 function take_snapshot(){
    save("image.png")
}