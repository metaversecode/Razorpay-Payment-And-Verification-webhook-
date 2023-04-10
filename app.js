const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id:'/////',
    key_secret: '////'
  });
///////MAIN 
const {validateWebhookSignature} = require('razorpay/dist/utils/razorpay-utils')


app.post("/paymentsysbinary", function(req, res){
  foouser = req.body.user;
  fooemail = req.body.user1;
  const iswallet = req.body.iswallet;
  if(foouser == "" || fooemail == "" || !foouser || !fooemail ){
    try{
      res.status(400).send("")
    }
    catch(error){
  
    }
    return
}

if(iswallet === true){
  aamo = req.body.amount; //// AMOUNT IS IN PAISE
  foocheckfn()
}
function foocheckfn() {
  orderr = ""
  if(aamo != ""){
  tao = aamo/100 ////////////Amount is in ruppee
  const options = {
    amount: aamo, // amount in paise (50000 paise = INR 500)
    currency: 'INR',
    payment_capture: 1
  }
  instance.orders.create(options, function(err, order) {
    if(err) {
      console.error(err);
    } else {
      res.status(200).send({
        key : CryptoJS.AES.encrypt(razorpayapi, "your pass").toString(),
        order_id : CryptoJS.AES.encrypt(order.id, "your pass").toString(),
        success : true
      });
      const jjust = order.id + "//"
      //set the orderid , user, amount in database to check later
      orderr = order.id;
    }
  });
}

}
 

})

app.post("your path" , (req,res) => {
  /////////Verify Signature///////
var user = ""
var emaila = ""
var tao = ""
var orderr = req.body.payload.payment.entity.order_id
var receiptid = req.body.payload.payment.entity.id
  const signature = req.headers['x-razorpay-signature'];
  const webhookSecret = 'XXXXXXXXXXXXXXXXXXXX';
  const webhookbody = req.body
  console.log(signature)
  const a = validateWebhookSignature(JSON.stringify(webhookbody), signature, webhookSecret);
  res.status(200).json({
    success : true
   })
if(a === true){
  const jjust = req.body.payload.payment.entity.order_id + "//"
  //Database Work here
    user = snapshot.val().user
    emaila = snapshot.val().email
    if(//database node exists === true){
      if(amountinpaise == req.body.payload.payment.entity.amount - req.body.payload.payment.entity.fee){
        tao = (req.body.payload.payment.entity.amount - req.body.payload.payment.entity.fee)/100
        const now = moment();
        const formattedDate = now.format('D MMMM YYYY');
        const formattedTime = now.format('h:mma');
        const formattedDateTime = `${formattedDate} at ${formattedTime}`;
        // fetch amount and do database here..
        
        //database work here
          .then(function(){
          const dd = req.body.payload.payment.entity.order_id + "//"
        //remove node from db


          /////////////Mail..........//
          let options2 = {
            url: 'https://api.elasticemail.com/v2/email/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                'apikey': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                'to': emaila,
                'From' : "",
                'subject': 'Payment Success',
                'Body': ...
            }
          };
          request(options2, function(error, response, body) {
            console.log(body);
          });
          console.log('Order', orderr, 'has been successfully paid wallet');
          
          
          //////////////End................../

        })
      }
    }
  })
}


  /////////////End///////////

})
