function generateMarkdown(data) {
  // the back ticks allow you to write in markdown language
  return `
#${data.title}
![Badge](https://img.shields.io/badge/license-${data.license}-blue)
![Product Photo](${data.photo})

## Description 
  ${data.description}

## Table of Contents (Optional) 

*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)

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

###Contact for Questions
${data.userName}
${data.email}
`;
}

module.exports = generateMarkdown;
