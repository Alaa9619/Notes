const chalk=require('chalk')
const yargs =require('yargs')
const notes = require('./notes.js')
//Customize yargs version
yargs.version('1.1.0')
//Creat add command
yargs.command({
    command:'add',
    describe:'this command is to add note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true ,//required (if you don't add a Note Title) you will get an error
            type: 'string' // to ensure that the type is a string not a bool type 
            //make further validation to ensure that it is not empty
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type: 'string'

        }

    },
    handler (argv) {
       // console.log('Note is added')
       //console.log('title'+argv.title)
       //console.log('body'+argv.body)
       notes.addNote(argv.title,argv.body)

    }
})
//Creat remove command
yargs.command({
    command:'remove',
    describe:'this command is to remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true ,//required (if you don't add a Note Title) you will get an error
            type: 'string' // to ensure that the type is a string not a bool type 
            //make further validation to ensure that it is not empty
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
        
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
    handler () {
        console.log('Note is readed')
    }

})
yargs.parse()
//console.log(yargs.argv)