import { Character, validateCharacter } from "./exercicio1";

export const performAttack = (attacker: Character, defender: Character) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error ("Dados incorretos");
    }

    if(attacker.force > defender.defense) {
        const balanceLife =  attacker.force - defender.defense
        const result = defender.life - balanceLife
    }
}

export const performAttack2 = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean) => {
        
    if(!validator(attacker) || !validator(defender)) {
        throw new Error ("Dados incorretos")
    }

    if(attacker.force > defender.defense) {
        const balanceLife =  attacker.force - defender.defense
        const result = defender.life - balanceLife
    }
}

