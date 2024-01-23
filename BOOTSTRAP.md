# Bootstrap

Actions taken to bootstrap this project.

1. Setup vite project.

```
yarn create vite react-library-example
cd react-library-example
yarn
```

2. Add git repo.

```
git init
git add README.md
git commit -m "init"
git remote add origin git@github.com:garygause/react-library-example.git
git push -u origin main
```

3. Add to configuration.

Add author, description, license, git repo, etc.

```
npm init

or edit package.json
```

See package.json for contents.

4. Set build folder in package.json

```
"main": "./dist/react-library-example.umd.js",
  "module": "./dist/react-library-example.es.js",
  "exports": {
    ".": {
      "import": "./dist/react-library-example.es.js",
      "require": "./dist/react-library-example.umd.js"
    }
  },
```
