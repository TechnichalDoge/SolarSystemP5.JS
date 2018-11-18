var starPoses = [];
function setup() {

  createCanvas(720,720,WEBGL);
  for(var stars = 0; stars <= 800; stars++){
    var obj = {
      x: random(-width*2,width*2),
      y: random(-height*2,height*2),
      z: -random(1000,2000)
    }
    starPoses.push(obj);
  }
  noStroke();

}
var sizeOffset = 0.5;
var speedDifferential = 1;
var planetOff = 6;
var sunSize = 15 / (sizeOffset);
var dataSheetObj = [
  {
    name: "mercury",
    size: sunSize/(277/sizeOffset),
    speed:  1.59,//365 * 0.241,
    distance: 149600000 * 0.387,
    baseColor: [125,125,125]
  },
  {
    name: "venus",
    size: sunSize/(113/sizeOffset),
    speed: 1.18,//365 * 0.615,
    distance: 149600000 * 0.723,
    baseColor: [25,250,25]
  },
  {
    name: "earth",
    size: sunSize/(108/sizeOffset),
    speed: 1,//365 * 1,
    distance: 149600000,
    baseColor: [25,125,255]
  },
  {
    name: "mars",
    size: sunSize/(208/sizeOffset),
    speed: 0.808,//365 * 1.88,
    distance: 149600000 * 1.52,
    baseColor: [255,50,10]
  },
  {
    name: "jupiter",
    size: sunSize/(9.7/sizeOffset),
    speed: 0.439,//365 * 11.9,
    distance: 149600000 * 5.2,
    baseColor: [255,175,75]
  },
  {
    name:"saturn",
    size: sunSize/(11.4/sizeOffset),
    speed: 0.325,//365 * 29.4,
    distance: 149600000 * 9.58,
    baseColor: [125,225,125]
  },
  {
    name: "uranus",
    size: sunSize/(26.8/sizeOffset),
    speed: 0.228,//365 * 83.7,
    distance: 149600000 * 19.2,
    baseColor: [125,255,255]
  },
  {
    name:"neptune",
    size: sunSize/(27.7/sizeOffset),
    speed: 0.182,//365 * 163.7,
    distance: 149600000 * 30.05,
    baseColor: [15,25,255]
  },
  {
    name: "pluto",
    size: sunSize/(585.444444444/sizeOffset),
    speed: 0.157,//365 * 247.9,
    distance: 149600000 * 39.48,
    baseColor: [225,225,225]
  }
  //https://www.jpl.nasa.gov/infographics/infographic.view.php?id=10749

  //https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
]
var stopSwitch = 0;
function draw() {
  background(0,0,0);
    for(var count = 0; count < starPoses.length;count++){
      push();
      translate(starPoses[count].x,starPoses[count].y,starPoses[count].z)
      fill(255);
      sphere(2);
      pop();
    }
    var dist = 200;
    //var lightPoses = [
    //  [0,dist,0],
    //  [dist,0,0],
    //  [0,0,dist]
    //  ]
    //for(var i = 0; i < 3; i++){
    //    directionalLight(255,255,255,lightPoses[i][0],lightPoses[i][1],lightPoses[i][2]);
    //    directionalLight(255,255,255,-lightPoses[i][0],-lightPoses[i][1],-lightPoses[i][2]);
    //}
    //pointLight(255,255,255,0,0,0);1
    for(var i = 0; i < 10; i++){
      pointLight(255,255,255,0,0,1000)
    }
    push();
    ambientMaterial(255,255,125)
    sphere(sunSize);
    normalMaterial();
    //rotateY(0)
    //plane(sunSize*2);
    pop();

    for (var planet = 0; planet < dataSheetObj.length;planet++) {
      push();

      var leObj = dataSheetObj[planet];
      var name = leObj.name;
      var speed = leObj.speed*(millis()/50);
      var size = leObj.size*planetOff;
      var color = leObj.baseColor;
      var dist = map(leObj.distance,dataSheetObj[0].distance,dataSheetObj[8].distance,sunSize+2,360);
      angleMode(DEGREES);
      rotateZ(speed*speedDifferential);
      translate(dist,0,0);
      ambientMaterial(color);
      if(planet === 5){
        ambientMaterial(color[0],color[1],color[2],25)
          torus(size+4,2)
      }
      ambientMaterial(color[0],color[1],color[2]);
      sphere(size);
      ambientMaterial(color[0],color[1],color[2],10)
      torus(size+20,5)
      box(2,size*2+40,2)
      box(size*2+40,2,2)
    /*  translate(0,size+50,0);
      rotateZ(180);
      scale(1/scaleure);
      cone();*/
      pop();

    }
}
