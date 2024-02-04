let dataUz = {}
let currentDate = new Date();

HTMLFormElement.prototype.fillIn = function (dict) {
  for (let key in dict) {
    this[key].value = dict[key]
  }
}

loadUnit()
currentDateFill()
yesterdayDateFill()

form.onsubmit = saveUnit

function saveUnit() {
  let formData = new FormData(form)
  dataUz = Object.fromEntries(formData)
  localStorage.dataUz = JSON.stringify(dataUz)
  location.reload()
}

async function loadUnit() {
  form.fillIn(JSON.parse(localStorage.dataUz))

  if(form.secondname.value) {
    secondname.innerText = form.secondname.value
  }

  if(form.firstname.value) {
    firstname.innerText = form.firstname.value
  }

  if(form.departure.value) {
    departure.innerText = form.departure.value
  }

  if(form.destination.value) {
    destination.innerText = form.destination.value
  } 

  // if(form.departureTime.value) {
  //   departureTime.innerText = form.departureTime.value
  // }
  
  // if(form.destinationTime.value) {
  //   destinationTime.innerText = form.destinationTime.value
  // }
    
  if(form.orderTime.value) {
    orderTime.innerText = form.orderTime.value
  }

  if(form.price.value) {
    price.innerText = form.price.value
  }

  if(form.carriageId.value) {
    carriageId.innerText = form.carriageId.value
  }

  if(form.trainId.value) {
    trainId.innerText = form.trainId.value
  }

  if(form.placeNumber.value) {
    placeNumber.innerText = form.placeNumber.value
  }

  commonPrice.innerText = +form.price.value + 12
  
}

closePanel.onclick = closeAdminPanel
openPanel.ondblclick = openAdminPanel

function closeAdminPanel() {
  adminPanel.hidden = true
}

function openAdminPanel() {
  if (adminPanel.hidden == true) {
    adminPanel.hidden = false
    console.log('open')
  } else {
    adminPanel.hidden = true
  }
}


function currentDateFill() {
  let day = String(currentDate.getDate()).padStart(2, "0");
  let month = String(currentDate.getMonth() + 1).padStart(2, "0");
  let year = currentDate.getFullYear();
  
  let todayDate = day + "." + month + "." + year;

  currentDay.innerText = todayDate

}

function yesterdayDateFill() {
  currentDate.setDate(currentDate.getDate() - 1);

  let day = String(currentDate.getDate()).padStart(2, "0");
  let month = String(currentDate.getMonth() + 1).padStart(2, "0");
  let year = currentDate.getFullYear();

  let formattedDate = day + "." + month + "." + year;
  
  yestardeyDate.innerText = formattedDate
}


