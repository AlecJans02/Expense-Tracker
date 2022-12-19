let paymentMethod = document.getElementById("Payment");
let paymentDate = document.getElementById("Date");
let paymentName = document.getElementById("Name");
let paymentAmount = document.getElementById("Amount");
let form = document.getElementById("new-form")
const tableBody = document.getElementById("tableBody");


function createExpense (data) {
    var newRow = tableBody.insertRow(-1);
    var newName = newRow
    .insertCell()
    .appendChild(document.createTextNode(data.newName));
    var newPayment = newRow
    .insertCell()
    .appendChild(document.createTextNode(data.newPayment));
    var newAmount = newRow
    .insertCell()
    .appendChild(document.createTextNode(data.newAmount));
    var newDate = newRow
    .insertCell()
    .appendChild(document.createTextNode(data.newDate));
}

function addExpense() {
    if(paymentMethod.value === '' || paymentDate.value.toString() === '' || paymentName.value === '' || paymentAmount.value === '') {
        alert("Please enter info into the input feilds :) ");
        return false
    } else {
        const newData = {
            newName: paymentName.value,
            newPayment: paymentMethod.value,
            newAmount: paymentAmount.value,
            newDate: paymentDate.value,
        }
        createExpense(newData);
        form.reset();
    }
    
}

function dataSaver (dataObj) {
    const dataSet = dataStorageHelper()
    dataSet.push(dataObj)
    localStorage.setItem('dataSet', JSON.stringify(dataSet))
}


document.getElementById("Button").addEventListener("click", addExpense);

