function generateRandomId() {
  return Math.random().toString(16).slice(2);
}

class User {
  constructor(name, age, course) {
    this.id = generateRandomId();
    this.name = name;
    this.age = age;
    this.course = course;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    this.name = newName;
  }
}

const userList = [];

// add remove update
const container = document.getElementById("root");
const buttonForAddUser = document.getElementById("buttonForAddUser");

buttonForAddUser.setAttribute("onclick", `addUser()`);
function renderList() {
  container.innerHTML = "";
  userList.map(({ id, name, age, course }) => {
    const box = document.createElement("div");
    const novoElemento = document.createElement("div");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Apagar";
    removeButton.setAttribute("onclick", `removeUser('${id}')`);
    novoElemento.classList.add("user_list");
    novoElemento.setAttribute("id", id);
    novoElemento.textContent = `${name}-${age}-${course}-${id}`;
    box.classList.add("box");
    box.appendChild(novoElemento);
    box.appendChild(removeButton);
    container.appendChild(box);
  });
}

function addUser() {
  const inputName = document.getElementById("inputName");
  const inputAge = document.getElementById("inputAge");
  const inputCourse = document.getElementById("inputCourse");

  const newUser = new User(
    inputName.value,
    Number(inputAge.value),
    inputCourse.value
  );
  inputName.value = "";
  inputAge.value = "";
  inputCourse.value = "";
  userList.push(newUser);
  renderList();
}

function removeUser(id) {
  let indexForRemove = undefined;
  userList.map((el, index) => {
    if (el.id == id) {
      console.log(id, el.id);
      indexForRemove = index;
    }
  });
  console.log(indexForRemove);

  if (indexForRemove === undefined) {
  } else {
    userList.splice(indexForRemove, 1);
    console.log("userList", userList);
    renderList();
  }
}
