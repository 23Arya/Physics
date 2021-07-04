class smell{
	constructor(x,y,r){
	// assign options to the rubber ball
	var options={
		'restitution' :1,
		'friction' :1.0,
		'density' : 4 
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
			strokeWeight(5);
			stroke("blue");
			fill("purple");
			//draw the ellipse here to display the rubber ball
			ellipse(30, 30, this.r, this.r);

			pop()
	}

}