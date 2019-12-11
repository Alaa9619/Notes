// const validator=require('validator')
 //const str = getNotes()
//console.log(str)
//console.log(str)
const chalk=require('chalk')
const yargs =require('yargs')
const getNotes = require('./notes.js')
//Customize yargs version
yargs.version('1.1.0')
//Creat add command
yargs.command({
    command:'add',
    describe:'this command is to add note',
    handler: function(){
        console.log('Note is added')
    }
})
//Creat remove command
yargs.command({
    command:'remove',
    describe:'this command is to remove a note',
    handler:function(){
        console.log('Note is removed')
    }

})
//Creat list command
yargs.command({
    command:'list',
    describe:'this command is to list a note',
    handler:function(){
        console.log('Note is listed')
    }

})
//Creat read command
yargs.command({
    command:'read',
    describe:'this command is to read a note',
    handler:function(){
        console.log('Note is readed')
    }

})
//yargs.parse()
console.log(yargs.argv)