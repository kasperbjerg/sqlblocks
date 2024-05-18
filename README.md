[![Deploy to Pages](https://github.com/kasperbjerg/sqlblocks/actions/workflows/deploy.yml/badge.svg)](https://github.com/kasperbjerg/sqlblocks/actions/workflows/deploy.yml)
# SQLBLOCKS
An enviroment for learning the basics of SQL by using block-based coding

The project is part of my master's thesis

## Live-demo
- [SQLBLOCKS](https://kasperbjerg.github.io/sqlblocks/)

## Technologies/frameworks/packages used
- [Vite](https://vitejs.dev/guide/) (with react+javascript template)
- [SQLite Wasm](https://www.npmjs.com/package/@sqlite.org/sqlite-wasm)
- [Blockly](https://www.npmjs.com/package/blockly)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
  
## How to run locally
If you want to run a copy of this project locally follow the instructions below

### Install Node.js and npm if you haven't already done this
Node.js actually includes npm, so just [follow these instrucions](https://nodejs.org/en/download)

### Install Git of you haven't already done this
[Follow these instructions](https://git-scm.com/downloads)

### Clone the repository
Open a terminal, navigate to the directory where you want to copy the repository an run
```
git clone https://github.com/kasperbjerg/sqlblocks.git
```
### Install dependencies
You need to download some extra stuff (for instance the Blockly library and the SQLite package).
First navigate to the newly created directory
```
cd sqlblocks
```

and then run
```
npm install
```
### Start the development server
In a terminal and in the same directory `sqlblocks` run
```
npm run dev
```
Then, copy the localhost address, open a browser and go the address

### Hello, World!
In the file `/src/routes/index.lazy.tsx` replace `Velkommen til SQLBLOCKS!` with `Hello, World!` and see the change in the browser

## Credits and acknoledgements

List of tutorials, videos, examples, repositories, etc., that has helped me in the process of building this project

- [Vite React App Deploy On GitHub | Step By Step](https://www.youtube.com/watch?v=XhoWXhyuW_I)
- [Setting up SQLite Wasm in main thread with Vite](https://github.com/sqlite/sqlite-wasm/tree/main?tab=readme-ov-file#in-the-main-thread-without-opfs)
- [Demo of integrating Blockly in React](https://github.com/google/blockly-samples/tree/master/examples/blockly-react)
- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [Setting up Prettier with Vite React App and VS Code](https://www.youtube.com/watch?v=SMbqi1HPprc)

## Contributing
Any contributions are greatly appreciated, whether it's pointing out a bug or suggesting a new feature by [creating a new issue](https://github.com/kasperbjerg/sqlblocks/issues/new) or if you feel like helping out by working on some of the [open issues](https://github.com/kasperbjerg/sqlblocks/issues) already created

If you want to contribute by working on the existing issues you should [fork the repository and make a pull request](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)

