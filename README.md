# team-profile-generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Team Profile Generator is a Node.js command line application for building development team profile webpages. It prompts the user to enter basic info on each team member and writes an HTML file for a webpage with the submitted data.

[Video of Team Profile Generator showing typical use case](https://drive.google.com/file/d/1qGDqRc18LTD__IcQv3e5-l_J0VGK44ae/view)

![Screenshot of sample webpage generated](https://github.com/CommieDog/team-profile-generator/blob/main/assets/images/readme/sample-readme-screenshot.jpg)
Screenshot of sample readme generated


## Tabe of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Author](#author)
* [License](#license)


## Installation

Start by cloning the repository to a new directory. Then run `npm install` to install all required dependencies and you should be ready to go.


## Usage

The Team Profile Generatator asks users to enter data on team employees one at a time, starting with the manager. Upon entering the manager's employee data, the program then prompts the user to enter data on all the other employees. Other than the manager, employees are classified as either engineers or interns. Wen selecting the option to finish, the program writes an HTML file to `./dist/team.html` and exits, leaving users to do what they want with the webpage.


## Testing

Test this project by running `npm test`.


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License

&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.