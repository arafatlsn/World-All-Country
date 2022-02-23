// function loadData(){
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => myFunction(data))
// }

// function myFunction(data){
//   console.log(data)
// };

function loadUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => catchName(data))
}

function catchName(data){
  const getUl = document.getElementById('catchUl');
  const getBtn = document.getElementById('loadUsersBtn');
  for(const dataMin of data){
    const makeLi = document.createElement('li');
    makeLi.innerText = `name: ${dataMin.name} email: ${dataMin.email}`;

    getUl.appendChild(makeLi);

  }
  // getBtn.setAttribute('disabled', true)
}
loadUsers()

// function getPosts(){
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => console.log(data))
// }