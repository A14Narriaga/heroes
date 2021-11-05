## Angular CLI
```
npm install -g @angular/cli
```

## Start aplication
```
npx ng new <project_name>
```

## Run aplication
```
npx ng serve -o // Open browser
npx ng serve
```

## Angular CLI
```
npx ng g c components/<name>
npx ng g s services/<name>/<name>
npx ng g r 
```

## Generate node_modules
```
npm i
```

## Eslint format
```
npx ng add @angular-eslint/schematics
npx ng lint --format
```

## Prettier format
```
npm i --global prettier
npx prettier --write .\src\
```

## PWA
```
npx ng add @angular/pwa 
```

## Develop dependencies
```
npm i --save-dev prettier
npm i --save-dev @fortawesome/fontawesome-free
```

## Bootstrap
[Bootstrap v5.1](https://getbootstrap.com/docs/5.1/getting-started/download/)

# Github pages
```
npm i -g angular-cli-ghpages
npx ng build --base-href "https://a14narriaga.github.io/heroes/"
npx ngh --dir dist/heroes
```

## Commits style
- 🐛 FIX 🔹 A bug fix
- ✨ FEAT 🔹 A new feature
- 🔨 REFACTOR 🔹 Doesn't fix a bug or add a function
- 🎨 STYLE 🔹 Not affect the meaning of the code
- ⚙️ CONF 🔹 Add files and configurations.
- 📝 TEXT 🔹 Comments or readme notes
