const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNots();
    const duplicationcheak = notes.find((note) => note.title === title)

    if (!duplicationcheak) {
        notes.push({
            title: title,
            body: body

        })
        saveNotes(notes);
        console.log("adding note sucssesfull");

    } else {
        console.log("title already exists");
    }

}

const saveNotes = (note) => {
    const dataJSON = JSON.stringify(note);
    fs.writeFileSync("notes.json", dataJSON);


}

const loadNots = () => {
    try {
        const databuffer = fs.readFileSync('notes.json');
        const dataJSON = databuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }


}

const removeNotes = (title) => {
    const notes = loadNots();
    const dc = notes.filter((note) => note.title !== title)
    if (dc.length !== 0) {
        console.log(chalk.bgRed.black("no notes are removed"));
    } else {
        saveNotes(dc);
        console.log(chalk.bgGreen.black("notes are removed"));
    }



}

const listNotes = () => {
    const notes = loadNots();
    console.log(chalk.green.inverse('titles'))
    notes.forEach(element => {
        console.log(element.title);
    });

}

const readNotes = (title) => {
    const notes = loadNots();
    const dc = notes.find((note) => note.title === title);
    if (dc) {
        console.log(chalk.green('title  :') + dc.title);
        console.log(dc.body);
    } else {
        console.log(chalk.red("no notes found"));
    }
}
module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}