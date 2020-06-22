const express = require('express')
const emails = require('./emails')
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express()
app.use(cors())
const port = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
let startNumber = 0;
let kolicina = 50;
let end = 0;




app.route('/').get((req, res) => {

})






app.post('/emailreq', (req, res) => {
    let tempStart = 0
    kolicina = Number(req.body.kolicina)
    end = Number(req.body.kolicina)
    startNumber = req.body.start

    let emailsForSend = [];
    for (let index = startNumber; index < kolicina; index ++) {
        emailsForSend.push(emails.emails[index])
        tempStart=index
    }
    res.send({emailsForSend, tempStart})
    startNumber = tempStart + 1
    kolicina = kolicina + tempStart
});





app.get('/next', (req, res) => {
    let tempStart = 0
    let emailsForSend = [];

    for (let index = startNumber; index < kolicina; index ++) {
        emailsForSend.push(emails.emails[index])
        tempStart=index
    }
    
    res.send({emailsForSend, tempStart})
    startNumber = tempStart + 1
    kolicina = end + startNumber

});



app.listen(port, () => {
    console.log(`port je ${port}`)
})