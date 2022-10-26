class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    toString() {
        return `[x = ${this.x}, y = ${this.y}, width = ${this.width}, height = ${this.height}]`;
    }
}

let rec = new Rectangle(1,2,5,6).toString()
let rec1 = new Rectangle(1,2,5,6).x

console.log(rec);
console.log(rec1);