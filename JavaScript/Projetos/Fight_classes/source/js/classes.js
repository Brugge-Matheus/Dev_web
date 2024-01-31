// Knight or Sorcerer 
// LittleMonster or BigMonster

class Character {
    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;
    classe = '';

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100;
        this.maxlife = this.life;
        this.defense = 8;
        this.attack = 10;
        this.classe = 'Tank';
    }
}


class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80;
        this.maxlife = this.life;
        this.defense = 3;
        this.attack = 15;
        this.classe = 'Squihsy';
    }
}

class LittleMonster extends Character {
    constructor() {
        super('\uD83D\uDC09	Little Monster')
        this.life = 60;
        this.maxlife = this.life;
        this.defense = 4;
        this.attack = 4;
        this.classe = 'Weak Monster';
        
    }
}

class BigMonster extends Character {
    constructor() {
        super('\uD83D\uDC32 Big Monster')
        this.life = 120;
        this.maxlife = this.life;
        this.defense = 6;
        this.attack = 16;
        this.classe = 'Strong Monster';
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 =  fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;
        this.log = logObject
    }

    start() {
        this.update();

        this.fighter1EL.querySelector('.attackBtn').addEventListener('click', () => {this.doAttack(this.fighter1, this.fighter2)})
        this.fighter2EL.querySelector('.attackBtn').addEventListener('click', () => {this.doAttack(this.fighter2, this.fighter1)})
    }

    update() {
        //fighter1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name}/${this.fighter1.classe} - ${this.fighter1.life.toFixed(2)} HP`;
        let fighter1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100
        this.fighter1EL.querySelector('.bar').style.width = `${fighter1Pct}%`

        //fighter2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let fighter2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100
        this.fighter2EL.querySelector('.bar').style.width = `${fighter2Pct}%`

        
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage(`\u2620\uFE0FJa está morto!`);
            return
            
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2)

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;
        let damage = actualAttack - actualDefense

        if(actualAttack > actualDefense) {
            attacked.life -= damage
            this.log.addMessage(`\u2694\uFE0F${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);

        } else {
            this.log.addMessage(`\uD83D\uDEE1\uFE0F	${attacked.name} conseguiu se defender!`);
        }


        this.update()
        
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.unshift(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = '';
        for (const message of this.list) {
            const listItem = document.createElement('li');
            listItem.textContent = message;
            this.listEl.appendChild(listItem);
        }
    }
}



