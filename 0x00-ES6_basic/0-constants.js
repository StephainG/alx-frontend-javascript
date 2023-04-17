export function taskFirst() {
  var task = 'I would choose const anyday';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But maybe let';
  combination += getLast();

  return combination;
}