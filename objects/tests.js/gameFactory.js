// Organizing with Factory funcitons
// For example in this game example, we encapsulate all of the things that the player can do(functions), and only a few like the player name are public(can be modified), the one that should not be modifie are private functions.

const player = (name, level) => {
  let health = level * 2; // Inicial Healt is 2 times the level
  const getLevel = () => level;
  const getName = () => name;
  const getHealt = () => console.log(health);
  const die = () => {
    // dead.
  };
  const damage = (x) => {
    health -= x;
    if (health < 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName, getHealt };
};
const jimmie = player("Jimmie", 15);
const badGuy = player("Jeff", 10);
badGuy.getHealt();
jimmie.attack(badGuy);
badGuy.getHealt();
