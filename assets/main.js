function calcTip(){
    let billCount = billInput.value;
    if (isNaN(billCount || billCount.trim === "") ) {
        alert("please enter the bill ");
    }else{
        console.log(billCount);
    }

    let peopleCount = peopleInput.value;
    if (isNaN(peopleCount || peopleCount.trim() === "")) {
        alert("please enter the people numrber");
    }else{
        console.log(peopleCount);
    }

    let customCount = customInput.value;
    if (isNaN(customCount) || customCount.trim === "") {
        alert("please enter the percent numrber");
    }else{
        console.log(customCount);
    }

    let tipPercente = (billCount * customCount) / 100;
    console.log("kisi basi"+tipPercente);

    tipPerPerson.innerHTML = `<p>$${tipPercente}</p>`;

    let totalPerson = tipPercente * peopleCount;
    totalPercent.innerHTML = `<p>$${totalPerson}</p>`;
}

function resetNumbers(){
    billInput.value = ""
    peopleInput.value = ""
    customInput.value = ""
    tipPerPerson.innerHTML = `<p> $0 </p>`;
    totalPercent.innerHTML = `<p> $0 </p>`;
    // alert("buton calisiyor");
}

peopleInput.addEventListener('submit',calcTip)