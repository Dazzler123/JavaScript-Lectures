var customer = {
    id:"C001",
    name:"Dasun"
}

Object.defineProperty(customer, 'Name, ID', {
    writable:false
})

function Item(itemCode, name) {
    this.itemCode = itemCode;
    this.name = name;
}

// var itemOne = new Item("I001","Keerisamba 5KG");
// console.log(itemOne.id);
//
// var value =  {
//     a:'100',
//     b:'200',
//     calculateTotal:function () {
//         return this.a + this.b;
//     }
// }


function Value() {
    this.a = 100;
    this.b = 200;
    this.calcTot = function (c) {
        return this.a + this.b + c;
    }
}

let cal = new Value();
cal.calcTot(200);


/// Task 1 ///
function Car() {
    this.make = "";
    this.model = "";
    this.park;
    this.setDetails = function (make,model) {
        this.make = make;
        this.model = model;
    }
    this.park = function () {
        return this.make + " " + this.model + "  is parked at 202 parking slot";
    }
}

let sampleCar = new Car();
sampleCar.setDetails("Benz",2022);
sampleCar.park();



/// Task 2 ///
function Animal(name, cry) {
    this.name = name;
    this.cry = cry;
    this.changeName = function (nm) {
        this.name = nm;
    }
    this.changeCry = function (cy) {
        this.cry = cy;
    }
    this.cryStyle = function () {
       return "The " + this.name + " is " + this.cry;
    }
}

var dog = new Animal("Cat","Meowing");
dog.changeName("Dog");
dog.changeCry("Barking");
dog.cryStyle();


/// Task 3 ///
function A() {
    var id = "";
    this.setCustomerID = function (v) {
        id = v;
    }
    this.getCustomerID = function () {
        return id;
    }
}

var cus = new A();
cus.id
cus.setCustomerID("C001");
cus.getCustomerID();






