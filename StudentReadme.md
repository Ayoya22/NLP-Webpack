### Evaluate a news article with Natural Language Processing

This project I build a web tool that allows users to run 
Natural Language Processing (NLP) on articles or
blogs found on other websites.

Using an exciting new api called `Aylien`, we can build a simple web interface to interact with their NLP system. 
This tool will give us back pertinent information about the article, 
like whether the content is subjective (opinion) 
or objective (fact-based) and whether it is positive, neutral, or negative in tone.

We used as server `Express` and frond end development tool `Webpack` 

## How to run the project

- Clone the repo and in the root folder in your terminal run npm install.
    
    This will install all the dependencies and development tools required by the project in the target file . They are all 
    present in the `pakage.json` file.
    
- Then run the `npm run build-prod` command this will generate the dist folder and cache folders too.
- Then run the `npm run build-dev` command still from your terminal, this will lauch your default browser with 
the html file from the views folder.
- After you have run the npm commands, you can also run the different tests folders that are present in the project.
You can do so by running `npm run test` from the root directory of the project in the terminal. This command will 
search and run the different tests folders together with all their tests using `jest`.
 
- From there you will be able to input your texts or url to be analyzed by aylien.

##Note

The credentials used in setting up the aylien api is supposed to last just for 14 days from the day I created a trial account on Aylien text api.
so if it doesn't work it means my credentials must have surely expired
. So please use the link below to create an account on Aylien text api and change my credentials in the `index.js` file in the `./server` folder.
