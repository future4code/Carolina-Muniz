# Respostas - exercícios Aula 64
##### Exercício 1
a) 
```
interface Character{
    name:string,
    life: number,
    defense: number,
    force: number
} 
```
b) 
```
export const validateCharacter = (input: Character): boolean => {
    if(
        !input.name ||
        input.life === undefined ||
        input.defense === undefined || 
        input.force === undefined  
    ) {return false}
    
    if(
        input.life < 0 ||
        input.defense < 0 ||
        input.force < 0   
    ) {return false}

    return true
};
```

##### Exercício 2
a) 
```
test('Retorna false para nome vazio', ()=> {
    const result = validateCharacter({
        name: "",
        life: 100, 
        defense: 50,
        force: 60
    });
    expect(result).toEqual(false);
});
```

b) Ao colocar *life* como vazio o *typescript* nos mostra um erro, pois configuramos na **interface Character** tendo tipo *number*.
```
```
test('Retorna false para vida vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: , 
        defense: 50,
        force: 60
    });
    expect(result).toEqual(false);
});
```

c) Ao colocar *force* como vazio o *typescript* nos mostra um erro, pois configuramos na **interface Character** tendo tipo *number*.
```
test('Retorna false para força vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 
    });
    expect(result).toEqual(false);
});
```

d) Ao colocar *defense* como vazio o *typescript* nos mostra um erro, pois configuramos na **interface Character** tendo tipo *number*.
```
test('Retorna false para defesa vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: ,
        force: 60
    });
    expect(result).toEqual(false);
});
```

e) 
```
test('Retorna false para defesa com valor negativo', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: -60
    });
    expect(result).toEqual(false);
}); 
```

f)
```
test('Retorna false para força igual a 0', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 0
    });
    expect(result).toEqual(false);
});
```

g) 
```
test('Retorna true para todos os inputs válidos', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 50
    });
    expect(result).toEqual(true);
});
```

##### Exercício 3
a) 
```
export const performAttack = (attacker: Character, defender: Character) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Dados incorretos");
    }

    if(attacker.force > defender.defense) {
        const balanceLife =  attacker.force - defender.defense
        const result = defender.life - balanceLife
    }
}
```

b) 
```
export const performAttack2 = (
    attacker: Character,
    defender: Character,
    validator: (inpurt: Character) => boolean) => {
        
    if(!validator(attacker) || !validator(defender)) {
        throw new Error ("Dados incorretos")
    }

    if(attacker.force > defender.defense) {
        const balanceLife =  attacker.force - defender.defense
        const result = defender.life - balanceLife
    }
}
```

c) A diferença entre elas é que na **performAttack2** precisa de uma referência da função **validateCharacter**,  para usá-la guardamos essa referência em na *const validator*.




