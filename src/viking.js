// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{ 
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        if(this.health<=0){
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    
}

// Saxon
class Saxon extends Soldier{ 
    receiveDamage(damage){
        this.health -= damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        if(this.health<=0){
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy =[];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        let randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];
        let result = randomSaxon.receiveDamage(randomViking.attack());
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return result
        }

    saxonAttack(){
        let randomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        let randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];
        let result = randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return result
    }
    
    inCaseOfAttack(saxonOrViking){
        let randomSaxonIndex = Math.floor(this.saxonArmy.length * Math.random());
        let randomVikingIndex = Math.floor(this.vikingArmy.length*Math.random());
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];
        if(saxonOrViking === "saxon"){
            let result = randomViking.receiveDamage(randomSaxon.attack());
            if (randomViking.health <= 0) {
                this.vikingArmy.splice(randomVikingIndex, 1)
            }
            return result
        }
        else if(saxonOrViking === "viking"){
            let result = randomSaxon.receiveDamage(randomViking.attack());
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return result
        }
    }


    showStatus(){
        if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
        else if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
        else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >=1){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    }