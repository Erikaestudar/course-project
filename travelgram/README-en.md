🌐 [Português](README.md) | **English**

# ✈️ Travelgram

<a id="about-the-project"></a>
## About the Project

Travelgram is a travel profile and photo gallery page. Isabela Torres's profile shares her interest in travel, culture, and food, along with details about her location, the countries she has visited, and her photos.

The gallery displays 12 images of landscapes, cities, and food. The project was created as part of a Rocketseat course and can be opened directly in a browser, with no build step.

<a id="table-of-contents"></a>
## Table of Contents

- [About the Project](#about-the-project)
- [Table of Contents](#table-of-contents)
- [Screenshot](#screenshot)
- [🎯 Features](#features)
- [🛠️ Technologies](#technologies)
- [📂 Project Structure](#project-structure)
- [🌐 View the Project](#view-the-project)
- [📝 How to Use](#how-to-use)
- [🎨 Featured Places and Photos](#featured-places-and-photos)
- [💡 What You Can Learn](#what-you-can-learn)
- [🚀 Ideas for Improvement](#ideas-for-improvement)
- [Credits](#credits)
- [License](#license)

<a id="screenshot"></a>
## Screenshot

![Travelgram screenshot](assets/images/sreenshot.png)

<a id="features"></a>
## 🎯 Features

- **Travel profile:** introduces Isabela Torres, her bio, and profile details.
- **Photo gallery:** arranges 12 images in a grid that adapts to screen width.
- **Responsive menu:** shows a menu button on smaller screens and closes the menu when a link is selected or the user clicks outside it.
- **Expandable search field:** opens and closes the text field. Search does not filter photos in this version.
- **Keyboard dismissal:** pressing `Escape` closes the menu or search field and returns focus to its button.
- **Anchor navigation:** menu links lead to the profile or the gallery.

<a id="technologies"></a>
## 🛠️ Technologies

- **HTML5:** structures the profile, navigation, gallery, and footer.
- **CSS3:** provides the styling, responsive layouts, breakpoints, and style variables.
- **JavaScript:** handles opening and closing the menu and search field.
- **Google Fonts, Poppins:** font loaded from Google Fonts.

<a id="project-structure"></a>
## 📂 Project Structure

```text
travelgram/
├── assets/
│   ├── icons/                         # Navigation and profile icons
│   │   ├── AirplaneTilt.svg
│   │   ├── Image.svg
│   │   ├── MagnifyingGlass.svg
│   │   └── MapPin.svg
│   ├── images/                        # Gallery and screenshot
│   │   ├── Image 01.png
│   │   ├── Image 02.png
│   │   ├── Image 03.png
│   │   ├── Image 04.png
│   │   ├── Image 05.png
│   │   ├── Image 06.png
│   │   ├── Image 07.png
│   │   ├── Image 08.png
│   │   ├── Image 09.png
│   │   ├── Image 10.png
│   │   ├── Image 11.png
│   │   ├── Image 12.png
│   │   └── sreenshot.png
│   ├── Logo.svg
│   └── Profile pic.png
├── styles/
│   ├── footer.css                     # Footer styles
│   ├── global.css                     # Global rules and variables
│   ├── header.css                     # Profile and details
│   ├── index.css                      # Stylesheet imports
│   ├── main.css                       # Photo grid
│   └── nav.css                        # Responsive navigation
├── index.html                         # Main page
└── script.js                          # Menu and search interactions
```

<a id="view-the-project"></a>
## 🌐 View the Project

[Open Travelgram on GitHub Pages](https://erikaestudar.github.io/course-project/travelgram/index.html).

<a id="how-to-use"></a>
## 📝 How to Use

1. Clone the repository: `git clone https://github.com/Erikaestudar/course-project.git`
2. Go to the project folder: `cd course-project/travelgram`
3. Open `index.html` in a browser. You can also use a local server extension in your editor.

No dependencies or build step are required.

<a id="featured-places-and-photos"></a>
## 🎨 Featured Places and Photos

### 1. Alpine lake
One photo shows a lake surrounded by mountains, viewed from a wooden boat.

### 2. Venice canal at sunset
Buildings line a Venetian canal in the evening light.

### 3. Colorful seaside houses
The image shows houses built on a cliff beside the sea.

### 4. Stone bridge in Venice
A stone bridge crosses a canal surrounded by Venetian buildings.

### 5. Florence Cathedral
The photo features the cathedral's dome and ornate facade.

### 6. Coastal village
Colorful houses stand beside turquoise water.

### 7. Restaurant by a canal
A restaurant terrace sits beside a Venetian canal.

### 8. Street of colorful houses
The scene shows a narrow street with flowers, colorful houses, and a scooter.

### 9. Colosseum in Rome
The Colosseum appears beneath a blue sky.

### 10. Italian restaurant
A restaurant facade is shown with a white scooter in front.

### 11. Pasta dishes
The photo shows pasta dishes and glasses on a wooden table.

### 12. Ponte Vecchio
The bridge crosses the Arno River in Florence.

<a id="what-you-can-learn"></a>
## 💡 What You Can Learn

- Structuring a page with semantic HTML and alternative descriptions for images.
- Building responsive layouts with Flexbox and media queries.
- Using CSS variables and importing stylesheets.
- Managing interactive elements with JavaScript, ARIA attributes, and focus control.
- Handling outside clicks, the `Escape` key, and window resizing.

<a id="ideas-for-improvement"></a>
## 🚀 Ideas for Improvement

- Make the search field filter photos or their descriptions.
- Add a caption and location for each image.
- Allow each photo to open in a dedicated enlarged view.
- Keep the profile counts in sync with the gallery content.
- Turn the terms of use and privacy policy text into working links.

## Credits

Project by Erika Miyuki Sugawara, created as part of Rocketseat course projects. The source, authorship, and MIT license are recorded in the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file in the repository root.

**Made with ❤️ as an educational project**
