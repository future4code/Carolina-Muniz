"use strict";
class Transaction {
    constructor(newDate, newValue, newDescription) {
        this.date = newDate;
        this.value = newValue;
        this.description = newDescription;
    }
}
class UserAccount {
    constructor(cpf, name, age) {
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
//# sourceMappingURL=index.js.map