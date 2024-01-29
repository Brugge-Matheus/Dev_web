const DefaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0,
}

const createKnight = (name) => {
    return {
        ...DefaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...DefaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 15,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...DefaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        defense: 2,
        attack: 4
    }
}

const createBigMonster = () => {
    return {
        ...DefaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1EL: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1EL, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 =  fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2El = fighter2El;

        this.fighter1EL.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))

        this.update();
    },

    update() {
        //fighter 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)}`
        let f1PCT = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1EL.querySelector('.bar').style.width = `${f1PCT}%`

        //fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)}`
        let f2PCT = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2PCT}%`
    },

    doAttack(attacking, attacked) {
      if(attacking.life <= 0 || attacked.life <= 0) {
        log.addMessage('Ja está morto!');

        return

      }

      const attackFactor = (Math.random() * 2).toFixed(2);
      const defenseFactor = (Math.random() * 2).toFixed(2);

      const actualAttack = attacking.attack * attackFactor;
      const actualDefense = attacked.defense * defenseFactor;

      if(actualAttack > actualDefense) {
        attacked.life -= actualAttack
        attacked.life = attacked.life < 0 ? 0 : attacked.life;
        log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} em ${attacked.name}`);

      } else {
        log.addMessage(`${attacked.name} se defendeu dos ataques!`);
      }

    this.update();
    },
}

const log = {
    list: [],

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    render() {
        const logEL = document.querySelector('.log');
        logEL.innerHTML = ''

        for(let i in this.list) {
            let li = document.createElement('li')
            li.innerHTML = this.list[i]
            logEL.appendChild(li)
        }
    }
}