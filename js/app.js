const allbtn = document.getElementsByClassName("sit-btn")
const newArray = []
for (const btn of allbtn) {
    btn.addEventListener("click", function (e) {
        const click = e.target.innerText;
        const clicked = e.target;
        clicked.setAttribute("disabled", true)
        newArray.push(click)
        increaseValue("selected-sit");
        decreaseValue("available-sit")
        const selectedSit = document.getElementById("selected-sit").innerText;
        totalCost(selectedSit);
        grandTotal(selectedSit)
        const parentElement = document.getElementById("parent-container");
        const li = document.createElement("p");
        li.innerText = click;
        const li1 = document.createElement("p");
        li1.innerText = "economic"
        const li2 = document.createElement("p");
        li2.innerText = 550;
        parentElement.appendChild(li);
        parentElement.appendChild(li1);
        parentElement.appendChild(li2);
        if (newArray.length === 4) {
            document.getElementById("coupon-input").addEventListener("keyup", function handleInput(event) {
                let text = event.target.value;
                const discountBtn = document.getElementById("discount-btn");
                if (text === "NEW15" || text === "Couple 20") {
                    discountBtn.removeAttribute("disabled");
                    const grandTotalText = document.getElementById("grand-price").innerText;
                    const grandTotalPrice = parseInt(grandTotalText)
                    if (text === "NEW15") {
                        const discountedPrice = parseInt(grandTotalPrice - (grandTotalPrice * 15) / 100);
                        discountedGrandTotal(discountedPrice)
                    }
                    else if (text === "Couple 20") {
                        const discountedPrice = parseInt(grandTotalPrice - (grandTotalPrice * 20) / 100);
                        discountedGrandTotal(discountedPrice)
                    }
                } else {
                    discountBtn.setAttribute("disabled", true);
                }
                return text;
            })
            document.getElementById("discount-btn").addEventListener("click", function () {
                const discountDiv = document.getElementById("discount-field");
                discountDiv.style.display = "none"
            })
        } else if (newArray.length >= 5) {
            document.getElementById("coupon-input").addEventListener("keyup", function handleInput(event) {
                let text = event.target.value;
                const discountBtn = document.getElementById("discount-btn");
                if (text === "NEW15" || text === "Couple 20") {
                    discountBtn.removeAttribute("disabled");
                    const grandTotalText = document.getElementById("grand-price").innerText;
                    const grandTotalPrice = parseInt(grandTotalText)
                    if (text === "NEW15") {
                        discountBtn.setAttribute("disabled", true);
                    }
                    else if (text === "Couple 20") {
                        discountBtn.setAttribute("disabled", true);
                    }
                } else {
                    discountBtn.setAttribute("disabled", true);
                }
                return text;
            })
        }
    })
}


