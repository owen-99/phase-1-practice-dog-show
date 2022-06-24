document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then (dogs => dogs.forEach(renderDogs))

})

     fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then (dogs => dogs.forEach(renderDogs))


function renderDogs (dog) {
    let tableBody = document.querySelector("#table-body")
    let newRow = document.createElement('tr')
    let tableDataName = document.createElement('td')
    let tableDataBreed = document.createElement('td')
    let tableDataGender = document.createElement('td')
    let editDog = document.createElement('button')

    tableBody.append(newRow)
    tableDataName.innerText = dog.name
    newRow.append(tableDataName)
    tableDataBreed.textContent = dog.breed
    newRow.append(tableDataBreed)

    tableDataGender.textContent = dog.sex
    newRow.append(tableDataGender)

    editDog.textContent = "Edit Dog"
    newRow.append(editDog);

    let newForm = document.getElementById('dog-form')

    editDog.addEventListener('click', (e) =>{
        console.log(dog.id)
        newForm.breed.value = dog.breed
        newForm.name.value = dog.name
        newForm.sex.value = dog.sex
    })
}

function handleToDo (e) {
    console.log(e)

} 