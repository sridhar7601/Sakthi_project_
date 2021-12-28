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

function MReportFunction() {
    var tag, fromDate, toDate, shiftM, shiftE;
    tag = document.getElementById("MReportcow").value
    console.log(tag);
    fromDate = document.getElementById("MReportdate").value
    console.log(fromDate);
    toDate = document.getElementById("MReportdate1").value
    console.log(toDate);
    shiftM = document.getElementById("MRshiftM")
    shiftE = document.getElementById("MRshiftE")
    if (shiftM.checked == true) {
        console.log(shiftM.value)
    } else if (shiftE.checked == true) {
        console.log(shiftE.value)
    } else {
        console.log("Nothing is selected")
    }
}

function InsemFunction() {
    var tag, Date, ActionB, ActionS;
    tag = document.getElementById("Insemcow").value
    console.log(tag);
    Date = document.getElementById("Insemdate").value
    console.log(Date);
    ActionB = document.getElementById("InsemActionB")
    ActionS = document.getElementById("InsemActionS")
    if (ActionB.checked == true) {
        console.log(ActionB.value)
    } else if (ActionS.checked == true) {
        console.log(ActionS.value)
    } else {
        console.log("Nothing is selected")
    }
}

function CalvFunction() {
    var tag, Date, Male, Female, AlarmDate, checkBox;
    tag = document.getElementById("Calvcow").value
    console.log(tag);
    Date = document.getElementById("Calvdate").value
    console.log(Date);
    Male = document.getElementById("Calv")
    Female = document.getElementById("Calv1")
    if (Male.checked == true) {
        console.log(Male.value)
    } else if (Female.checked == true) {
        console.log(Female.value)
    } else {
        console.log("Nothing is selected")
    }
    AlarmDate = document.getElementById("CalvAlarm").value
    console.log(AlarmDate);
    //alarm checkbox
    // checkBox = document.getElementById("CalvalarmCheck");
    // if (checkBox.checked == true) {
    //     console.log("Checked")
    // } else {
    //     console.log("Not checked")
    // }
}

function BreedReportFunction() {
    var tag, Date;
    tag = document.getElementById("BRcow").value
    console.log(tag);
    Date = document.getElementById("BRdate").value
    console.log(Date);
}

function TreatmentFunction() {
    var tag, med, Date, diagnosis, advise;
    tag = document.getElementById("Treatcow").value
    console.log(tag);
    med = document.getElementById("Medicine").value
    console.log(med);
    diagnosis = document.getElementById("Diagnosis").value
    console.log(diagnosis);
    Date = document.getElementById("Treatdate").value
    console.log(Date);
    advise = document.getElementById("Medical Advise").value
    console.log(advise);
}

function VaccineFunction() {
    var tag, vaccine, Date, Alarm;
    tag = document.getElementById("Vaccinecow").value
    console.log(tag);
    vaccine = document.getElementById("Vaccine").value
    console.log(vaccine);
    Date = document.getElementById("Vacdate").value
    console.log(Date);
    Alarm = document.getElementById("vacalarm").value
    console.log(Alarm);
    //alarm checkbox
}

function DewormFunction() {
    var tag, dewormer, Date, Alarm;
    tag = document.getElementById("Dewormcow").value
    console.log(tag);
    dewormer = document.getElementById("Dewormer").value
    console.log(dewormer);
    quantity = document.getElementById("Dquantity").value
    console.log(quantity);
    Date = document.getElementById("dewdate").value
    console.log(Date);
    Alarm = document.getElementById("dewalarm").value
    console.log(Alarm);
    //alarm checkbox
}
