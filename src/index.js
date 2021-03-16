const express = require('express');
const hbs = require('hbs') ;
const path = require('path');
const Message = require('./models/message');

require('dotenv').config();

process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});

require('./db/mongoose');
const publicDirectory = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT;

app.use(express.static(publicDirectory));

hbs.registerPartials(publicDirectory + '/views/partials');
app.set('views', path.join(publicDirectory, '/views'));
app.set('view engine', 'hbs');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/messages', async (req, res) => {
    const allMessages = await Message.find({});


    res.render('messages', {messages: allMessages});
});

app.post('/message', async (req, res) => {
    
    try{
        const message = new Message(req.body);
        await message.save();
        return res.status(201).send();
    }
    catch(e){
        return res.status(500).send();
    }
    
});


app.listen(port, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});