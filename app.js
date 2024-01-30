
let userData = JSON.parse(localStorage.getItem("userData"))
console.log(userData)
let firstName = document.getElementById("name")
let lastName = document.getElementById("last-name")
let country = document.getElementById("country")
let number = document.getElementById("number")
let state = document.getElementById("state")
let city = document.getElementById("city")
let village = document.getElementById("village")
if (userData) {
console.log("data is already saved")
console.log("userData", userData)
firstName.innerText = userData.firstName
lastName.innerText = userData.lastName
country.innerText = userData.country
state.innerText = userData.state
city.innerText = userData.city
village.innerText = userData.village
number.innerText = userData.number
} else {
    const firstName = prompt("Enter first name")
    const lastName = prompt("Enter last name")
    const number = prompt("Enter number")
    const state = prompt("Enter state")
    const city = prompt("Enter city")
    const village = prompt("Enter village")
    const country = prompt("Enter country")
  

    const data = {
        "firstName": firstName,
    "lastName":lastName,
        "number": number,
        "state": state,
        "city": city,
        "village": village,
        "country":country


    }
    firstName.innerText = name
    localStorage.setItem("userData", JSON.stringify(data))
}
