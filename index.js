//imports inquirer for creating cli prompts
const inquirer = require('inquirer')
//imports file systems
const fs = require('fs')
//function that will create our readme template literal with our prompt inputs.
const writeMD = ({project, description, installation, useage, contribute, test, license, github, email}) => {
    //selects the badge chosen from the inquirer prompts
    const licenseBadge = licenseOptions[license].badge
    //returns our constructed template literal to be used to write our readme
    return `# ${project} ${licenseBadge}

## Description 

${description}

## Table of Contents

- [Installation](#installation)
- [Useage](#useage)
- [Contribute](#contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
                
## Installation

${installation}

## Useage

${useage}

## Contribute

${contribute}

## Tests

${test}

## License

This project is licensed under the ${licenseOptions[license].name} License.

## Questions 

For any questions, please reach out to me at [${email}](mailto:${email}) or visit my [GitHub Profile](https://github.com/${github}).`

}
//Creates an object to hold our licence badge options
const licenseOptions = {
    "MIT": 
    {
        name: "MIT",
        badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    },
    "ISC": 
    {
        name: "ISC",
        badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    },
    "Open Software License 3.0":
    {
        name: "Open Software License 3.0",
        badge: "![License: OSL 3.0](https://img.shields.io/badge/License-OSL_3.0-blue.svg)",
    }
}
//Prompts the user in the command line to add their inputs to define the readme's contents
inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is your projects title?',
    },
    {
        type: 'input',
        name:'description',
        message: 'Please provide a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Please provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please incluse guidelines for developers who want to contribute',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please type your test instructions here',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: Object.keys(licenseOptions),
    },
    {
       type: 'input',
       name: 'github',
       message: 'What is your Github Usernname?',
    },
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email address?',
    },
  
])
//from our inquire prompts we get our responses back
.then((resp) => {
    //we console log our responses to check and make sure were getting the right information
    console.log(resp)
    //we then make a variable to pass our responses into the writemd function 
    const changeMD = writeMD(resp)
    //then we write the file with the appended information
    fs.writeFile('README.md', changeMD, (err) => console.log(err))
})
