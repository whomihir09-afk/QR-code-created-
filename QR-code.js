const qrprint = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");
console.log(qrprint , qrimg , qrbutton);

qrbutton.addEventListener("click" , () =>{
    const inputval = qrprint.value;
    console.log(inputval)

    if(inputval == ""){
        alert("please enter a valid URL");
        return;
    }
    else{
            qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`;
            arimg.alt = `QR code for ${inputval}`
    }
})