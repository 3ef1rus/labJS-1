function checkAge(age){
  return (age>18)? true : confirm('Родители разрешили?');
}

let age = prompt('Сколько вам лет ?');
checkAge(age);