var inputName = document.getElementById('nameFlower')
var inputImage = document.getElementById('image')
var inputInfo = document.getElementById('info')
var submitData = document.getElementById('submitData')
var outputTable = document.getElementById('outputTableBody')


function addDataToTable(index) {
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    let img = document.createElement('img')
    cell.setAttribute('score',row)
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = inputName.value
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML= inputInfo.value
    row.appendChild(cell)

    cell = document.createElement('td')
    img.setAttribute("src",inputImage.value)
    img.classList.add("size")

    cell.appendChild(img)
    row.appendChild(cell)
    outputTable.appendChild(row)
   
}

var index = 4
submitData.addEventListener('click',(event)=> {
    addDataToTable(index++)
})

