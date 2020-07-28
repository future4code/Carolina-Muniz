import { validateCharacter } from "../src/exercicio1";

test('Retorna false para nome vazio', ()=> {
    const result = validateCharacter({
        name: "",
        life: 100, 
        defense: 50,
        force: 60
    });
    expect(result).toEqual(false);
});

test('Retorna false para vida vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: , 
        defense: 50,
        force: 60
    });
    expect(result).toEqual(false);
});

test('Retorna false para força vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 
    });
    expect(result).toEqual(false);
}); 

test('Retorna false para defesa vazia', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: ,
        force: 60
    });
    expect(result).toEqual(false);
}); 

test('Retorna false para defesa com valor negativo', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: -60
    });
    expect(result).toEqual(false);
}); 

test('Retorna false para força igual a 0', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 0
    });
    expect(result).toEqual(false);
});

test('Retorna true para todos os inputs válidos', ()=> {
    const result = validateCharacter({
        name: "Carol",
        life: 100, 
        defense: 50,
        force: 50
    });
    expect(result).toEqual(true);
});



