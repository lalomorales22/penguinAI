#!/usr/bin/env node

// Simple joke management CLI for penguinAI
// Usage: node scripts/jokes.js [command]
// Commands:
//   list           - list built-in jokes
//   add "setup" "punchline" [tag]
//   prompt         - generate a random joke prompt
//   help           - show usage

const fs = require('fs');
const path = require('path');

const libraryPath = path.join(__dirname, '..', 'resources', 'jokes', 'library.json');
const notebookPath = path.join(__dirname, '..', 'resources', 'jokes', 'notebook.json');

function ensureNotebook() {
    if (!fs.existsSync(notebookPath)) {
        fs.writeFileSync(notebookPath, '[]', 'utf8');
    }
}

function listJokes() {
    const library = JSON.parse(fs.readFileSync(libraryPath, 'utf8'));
    const notebook = fs.existsSync(notebookPath)
        ? JSON.parse(fs.readFileSync(notebookPath, 'utf8'))
        : [];
    [...library, ...notebook].forEach((j, i) => {
        console.log(`${i + 1}. ${j.setup} - ${j.punchline}`);
    });
}

function addJoke(setup, punchline, tag) {
    ensureNotebook();
    const notebook = JSON.parse(fs.readFileSync(notebookPath, 'utf8'));
    const entry = { setup, punchline };
    if (tag) entry.tag = tag;
    notebook.push(entry);
    fs.writeFileSync(notebookPath, JSON.stringify(notebook, null, 2));
    console.log('Added joke to notebook.');
}

function randomPrompt() {
    const setups = [
        'A penguin walks into a bar...',
        'Two keyboards meet on a desk...',
        'An AI and a comedian start chatting...'
    ];
    const prompt = setups[Math.floor(Math.random() * setups.length)];
    console.log(prompt);
}

function help() {
    console.log(`Usage: node jokes.js [command]\n` +
        `Commands:\n` +
        `  list                 List jokes from library and notebook\n` +
        `  add "setup" "punchline" [tag]   Add a joke to your notebook\n` +
        `  prompt               Get a random joke prompt\n` +
        `  help                 Show this help message`);
}

const [,, cmd, ...args] = process.argv;

switch (cmd) {
    case 'list':
        listJokes();
        break;
    case 'add':
        if (args.length < 2) {
            console.error('Usage: add "setup" "punchline" [tag]');
            process.exit(1);
        }
        addJoke(args[0], args[1], args[2]);
        break;
    case 'prompt':
        randomPrompt();
        break;
    default:
        help();
}
