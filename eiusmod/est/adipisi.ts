interface Person {
  age: number;
}

function createPerson(age: number): Person {
  return { age };
}

const person = createPerson(24);
