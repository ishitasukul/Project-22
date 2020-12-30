class Box{
    //initialize the objects
    constructor(x,y,width,height){

        var box_options = {
            //JSON
            isStatic:true
        }
        
        //this -> Name of object created using class
                
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }



 display(){

    rectMode(CENTER);
    fill(255,0,0)
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }


}

