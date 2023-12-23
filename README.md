# Memory Card Game - The Odin Project

A memory card game made using React for the odin project.

[Live Link](https://celadon-cassata-c11a21.netlify.app/)

![Repo Image](/public/repoImage.png)

## Folder Structure

```
    /.git
    /node_modules
    /public             -> Contains Images and favicon used
    /src
        /components         -> Contains all the smaller react components
        /styles             -> Contains CSS Stylesheets
        /utils              -> Contains localstorage, icon and schuffle util scripts
        App.jsx
        main.jsx
    .eslint.cjs
    .gitignore
    index.html
    package-lock.json
    package.json
    README.md
    vite.config.js      -> Vite Config File
```

## Key Concepts

### APIs in Web Development

APIs (Application Programming Interfaces) are sets of protocols, tools, and definitions for building application software. They are crucial in web development for inter-service communication. For example, a weather app on a phone might use an API to request weather data from a server. APIs are everywhere in modern web applications, enabling functionalities like fetching data from servers, integrating with third-party services, and even interacting with hardware components.

### JavaScript Fetch API

The Fetch API provides an interface for fetching resources (like network requests). It's a modern alternative to XMLHttpRequest and is more powerful and flexible. For example, it's used in web applications to make HTTP requests to APIs to retrieve or send data. The Fetch API supports promises, making it easier to work with asynchronous operations.

Code Example from App.jsx:
Here, the Fetch API is used to retrieve GIFs from the Giphy API. The code fetches data based on the searchTerm and limit state variables. When the gameStarted state changes, the useEffect hook triggers the fetch operation.

JS:

```
    useEffect(() => {
        if (!gameStarted) {
            setScore(0);
            setClickedGifs([]);
            setGifs([]);
            return;
        }
        const apiKey = 'QwBwlsrWKtd2RZJViaI2O0Y11PsvWqm1';
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`)
            .then(response => response.json())
            .then(data => setGifs(data.data))
            .catch(error => console.log(error));
    }, [gameStarted]);
```

Using the Fetch API in React is common for data fetching and other network requests. It's vital to handle the asynchronous nature of fetch and manage the state accordingly, as seen in the useEffect hook.

### React with Vite

React is a JavaScript library for building user interfaces, often used for single-page applications. Vite, on the other hand, is a modern, fast front-end build tool that significantly improves the development experience. It provides features like fast cold starts, instant hot module replacement (HMR), and out-of-the-box support for TypeScript, JSX, CSS, and more.

This combination is used in modern web development to build efficient and scalable single-page applications (SPAs). Vite's fast build times and React's component-based architecture make development quick and efficient.

In MY project, React is used to create a dynamic memory game, where components like Game, Menu, MemoryCard, and GameOverScreen interact to provide a seamless gaming experience. Vite WAS used to set up the project, ensuring quick builds and updates during development.

Using React with Vite offers a robust and developer-friendly environment. The modular nature of React components, combined with Vite's fast build times, streamlines the development process, making it an excellent choice for modern web applications.

## Final Notes

In creating this React memory game, I've not only honed my skills in React and its ecosystem but also gained a deeper understanding of essential web development concepts. Working with APIs, particularly the Fetch API, has been instrumental in learning how to handle asynchronous data and integrate external services into my applications. Utilizing React alongside Vite has sharpened my ability to build fast and responsive single-page applications, offering a more enjoyable development experience with quicker feedback loops. This project has been an invaluable journey in reinforcing my knowledge of state management, component-based architecture, and event handling in React. It's a testament to the practical application of these skills in a real-world scenario, solidifying my understanding and preparing me for more complex challenges ahead. The completion of this project marks not just the end of a learning chapter but also a stepping stone towards more advanced and intricate web development projects.
