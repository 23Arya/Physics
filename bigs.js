class bigs {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution': 1
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(8);
      stroke('green')
      fill('lightgreen')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  