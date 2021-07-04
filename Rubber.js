class Rubber{
	constructor(x,y,r){
	// assign options to the rubber ball
	var options={
		restitution : 0.5,
		friction :0.01,
		density :1
	} 
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display(){
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(10, 10, this.r, this.r);

			pop()
	}

}