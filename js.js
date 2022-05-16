
////////////////////////////  task1 ////////////////////////////////////

let x = {
    uname: "ahmed",
    address: "aswan",
    age: 20
}

let handler = {

    get: function (target, prop) {
        return target[prop]

    }

    ,
    set: function (target, prop, value) {
        if ([prop] == "uname") {
            if (value.length <= 7) {
                target[prop] = value
            }

            else throw " invalid"
        }

        else if ([prop] == "age") {
            if (value >= 25 && value <= 60) {
                target[prop] = value
            }

            else throw "please insert age between 25 and 60"
        }

        else if ([prop] == "address") {
            if (!isFinite(value)) {
                target[prop] = value
            }

            else throw "please insert valid address"
        }


    }



}


let oProxy = new Proxy(x, handler)
oProxy.uname = "qqq"
oProxy.age = 30
oProxy.address = "cairo"

// console.log(oProxy.uname)
// console.log(oProxy.age)
// console.log(oProxy.address)


///// task2 /////

class Shape {
    constructor() {

    }

    area() {


    }

    parameter() {

    }

}


class Rect extends Shape {
    constructor(r, r2) {
        super()
        this.side1 = r
        this.side2 = r2

    }

    area() {

        return this.side1 * this.side2
    }

    parameter() {
        return 2 * (this.side1 + this.side2)
    }

    toString() {
        return "area = " + this.area() + " and parameter = " + this.parameter()
    }

}


class Sqaure extends Shape {
    constructor(r) {
        super()
        this.r = r

    }

    area() {

        return this.r * this.r
    }

    parameter() {
        return 4 * this.r

    }

    toString() {
        return "area = " + this.area() + " and parameter = " + this.parameter()
    }

}


class Circle extends Shape {

    static count = 0;

    constructor(r) {
        super()
        this.radius = r
        ++Circle.count
    }

    area() {

        return Math.PI * this.radius * this.radius
    }

    parameter() {
        return 2 * Math.PI * this.radius

    }

    toString() {
        return "area = " + this.area() + " and parameter = " + this.parameter()
    }

    static countFun() {

        return Circle.count
    }

}


let r = new Rect(2, 4)
let s = new Sqaure(2)
let c = new Circle(7)
let c2 = new Circle(7)

// console.log(r.toString())
// console.log(s.toString())
// console.log(c.toString())
// console.log(Circle.countFun())




/////////////// task3 ///////////


function* fibSer(i) {

    let n1 = 0, n2 = 1, nextN = 0

    for (let j = 1; j <= i; j++) {


        if (j == 1) {
            yield 0
            j++
        }

        if (j == 2) {
            yield 1
            j++
        }
        nextN = n1 + n2
        yield nextN
        nextN = n1 + n2
        n1 = n2
        n2 = nextN

    }

}

let f = fibSer(5)
// console.log ("0 1" )
for (let val of f) {
    // console.log(val)
}




/////////////  task4 ////////////////


function itrator() {
    let itr = {}
    let k = Object.keys(this)
    let it = {}

    itr = {
        next: () => {
            for (let i = 0; i <= k.length; i++) {
                it = {value : this[k[i]]}
                i++
            }

        }
    }
    return itr
}

let y = {
    uname: "mo",
    age: 30,
    address: "cairo"
}

y[Symbol.iterator] = itrator

for (let val of y) {
    console.log(val)
}
