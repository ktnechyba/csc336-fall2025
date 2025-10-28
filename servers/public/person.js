class Person{
    constructor(data){
        this.data = data
        this.x = random(0, width);
        this.y = random(0,height);
        this.hue = random(0, 360);
    }

    update(){
        fill(this.hue, 60, 100); //huse range(0-360), saturation (range 0-100), brightness (range 0-100)
        ellipse(this.x, this.y, 50);
        textAlign(CENTER);
        fill(0);
        text(this.data.name, this.x, this.y);
    }
}