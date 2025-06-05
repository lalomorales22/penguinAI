# penguinAI - The Joke Assistant

penguinAI is a playful spin on the original Code - OSS project. Instead of a full-featured code editor, this fork reimagines the application as a writing and joke assistant. The goal is to deliver lighthearted humor and writing prompts rather than development tools.

This repository begins from the open source [Code - OSS](https://github.com/microsoft/vscode) code base under the MIT license. The product has been rebranded for entertainment purposes and does not ship the coding features found in Visual Studio Code.

## What does penguinAI do?

* Offers joke suggestions and humorous one-liners.
* Provides prompts to help spark creative writing.
* Keeps the interface simple and fun – no compilers or debuggers here!

## Getting Started

Clone the repository and run the application using the existing build scripts. The underlying framework is still Code - OSS, so standard build instructions apply. However, expect a humorous twist instead of development workflows.

Contributions focused on jokes, puns, and witty content are welcome.

### Joke CLI

Use the simple CLI in `scripts/jokes.js` to explore or add jokes from the
command line:

```bash
node scripts/jokes.js list        # show built-in and saved jokes
node scripts/jokes.js add "Setup" "Punchline" [tag]
node scripts/jokes.js prompt      # get a random joke prompt
```

Jokes you add through the CLI are stored locally in
`resources/jokes/notebook.json`. This file is ignored by git so your
personal joke collection stays private by default.

## Feature Requests

Curious about where penguinAI is headed? Check out the
[feature request list](docs/FEATURE_REQUESTS.md) for a roadmap of comedy-focused
improvements we're considering.

## License

penguinAI inherits the [MIT](LICENSE.txt) license from Code - OSS.
