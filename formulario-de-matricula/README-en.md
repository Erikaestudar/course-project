🌐 **English** | [Português](README.md)

# ⭐ Estrelas do Amanhã | Enrollment Form

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## 📖 About the Project

This project presents an enrollment form for the fictional Estrelas do Amanhã preschool. The page guides users through entering information about a child and their guardian.

The form collects personal details, address and contact information, study shift, and sports preferences. It also includes a field for attaching a birth certificate and a checkbox to confirm that the terms have been read.

The page is built with HTML and CSS, with a responsive layout for different screen sizes. This project does not include server-side code or JavaScript, so submitting or saving data is not connected to a service.

## 📑 Table of Contents

- [Screenshot](#-screenshot)
- [🎯 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🎨 Design Highlights](#-design-highlights)
- [📂 Project Structure](#-project-structure)
- [🌐 View the Project](#-view-the-project)
- [📋 Prerequisites and 📝 How to Use](#-prerequisites-and--how-to-use)
- [📚 Form Contents](#-form-contents)
- [💪 Challenges](#-challenges)
- [💡 Learning Resources](#-learning-resources)
- [🚀 Suggested Improvements](#-suggested-improvements)
- [👩‍💻 Author and Credits](#-author-and-credits)
- [📄 License](#-license)

## 📸 Screenshot

![Screenshot of the enrollment form](assets/images/screenshot.png)

## 🎯 Features

- **Child information:** fields for name, date of birth, gender, and medical information.
- **Document attachment:** file selection field for the birth certificate.
- **Home address:** fields for ZIP code and number, plus disabled fields for street, city, and state.
- **Guardian contact:** fields for name, phone, and email. Email is required and uses the browser's built-in validation.
- **Enrollment options:** choose a study shift, morning or afternoon, and a sports option.
- **Terms and conditions:** checkbox to indicate agreement.
- **Responsive layout:** content is stacked on smaller screens and split into two areas on larger screens.
- **Form actions:** buttons to save responses and submit the enrollment form. The save button has no implemented action, and submission is not connected to a server.

## 🛠️ Technologies Used

- **HTML5:** page structure, form fields, grouped information, and native controls.
- **CSS3:** styling, responsive layout, field states, and custom controls.
- **Poppins:** typeface loaded from Google Fonts for the interface.
- **SVG:** icons and illustrations used on the page.

## 🎨 Design Highlights

- A white background for the form area and a light peach tone for the introductory panel.
- Orange accents for highlights, interaction states, and the primary button.
- Poppins typeface and custom icons for form fields.
- On larger screens, the page is split between the form and a panel with the school's visual identity. On smaller screens, the areas are stacked.
- Fields, selection options, and the file area have visual focus and interaction states.

## 📂 Project Structure

```text
formulario-de-matricula/
├── assets/
│   ├── icons/                 # Icons for fields and options
│   └── images/                # Logo, illustration, and screenshot
├── styles/
│   ├── fields/
│   │   ├── buttons.css        # Form buttons
│   │   ├── checkbox.css       # Checkbox
│   │   ├── droparea.css       # File selection area
│   │   ├── index.css          # Field stylesheet imports
│   │   ├── input.css          # Input fields
│   │   └── radio.css          # Selection options
│   ├── forms.css              # Form grouping and spacing
│   ├── global.css             # Global styles and variables
│   ├── index.css              # Stylesheet imports
│   └── layout.css             # Responsive page layout
└── index.html                 # Form page
```

## 🌐 View the Project

[Open the enrollment form online](https://erikaestudar.github.io/course-project/formulario-de-matricula/index.html).

## 📋 Prerequisites and 📝 How to Use

Only an up-to-date browser is required. An internet connection is needed to load the Poppins font from Google Fonts.

1. Clone or download this repository.
2. Open the `formulario-de-matricula` folder.
3. Open `index.html` in a browser.

## 📚 Form Contents

### 1. Child information
Full name, date of birth, gender, medical information, and a field to select the birth certificate.

### 2. Home address
ZIP code and number fields, with street, city, and state displayed as disabled fields.

### 3. Guardian information
The guardian's name, phone number, and email address.

### 4. Enrollment options
Choose a study shift, morning or afternoon, and one sports option: soccer, basketball, swimming, yoga, volleyball, or boxing. This section also includes a checkbox to agree to the terms and privacy policy.

## 💪 Challenges

The main challenge was making the form responsive, adapting its layout for smaller and larger screens without making the fields difficult to read or fill out.

## 💡 Learning Resources

- Structuring HTML forms with `fieldset`, `legend`, and labels associated with their fields.
- Using text, date, select, textarea, file, radio, and checkbox inputs.
- Applying visual states with CSS selectors such as `:focus`, `:checked`, and `:has()`.
- Building responsive layouts with Flexbox, Grid, and media queries.
- Separating styles into files by purpose.

## 🚀 Suggested Improvements

- [ ] Add a server integration to receive submitted data and uploaded files.
- [ ] Implement an action for the “Save responses” button.
- [ ] Automatically fill in street, city, and state based on the ZIP code.
- [ ] Add value attributes to the sports options so the selected choice is included in submitted data.

## 👩‍💻 Author and Credits

Project developed by [Erika Sugawara](https://github.com/Erikaestudar) as an exercise from [Rocketseat](https://app.rocketseat.com.br/jornada/full-stack/sala/formularios-no-html/grupo/projeto-formulario-de-matricula/aula/apresentacao-do-projeto-7).

- **GitHub:** [@Erikaestudar](https://github.com/Erikaestudar)
- **LinkedIn:** [Erika Sugawara](https://www.linkedin.com/in/erika-sugawara/)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for the full text.

**Developed with ❤️ as an educational project**
