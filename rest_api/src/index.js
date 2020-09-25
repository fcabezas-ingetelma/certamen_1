const express = require('express')
const bodyParser = require('body-parser')
const { response } = require('express')
const functions = require('./functions')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (request, response) {
    response.send('HOLA MUNDO DESDE API REST')
})

app.get('/:num1/:num2', (request, response) => {
    response.json({ result: functions.suma(request.params.num1, request.params.num2) })
}) // --> /5/3

app.post('/', (request, response) => {
    if (request.body.num1 && request.body.num2) {
        response.status(200).json({ result: functions.multiply(request.body.num1, request.body.num2) })
    } else {
        response.status(404).json({ error: 'Something is missing!!!' })
    }
})

app.listen(3001, function (){
    console.log('Server is running in port 3001')
})