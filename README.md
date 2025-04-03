#Salam react
1 - Basic index html, index css, App.js setup
2 - Remote: Setup github > create repo
Local: git init, git add, git commit, git push setup/copy remote url from github and setup

3 - npm init --> this will generate package.json, package-lock.json
4 - .gitignore --> Add /node_modules etc for git to ignore them

5 - We choose parcel as dependency manager,
so install it as: npm install -D parcel
install react and react-dom: npm i react and npm i react-dom

6 - To run the app: npx parcel index.html (starting point of our app)

7 - Set up the start and build scripts in package.json to perform these ops easily

Notes:
npm ---> for managing packages
npx ---> for executing/running packages/modules

The purpose of JS is dom manipulation.
Libraries of js contain methods for easy dom manipulation, like React.createElement(), ReactDOM.render();
The flow is: js (for dom manipulation using code) --> React core (react library for easy dom manipulation ) --> JSX (make writing the code developer friendly, make it similar to writing HTML, so we don't have to use React.createElement(), etc)

JSX code is transpiled to React.createElement... by babel from parce before it is sent to the browser for execution by the js engine.
JSX behind the scenes is React.createElement()
