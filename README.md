# React Movies

A movie search application built with React and TypeScript. The application uses the TMDB API to find movies and display detailed information in a modal window.

## Features

- Search movies by title
- Display movie posters and titles
- Show a loading message during requests
- Handle request errors
- Notify the user when no movies are found
- Open detailed movie information in a modal
- Close the modal with the button, backdrop, or Escape key
- Lock page scrolling while the modal is open

## Technologies

- React
- TypeScript
- Vite
- Axios
- React Hot Toast
- CSS Modules
- modern-normalize
- TMDB API

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Dmytro777-lab/03-react-movies.git
```

Open the project folder:

```bash
cd 03-react-movies
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your TMDB Read Access Token:

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

Start the development server:

```bash
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Live Demo

The deployment link will be added after publishing the project on Vercel.

## API

Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).
