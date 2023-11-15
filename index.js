const inquirer = require('inquirer')
const fs = require('fs')

const writeMD = ({project, description, installation, useage, contribute, test}) => 
    
`# ${project}

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

${test}`

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
        message: 'Provide instructions and examples for use.'
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
    }

])

.then((resp) => {
    console.log(resp)
    const changeMD = writeMD(resp)
    fs.writeFile('README.md', changeMD, (err) => console.log(err))
})
