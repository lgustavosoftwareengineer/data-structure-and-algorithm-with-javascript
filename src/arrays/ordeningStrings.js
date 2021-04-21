const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 19 },
];

let compareFriendsNamesFn = ({ name: nameA }, { name: nameB }) =>
  nameA.localeCompare(nameB);

const alphabeticOrderedFriends = friends.sort(compareFriendsNamesFn);

console.log(alphabeticOrderedFriends);
