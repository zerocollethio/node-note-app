const fs = require('fs');
const { title } = require('process');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'used to add notes',
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: "body of the note",
            demandOption: true,
            type: 'string'
        }
    },


    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }




})

yargs.command(
    {
        command: 'remove',
        describe: 'used to remove notes',
        builder: {
            title: {
                describe: 'title of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNotes(argv.title);


        }



    }
)

yargs.command(
    {
        command: 'list',
        describe: 'used to list notes',
        handler() {
            notes.listNotes();
        }
    }
)

yargs.command({
    command: 'read',
    describe: 'used to read notes',
    builder: {
        title: {
            describe: 'needs title of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }

})
yargs.parse();