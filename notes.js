const fs= require('fs') //write defensive code in order to avoid crashing app (use try and catch)
const chalk =require('chalk')
const addNote= (title, body) => {
    const notes = loadNote()
    //const duplicateNotes=notes.filter((note) => note.title === title )//to avoid title duplication //callback
         //filter the array based upon the function taken  
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
    
        })
        saveNote(notes)
        console.log(chalk.green.inverse('New unique note is added'))

    }else{
        console.log(chalk.red.inverse('Sorry note title is taken'))
    }
}
const saveNote= (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNote= () => {
    try{
        const dataBuffer=fs.readFileSync('notes.json') // if the file doesn't exist it produces an error 
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)

    }catch(e){
        return [] // load an empty array if there is no file named (notes.json) exists 

    }
  
}
const removeNote = (title) =>{
    const notes = loadNote()
    const keept =notes.filter((note) => note.title !== title) //to avoid title duplication //callback
     //filter the array based upon the function taken  

    if(keept.length < notes.length){
        console.log(chalk.green.inverse('Note is removed'))
        saveNote(keept)
    }else{
        console.log(chalk.red.inverse('No note found !'))
    }
}
const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.green.inverse('Your notes are'))
    notes.forEach(note => {
        console.log(note.title)
        
    })

}
const readNote = (title) => {
    const notes=loadNote()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse(note.title + ' ---> '+note.body))
    
    }else{
        console.log(chalk.red.inverse('ERROR there is no note with this title'))
    }


}
//export the methodes
module.exports= {
    addNote:addNote, 
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}