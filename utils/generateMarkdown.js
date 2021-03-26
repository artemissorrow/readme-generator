// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge;

function renderLicenseBadge(license) {
  switch (`${data.license}`) {
    case 'MIT': 
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Apache 2.0': 
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;  
    case 'GPL v3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD 2-clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'WTFPL':
      badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
      break;
    case 'none':
      badge = ''
      break;    
    default:
      break;
  }
}

let link;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (`${data.license}`) {
    case 'MIT': 
      link = 'https://opensource.org/licenses/MIT'
      break;
    case 'Apache 2.0': 
      link = 'https://opensource.org/licenses/Apache-2.0'
      break;  
    case 'GPL v3':
      link = 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case 'BSD 2-clause':
      link = 'https://opensource.org/licenses/BSD-2-Clause'
      break;
    case 'BSD 3-clause':
      link = 'https://opensource.org/licenses/BSD-3-Clause'
      break;
    case 'WTFPL':
      link = 'http://www.wtfpl.net/about/'
      break;
    case 'none':
      link = ''
      break;    
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
