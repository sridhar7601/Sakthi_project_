function functiontocreate() {
    location.href = "http://127.0.0.1:5500/components/breed_1.html";

    creating();

}

function cardDisplay() {
    location.href = "http://127.0.0.1:5500/components/gettingInputForm/gettingInputPage.html"
        // var data = [
        //     ['card1'],
        //     ['card1'],
        //     ['card77'],
        //     ['card1'],
        //     ['card1'],
        //     ['card1'],
        //     ['card1'],
        //     ['card1']
        // ]
        // const root = document.createElement('div')
        // root.className = "bodyofcard";
        // const card1 = document.createElement('div')
        // card1.className = "card1";
        // root.appendChild(card1);
        // card1.innerHTML = '<p>dd</p>'
        // document.body.appendChild(root)
}

function creating() {
    let value = localStorage["key"]
    console.log(value)
        //const root = document.getElementById('new_div')
        //root.className = "bodyofcard";
        //const card1 = document.createElement('div')
        //let doc = 
    document.getElementById('card').innerText = value;
    //console.log(doc);
    //card1.className = "card1";

    //doc.innerText = "gg";
    // root.appendChild(card1);
    // document.body.appendChild(card1)
}

function gettingInput() {
    var tag, vaccine, Date;
    tag = document.getElementById("tagnum").value
    console.log(tag);
    vaccine = document.getElementById("Vaccine").value
    console.log(vaccine);
    Date = document.getElementById("Vacdate").value
    console.log(Date);
}