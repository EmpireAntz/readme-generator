const inquirer = require('inquirer')
const fs = require('fs')

const writeMD = ({project, description, installation, useage, contribute, test, license, github, email}) => {
    const licenseBadge = licenseOptions[license].badge
    return `# ${project} ${licenseBadge}

## Description 

${description}

## Table of Contents

- [Installation](#installation)
- [Useage](#useage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
                
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
        badge: "![License: OSL 3.0](https://img.shields.io/badge/License-OSL_3.0-blue.svg)"
    }
}

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
        message: 'Please provide instructions and examples for use.'
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
        choices: Object.keys(licenseOptions)
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

.then((resp) => {
    console.log(resp)
    const changeMD = writeMD(resp)
    fs.writeFile('README.md', changeMD, (err) => console.log(err))
})
