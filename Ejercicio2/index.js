const executeBtn = document.querySelector("#execute-btn");

executeBtn.addEventListener("click", () => {
    
    const n1 = Number(document.querySelector("#n1").value);
    const n2 = Number(document.querySelector("#n2").value);
    const n3 = Number(document.querySelector("#n3").value);
    const n4 = Number(document.querySelector("#n4").value);
    const counts = {};
    const numberArray = [n1, n2, n3, n4];

    numberArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    console.log(counts);
    console.log();

    const quantityNumbers = Object.keys(counts).length;

    if(quantityNumbers != '4')
    {
        alert("Nùmeros repetidos");
    }
    else{
        document.querySelector("#greater").innerHTML = Math.max(n1, n2, n3, n4);
        document.querySelector("#minor").innerHTML = Math.min(n1, n2, n3, n4);
    }
   
})