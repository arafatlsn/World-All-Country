function getApiPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => makeApiPosts(data))
}
getApiPosts()

function makeApiPosts(posts){
const catchParentDiv = document.getElementById('parent-div');
  for(const post of posts){
    const makeChildDiv = document.createElement('div');

    makeChildDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    makeChildDiv.firstElementChild.classList.add('title-class');

    catchParentDiv.appendChild(makeChildDiv);
  }

}