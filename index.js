const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const axios = require("axios")


const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide a project title.",  
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a project description."
    },

    {
        type: "input",
        name: "installation",
        message: "Please describe how product is installed.",
    },

    {
        type: "input",
        name: "usage",
        message: "Please describe how this product will be used.",
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: [
            "MIT",
            "GNU GPLv3",
            "APACHE 2.0",
            "BSD 3",
            "None",
        ]
    },

    {
        type: "input",
        name: "contributors",
        message: "Any contributors?",
    },

    {
        type: "input",
        name: "tests",
        message: "Please describe project testings.",
    },

    {
        type: "input",
        name: "userName",
        message: "Please provide your Github username.",
    },

    {
        type: "input",
        name: "screenshot",
        message: "Your app screenshot",
    },

    {
        type: "input",
        name: "demo",
        message: "Your demo url",
    },

];

function writeToFile(fileName, data) {
    // writefileSync (Only need to provide file name and data, no callback needed)
    // cwd = current working directory
    // path.join grabs the path to your current working directory
    fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const url = `https://api.github.com/users/${answers.userName}`
            console.log(answers)
            axios.get(url)
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                    // answers.email = response.data.email;
                    answers.photo = response.data.avatar_url;

                    console.log("Now generating README");
                    // ... is a spread operator - look into developer mozilla
                    writeToFile("README.md", generateMarkdown(answers));
                })
        });

}

init();
