const addBtn = document.querySelector("#add-btn");
const quantityBtn = document.querySelector("#quantity-btn");
const calcBtn = document.querySelector("#calc-btn");

const papeleria = 20000;
const carne = 8000;
const descuento = 20;

let quantity = 0;

addBtn.addEventListener("click", () => {
    //alert("mensaje");
    quantity = quantity + 1;

    let containerForm = document.querySelector("#container-form");

    let subjectGroup = document.createElement("div");
    subjectGroup.setAttribute("class", "subject-container d-flex flex-row justify-content-center mb-3")
    

    let name = document.createElement("input");
    let price = document.createElement("input");

    name.setAttribute("placeholder", "Nombre Materia");
    price.setAttribute("placeholder", "Precio");
    price.setAttribute("id", "subject"+quantity);
    price.setAttribute("class", "form-control ms-3 w-25 p-3");
    name.setAttribute("class", "form-control me-3 w-25 p-3");
    

    subjectGroup.insertBefore(price, subjectGroup.firstChild);
    subjectGroup.insertBefore(name, subjectGroup.lastChild);
    

    containerForm.insertBefore(subjectGroup, containerForm.lastChild);

    
    //name.setAttribute("id", "1");
    //subjectContainer.insertBefore(name, subjectContainer.lastChild);
    //document.appendChild(name);
    //document.body.appendChild(name);
})

/*quantityBtn.addEventListener("click", () => {
    console.log(quantity);
})*/

calcBtn.addEventListener("click", calcTotalPrice);

function calcTotalPrice()
{
    let totalSubject = 0;
    let priceSubject = 0;
    let subjectNumber = 0;
    let totalPrice = 0;

    for (let index = 1; index < quantity+1; index++) {
        
        priceSubject = Number(document.querySelector(`#subject${index}`).value);
        console.log(priceSubject);
        
        totalSubject = totalSubject + priceSubject;
        //console.log(`"#${index}"`);
        
    }

    totalPrice = (totalSubject - ((totalSubject * descuento) / 100) + (papeleria + carne));


    let pricesContainer = document.createElement("div");

    pricesContainer.setAttribute("class", "d-flex flex-row justify-content-center mb-3");


    let titleTotalSubject = document.createElement("h5");
    titleTotalSubject.setAttribute("class", "fw-bold");
    titleTotalSubject.innerHTML = "Precio Total:";

    let priceTotalSubject = document.createElement("p");
    priceTotalSubject.setAttribute("class", "lead");
    priceTotalSubject.innerHTML = "$" + totalPrice;

    pricesContainer.insertBefore(priceTotalSubject, pricesContainer.firstChild);
    pricesContainer.insertBefore(titleTotalSubject, pricesContainer.lastChild);

    
    

    document.body.appendChild(pricesContainer);



    //priceSubject = document.querySelector("#mate").value;
    //priceSubject = document.querySelector(`#${1}`).value;
    //priceSubject = document.querySelector(`#mate${1}`).value;
    //console.log(priceSubject);
    console.log(totalPrice);
}



