const qr = require('qrcode');

let data = {
    id : 1,
    name : "Esther",
    email: "estherkdj@gmail.com"
}

let strData = JSON.stringify(data);

qr.toString(strData, {type: 'terminal'},
function(err, code) {
    if (err) {
        return console.log('Il y une erreur ' + err);

        console.log(code)
    }
});

qr.toDataURL(strData, function(err, code){
    if(err){
        return console.log("Second erro occured " + err);
    }
    console.log(code);
})
