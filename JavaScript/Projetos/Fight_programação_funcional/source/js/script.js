const character = createKnight('Brugge')
const monster = createLittleMonster()


stage.start(
character,
monster,
document.querySelector('.char'),
document.querySelector('.monster'))