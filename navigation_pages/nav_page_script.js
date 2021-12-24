function MilkRegFunction() {
    var date, shiftM, shiftE, tag, quantity, snf;
    date = document.getElementById("MilkRegdate").value
    shiftM = document.getElementById("MilkRegShiftM")
    shiftE = document.getElementById("MilkRegShiftE")
    console.log(date);
    if (shiftM.checked == true) {
        console.log(shiftM.value)
    } else if (shiftE.checked == true) {
        console.log(shiftE.value)
    } else {
        console.log("Nothing is selected")
    }
    tag = document.getElementById("MilkRegCow").value
    console.log(tag);
    quantity = document.getElementById("MilkRegquantity").value
    console.log(quantity);
    fat = document.getElementById("MilkRegFat").value
    console.log(fat);
    snf = document.getElementById("MilkRegsnf").value
    console.log(snf);
}