class car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    riding() {
        console.log("meep meep");
    }
    getColor(){
        console.log('my color is',this.color);
    }
    getSpeed(){
        console.log("my speed",this.speed);
    }
}

class car2 extends car{
    constructor(color,speed,brand){
        super(color,speed);
        this.brand=brand;
    }
    getBrand(){
        console.log("car brand is",this.brand)
    }
    getColor(c){
        this.color=c;
        console.log("car color is "+c)
    }
}

obj=new car('red',200);
obj.getColor();
obj.getSpeed();


obj2=new car2('blue',300,"bmw")
obj2.getColor();
obj2.getBrand();
obj2.getColor("purple");





