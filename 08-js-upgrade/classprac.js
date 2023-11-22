class Rectangle{
    constructor(x, y){
        this.width = x;
        this.height = y;
    }

    getArea(){
        return this.width*this.height;
    }
    getLine(){
        return Math.sqrt(this.width+this.height);
    }
}

let rec2 = new Rectangle(4,3);
console.log(rec2.getArea());
console.log(rec2.getLine());