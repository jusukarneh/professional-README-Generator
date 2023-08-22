// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "NO LICENSE") {
      return ""
    } else {
      return `![test](https://img.shields.io/badge/License-${license}-blue)`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "NO LICENSE"){
return ""
 
 } else if(license === "MIT"){
  return `[MIT lICENSE](https://dougneiner.mit-license.org/)`
 }
 else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NO LICENSE"){
    return ""
 
 } else if(license === "MIT"){
  return `[APHACHE lICENSE](https://www.apache.org/licenses/LICENSE-2.0)`
 }
 else {
    return ''
  }
    
      
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

# Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Email](#email)
  - [Username](#username)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

${data.test}

## Username

${data.username}

## Email

${data.email}
`;
}



module.exports = generateMarkdown;


