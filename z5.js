function makeUser(name, surname, group, age) {
  return {
    name,
    surname,
    group,
    age,
  };
}

let N = 3;
let Persons = [];

Persons[0] = makeUser("Паша", "Кузьмин", "24кд2222", "318284 (в криптосне)");
Persons[1] = makeUser("Максим", "Оволег", "42www0", "99");
Persons[2] = makeUser("Леня", "Воронин", "42www0", "29");

let is_found = false;

query = prompt("Введите строку поиска");

for (let i = 0; i < 3; i++) {
  if (
    Persons[i].name.toLowerCase().includes(query.toLowerCase()) ||
    Persons[i].surname.toLowerCase().includes(query.toLowerCase())
  ) {
    is_found = true;
    alert(JSON.stringify(Persons[i]));
    console.log(Persons[i]);
  }
}

if (!is_found) {
  alert("Пользователь не найден");
  console.log("Пользователь не найден");
}
