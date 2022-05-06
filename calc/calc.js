'use strict'
let square = {
    side: 0,
    get size() {return this.side;},
    set size(newValue) {
        if (newValue > 0) {
            this.side = newValue;
        } else {
            throw new Error("Сторона квадрата должна быть больше 0");
        }
    },
    area() {return this.side**2},
    perimeter() {return this.side*4},
};

let rectangle = {
    width: 0,
    height: 0,
    get size() {return {width: this.width, height: this.height,}},
    set size(newValue) {
        let [width, height] = newValue;
        if (width > 0 && height > 0) {
            this.width = width;
            this.height = height;
        } else {
            throw new Error("Стороны прямоугольника должна быть больше 0");
        }
    },
    area() {return this.width * this.height},
    perimeter() {return (this.width + this.height) * 2},
};

let circle = {
    radius: 0,
    get size() {return this.radius;},
    set size(newValue) {
        if (newValue > 0) {
            this.radius = newValue;
        } else {
            throw new Error("Радиус круга должен быть больше 0");
        }
    },
    area() {return 2 * Math.PI * this.radius},
    circumference() {return Math.PI * this.radius**2},
}

let triangle = {
    side1: 0,
    side2: 0,
    side3: 0,
    get size() {return {side1: this.side1, side2: this.side2, side3: this.side3}},
    set size(newValue) {
        let [side1, side2, side3] = newValue;
        if (side1 > 0 && side2 > 0, side3 > 0) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            throw new Error("Стороны треугольника должна быть больше 0");
        }
    },
    area() {
        const semiPerimeter = this.perimeter();

        return Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3)).toFixed(2);
    },
    perimeter() {return (this.side1 + this.side2 + this.side3)},
}

try {
    square.size = 5;
    console.log(`area square = ${square.area()}, perimeter square = ${square.perimeter()}`);
} catch(e) {
    console.log(e.message);
}

try {
    rectangle.size = [5, 10];
    console.log(`area rectangle = ${rectangle.area()}, perimeter rectangle = ${rectangle.perimeter()}`);
} catch(e) {
    console.log(e.message);
}

try {
    circle.size = 5;
    console.log(`area circle = ${circle.area().toFixed(2)}, circumference circle = ${circle.circumference().toFixed(2)}`);
} catch(e) {
    console.log(e.message);
}

try {
    triangle.size = [5, 10, 15];
    console.log(`area triangle = ${triangle.area()}, perimeter triangle = ${triangle.perimeter()}`);
} catch(e) {
    console.log(e.message);
}





