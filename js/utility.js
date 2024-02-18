function setSelectedSitWithId(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;    
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add("common-bg")
    element.classList.add("text-white")
}

function increaseValue(elementId) {
    const element = document.getElementById(elementId).innerText;
    const convertElement = parseInt(element)
    const sumOfElement = convertElement + 1;
    setSelectedSitWithId(elementId, sumOfElement)
}
function decreaseValue(elementId) {
    const element = document.getElementById(elementId).innerText;
    const convertElement = parseInt(element)
    const sumOfElement = convertElement - 1;
    setSelectedSitWithId(elementId, sumOfElement)
}
function totalCost(elementId) {
    const element = elementId;
    const convertElement = parseInt(element)
    const multiplyOfElement = convertElement * 550;
    setSelectedSitWithId("total-price", multiplyOfElement)
}
function grandTotal(elementId) {
    const element = elementId;
    const convertElement = parseInt(element)
    const multiplyOfElement = convertElement * 550;
    setSelectedSitWithId("grand-price", multiplyOfElement)
}

function discountedGrandTotal(elementId) {
    const element = elementId;
    const convertElement = parseInt(element)
    setSelectedSitWithId("grand-price", convertElement)
}