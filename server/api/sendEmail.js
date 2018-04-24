const router = require('express').Router();
module.exports = router;

/*

var mandrill = require('node-mandrill')('<your API Key>');

function sendEmail ( _name, _email, _subject, _message) {
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: 'noreply@yourdomain.com',
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
}

router.post('/', (req, res, next) => {
  const _name = req.body.name;
  const _email = req.body.email;
  const _subject = 'D&D Wine and Liquor Order Confirmation';
  const _message = 'Thank you for your order!';
  sendEmail( _name, _email, _subject, _message );
});

*/
