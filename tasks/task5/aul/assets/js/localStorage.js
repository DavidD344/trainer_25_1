const userData = {
  name: "David",
  age: 23,
  active:true
};

localStorage.setItem("userData", JSON.stringify(userData));

const userDataJson = localStorage.getItem("userData");

const userDataParse = JSON.parse(userDataJson);

console.log(userData,userDataJson,userDataParse);

localStorage.removeItem("userData");
