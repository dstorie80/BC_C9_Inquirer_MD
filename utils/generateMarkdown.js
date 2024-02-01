// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadges(badgelist) {
    if (!badgelist) {
      return '';
    }
    let badges = '';
    for(let badge of badgelist) {
      badges += `![${badge}](https://img.shields.io/badge/${badge.replace(/ /g, '%20')}-blue.svg) `;
    }
    return badges;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(licenses) {
    if (!licenses) {
      return '';
    }
    return `https://choosealicense.com/licenses/${licenses.toLowerCase()}/`;
  }
  
  function renderLicenseBadge(licenses) {
    if (!licenses) {
      return '';
    }
    return `![GitHub license](https://img.shields.io/badge/license-${licenses}-blue.svg)`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseBadge(licenses) {
    if (!licenses) {
      return '';
    }
    return `![GitHub license](https://img.shields.io/badge/license-${licenses}-blue.svg)`;
  }
  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = (userInput) => {
    const { title, description, motiviation, builtWhy, problem, solution, installSteps, usage, collaborators, licenses, badgelist, featureList, contribute, test, userName, email } = userInput;
    
    const outPutMd = 
    `# ${title}
  
    ${renderLicenseBadge(licenses)}
    [License Link](${renderLicenseLink(licenses)})
  
    ## Description
    
    ${description}
    
    - ${motiviation}
    - ${builtWhy}
    - ${problem}
    - ${solution}
    
    ## Table of Contents (Optional)
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Badges](#badges)
    - [Features](#features)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${installSteps}
    
    ## Usage
    
    ${usage}    
    
    ## Credits
    
    ${collaborators}
    
    ## License
    
    ${licenses}
    
     ## Badges
    
     ${renderBadges(badgelist)}
    
    ## Features
    
    ${featureList}
    
    ## How to Contribute
    
    ${contribute}
    
    ## Tests
    
    ${test}
    
    ## Questions
    
    My github page is: https://github.com/${userName} \n
    I can be contacted by email at: ${email}`;
  
    
  
    return outPutMd;
  };
  
  
  
  
  module.exports = generateMarkdown;
  