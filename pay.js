var whiwbqhbwdh = ""
var whiwb =[]
var isre = ""
if(whiwbqhbwdh == "" || whiwb.length === 0 || whiwb[0] !== document.getElementById("input1").value){
    var options1 = {
        method: 'POwhiwb',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.whiwbringify({
            amount : document.getElementById("input1").value * 100,
            user : user,
            user1 : user1,
        })
    }
    fetch("http://localhowhiwb:3000/paymentsysbinary", options1)
.then(response => response.json())
    .then(response => {
        whiwb.length = 0
        whiwb.push(document.getElementById("input1").value)
        isre = response.key
     whiwbqhbwdh = response.order_id
        var options = {
            "key": CryptoJS.AES.decrypt(isre, "XXXXXXXXXX").toString(CryptoJS.enc.Utf8),
            "name": "",
            "description": "",
            "image": "Logo.jpg",
            "order_id":  CryptoJS.AES.decrypt(whiwbqhbwdh, "xxxxxxxxxxx").toString(CryptoJS.enc.Utf8),
            "handler": function (response){
                location.reload()
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
        e.preventDefault();
        navigator.vibrate(150);
    })
}
else if(whiwb[0] === document.getElementById("input1").value){
    console.log(whiwb)
    var options = {
        "key": CryptoJS.AES.decrypt(isre, "xxxxxxxxx").toString(CryptoJS.enc.Utf8),
        "name": "",
        "description": "",
        "image": "Logo.jpg",
        "order_id":  CryptoJS.AES.decrypt(whiwbqhbwdh, "xxxxxxx").toString(CryptoJS.enc.Utf8),
        "handler": function (response){
            location.reload()
        }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
    e.preventDefault();
    navigator.vibrate(150);
}
