function generateMarkdown(data) {
  return `
#${data.title}
![Badge](https://img.shields.io/badge/license-${data.license}-blue)

![Product Photo](${data.photo})
![Product Demo](${data.demo})

## Description 
  ${data.description}

## Table of Contents (Optional) 

*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Tests](#tests)
*[Questions](#questions)

### Installation
${data.installation}

### Usage
${data.usage}

### License
${data.license}

### Contributors
${data.contributors}

### Tests
${data.tests}

### Questions
${data.userName}
${data.email}
`;
}

module.exports = generateMarkdown;
