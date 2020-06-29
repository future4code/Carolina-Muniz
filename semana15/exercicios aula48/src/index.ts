//1) é o constructor que recebe os parâmetros de atributos nas classes, 
//   e esses atributos são acessados atravsé do this.

class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(newDate: string, newValue: number, newDescription: string) {
      this.date = newDate;
      this.value = newValue;
      this.description = newDescription
    }
  }
  
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
      
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
    //   public getBalance(): number {
    //   //Aqui deve ser inserida a lógica de pegar saldo do usuário
    //   }
  
    //   public addBalance(value: number): void {
    //   //Aqui deve ser inserida a lógica de adicionar saldo 
    //     console.log('Saldo atualizado com sucesso')
    //   }
  
}


