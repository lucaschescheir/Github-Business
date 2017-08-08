console.log("Im working");
let profile = document.querySelector(".profile");
let bio = document.querySelector(".bio");
let picture = document.querySelector(".picture")
let req = new XMLHttpRequest();
req.addEventListener("load", displayList);
req.open("GET", "https://api.github.com/users/lucaschescheir");
req.send();

function displayList () {
  let data = JSON.parse(this.responseText);
  let list = '';
  console.log(data.avatar_url);
  console.log(data);
story = `<p>${data.bio}</p>`
pic = `<img url=${data.avatar_url} alt="profile picture">`
  list = `
  <li>Name: ${data.name}</li>
  <li>GitHub URL ${data.html_url}</li>
  <li>Email: ${data.email}</li>
  <li>Company: ${data.company}</li>
  <li>Website: ${data.blog}</li>`;
  picture.innerHTML = pic;
  bio.innerHTML = story;
  profile.innerHTML = list;
}
