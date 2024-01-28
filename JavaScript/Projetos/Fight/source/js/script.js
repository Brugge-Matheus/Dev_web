const char = new Sorcerer('\uD83E\uDDD9 Matheus')
const monster = new LittleMonster()

const log = new Log(document.querySelector('.log'))

const stage = new Stage(
    char, monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()