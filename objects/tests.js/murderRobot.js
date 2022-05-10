// Composition
// game needs, a Dog that barks, a Cat that meow, they need to poop, then a robot that can drive and clean the poop, a murder robot that can drive and kill, then we need to create a Murder Robot Dog, that obviusly does not poop
// COMPOSITION IS, when you design your types around what they do instead of what they ARE
const Name = (state) => ({
  getName: () => state.name,
});
const barker = (state) => ({
  bark: () => console.log("woof, Im " + state.name),
});
const meower = (state) => ({
  meow: () => console.log("meoow, Im " + state.name),
});
const pooper = (state) => ({
  poop: () => console.log("Im a pooper, my name is " + state.name),
});
const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});
const killer = (state) => ({
  kill: (animal) => console.log(`${state.name} just killed ${animal}`),
});

const dog = (name) => {
  let state = {
    name,
  };

  return Object.assign({}, barker(state), pooper(state), Name(state));
};
const killerRobotDog = (name) => {
  let state = {
    name,
    position: 0,
    speed: 100,
  };
  return Object.assign({}, barker(state), driver(state), killer(state));
};

const odi = dog("Odi");
const auKiller = killerRobotDog("Au the Killer");

odi.bark();
auKiller.drive();
