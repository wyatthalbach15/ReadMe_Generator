function generateMarkdown(data) {
  return `
  # ${data.project}
  ${data.license}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
      
  # Installation
  ${data.install}
  
  # Usage
  ${data.use}
  
  # License 
  This project is covered under the ${data.license} license.
  
  
  # Contributing 
  ${data.contribute}
  
  # Tests
  ${data.tests}
  
  # Questions 
  You can contact me at by my github or email with the information below.
  * GitHub Profile: (https://github.com/${data.username})
  * Contact Email: ${data.email}
  
  `;
}

module.exports = generateMarkdown;
