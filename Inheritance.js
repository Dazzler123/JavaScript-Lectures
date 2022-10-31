// function Vehicle() {
//
// }
//
// var c = {
//     id:'C001'
// };

// function Vehicle() {
//
// }
//
// function Car() {
//
// }
//
// Vehicle.prototype.model="CLA AMG 200";
// Vehicle.prototype.year=2022;

class CustomerDTO {
    constructor(id,name,address,salary) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }
}

let b1 = new CustomerDTO("C001","Dasun","Wattala","15000.00");

class CustomerOne extends CustomerDTO {
    constructor(id,name,address,salary) {
        super(id,name,address,salary);
    }
}

let b2 = new CustomerOne("C002","Kasun","Panadura","25000.00");

