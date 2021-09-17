import React from "react";
import Sketch from "react-p5";


let circleX = 150
let circleY = 150
let aumenterX = 1
let aumenterY = 2


const setup = (p5, canvasParentRef) => {
  let xyz = p5.createCanvas(500, 1000).parent(canvasParentRef);
  circleX = 150
  circleY = 150
  // p5.background(255, 255, 255);
};


const mousePressed = (p5) => {
  //   p5.background(255, 255, 255)
  p5.print("Mouse Pressed");
  circleX = 100
  circleY = 100
};

const draw = (p5) => {

  p5.print("Drawing");


  p5.background(255, 255, 255);


    if(circleX > 325){
        aumenterX=-aumenterX
    }
    else if(circleY < 25){
        aumenterY=-aumenterY
    }
    else if(circleY > 200 ) {
        aumenterY=-aumenterY
    }
    else if(circleX===15){
    aumenterX=-aumenterX
    }
 


  circleY += aumenterY
  circleX += aumenterX

  //back rect
  p5.fill(200, 100, 100);
  p5.stroke(100, 200, 100);
  p5.rect(0, 0, 320, 200);

  //ball
  p5.noStroke();
  p5.fill(0, 255);
  p5.ellipse(circleX, circleY, 50);

  //front rect
  p5.fill(100, 200, 100, 200);
  p5.noStroke();
  p5.rect(25, 125, 395, 200);

  //lines
  p5.strokeWeight(2);
  p5.stroke(100, 0, 200);
  p5.line(320, 0, 420, 125);
  p5.line(0, 0, 25, 125);
  p5.line(0, 200, 25, 325);
  p5.stroke(100, 0, 200, 100);
  p5.line(320, 200, 420, 325);
};

const AnimationBackground = () => {
  return <Sketch setup={setup} draw={draw} mouseClicked={mousePressed} />;
};

export default AnimationBackground;
