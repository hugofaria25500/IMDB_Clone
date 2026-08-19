# IMDB_Clone

An IMDB-inspired full-stack web application for discovering movies and TV series, viewing detailed information, searching and filtering media, managing favourites and watchlists, and handling user accounts.

---

# 📸 Application Preview

## Desktop

<!--
PLACEHOLDER — Add a desktop screenshot here.
Recommended image: ./docs/images/desktop-preview.png
The screenshot should show the main application interface, including the navbar, hero section and movie/series content.
-->

![Desktop Application Preview](./docs/images/desktop-preview.png)

## Mobile

<!--
PLACEHOLDER — Add a mobile screenshot here.
Recommended image: ./docs/images/mobile-preview.png
The screenshot should demonstrate the responsive mobile layout.
-->

![Mobile Application Preview](./docs/images/mobile-preview.png)

---

# 🎯 Project Goals

The main goal of this project was to build a complete full-stack application inspired by IMDB while practicing modern frontend and backend development.

The project focuses on:

- Building a responsive movie and TV series platform.
- Consuming movie and TV series data from an external API.
- Creating a REST API with Spring Boot.
- Implementing user registration and authentication.
- Implementing JWT-based access and refresh token authentication.
- Allowing authenticated users to manage favourites.
- Allowing authenticated users to manage movie and series watchlists.
- Providing movie and series discovery with filters.
- Implementing search, pagination and genre-based filtering.
- Creating reusable React components and custom hooks.
- Separating API communication from UI components.
- Applying a layered architecture on the backend.
- Building a responsive interface for desktop and mobile devices.

---

# 🧱 Architecture Overview

The project is divided into two independent applications:

```text
IMDB_Clone/
│
├── frontend/
│   └── React application
│
├── backend/
│   └── Spring Boot application
│
└── README.md
```

The frontend communicates with the Spring Boot REST API. The backend is responsible for application-specific data, authentication, favourites, watchlists and communication with the external movie API.

### Frontend Flow

```text
User
  ↓
React Pages / Components
  ↓
Custom Hooks
  ↓
Frontend Services
  ↓
Axios
  ↓
Spring Boot REST API
```

The frontend currently uses custom React hooks with `useEffect` and `useState` for asynchronous data fetching rather than TanStack React Query. Although React Query is declared in `package.json`, it is not considered a used project technology because no application code currently relies on it.

### Backend Flow

```text
HTTP Request
      ↓
Controller
      ↓
Service
      ↓
Repository / TMDB Client
      ↓
Database / External API
      ↓
Response
```

### Complete System Flow

```text
                         ┌──────────────────────┐
                         │      React App        │
                         │      Frontend        │
                         └──────────┬───────────┘
                                    │
                                  Axios
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Spring Boot API    │
                         └──────────┬───────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 │                  │                  │
                 ▼                  ▼                  ▼
          ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
          │   Services  │    │ Repositories│    │ TMDB Client │
          └─────────────┘    └──────┬──────┘    └──────┬──────┘
                                    │                  │
                                    ▼                  ▼
                              ┌──────────┐       ┌──────────┐
                              │ Database │       │   TMDB   │
                              └──────────┘       │   API    │
                                                 └──────────┘
```

<!--
PLACEHOLDER — Replace the ASCII architecture diagrams above with a polished Draw.io diagram if desired.
Recommended image: ./docs/images/system-architecture.png
-->

![System Architecture](./docs/images/system-architecture.png)

---

# 📦 Technologies Used

The list below is based on technologies that are actually represented in the application code, not simply every dependency declared in the build files.

## Frontend

- React
- JavaScript / JSX
- React Router
- Axios
- Tailwind CSS
- Swiper
- Vite
- ESLint

### Frontend dependencies declared but not currently used by application code

- TanStack React Query

TanStack React Query is present in `package.json`, but the current hooks use React's `useEffect` and `useState` directly for data fetching and loading state management.

## Backend

- Java 17
- Spring Boot
- Spring Web MVC
- Spring Data JPA
- Spring Security
- Spring Validation
- JWT (`jjwt`)
- H2 Database
- PostgreSQL driver
- Lombok
- Maven
- Spring WebFlux / WebClient

## Development Tools

- IntelliJ IDEA
- Visual Studio Code
- GitHub
- Draw.io
- Postman
- Git

---

# 🖥 Frontend

The frontend is a React single-page application using React Router for navigation and Axios for communication with the backend REST API.

The codebase is organized around reusable components, pages, custom hooks, services, authentication context and utility code.

## Responsibilities

The frontend is responsible for:

- Rendering the application interface.
- Providing navigation between pages.
- Displaying movies and TV series.
- Displaying detailed movie and series information.
- Searching for movies and series.
- Discovering media using filters.
- Displaying popular and trending content.
- Displaying new releases.
- Selecting random movies and series.
- Displaying trailers.
- Managing user authentication state.
- Managing favourites.
- Managing watchlists.
- Updating user profile information.
- Handling loading states.
- Providing responsive layouts.

## Main Routes

The application currently defines the following routes:

```text
/
/login
/create-account
/movies
/series
/profile
/watchlist
/favourites
```

These routes are configured in `App.jsx` using React Router.

## Main Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── css/
│   ├── hooks/
│   ├── js/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── eslint.config.js
```

## Components

The component structure contains reusable UI elements for the main application features.

Examples include:

- `Navbar`
- `HeroSection`
- `MediaCard`
- `CarouselCard`
- `MediaModal`
- `TrailerModal`
- `DiscoverSection`
- `SearchSection`
- `FilterBox`
- `CollectionFilters`
- `Grid`
- `GridPagination`
- `ProfileCard`
- `ProfileMenu`
- `LoginCard`
- `CreateAccountCard`
- `SkeletonCard`
- `PromoSection`
- `ShuffleSection`

The application also uses several carousel components based on Swiper.

## Custom Hooks

The frontend uses custom hooks to separate data-fetching and application logic from the UI.

### Movie Hooks

- Popular movies
- Trending movies
- New movie releases
- Random movie
- Movie search
- Movie discovery

### Series Hooks

- Popular series
- Trending series
- New series releases
- Random series
- Series search
- Series discovery

### Media Hooks

- Media details
- Trailers

### User Hooks

- Authentication
- Favourite movies
- Favourite series
- Movie watchlists
- Series watchlists
- Movie genres
- Series genres

The hooks currently use React state and effects to manage asynchronous requests and loading states.

## Frontend Services

API communication is separated into service modules:

```text
services/
├── api.js
├── authService.js
├── favoriteService.js
├── mediaService.js
├── movieService.js
├── seriesService.js
└── watchlistService.js
```

The central Axios instance uses the backend `/api` base URL and automatically adds the access token from `localStorage` to authenticated requests.

```text
Authorization: Bearer <accessToken>
```

## Authentication Context

Authentication state is managed through React Context.

`AuthProvider` is mounted at the root of the application and provides:

- Current user
- Register
- Login
- Logout
- User update
- Authentication status

The provider also attempts to restore an existing session when the application starts.

---

# ⚙️ Backend

The backend is a Spring Boot application built with Java 17.

It follows a layered architecture with controllers, services, repositories, entities, request/response DTOs, security configuration and a dedicated external API client package.

## Responsibilities

The backend is responsible for:

- Exposing REST API endpoints.
- Handling authentication and authorization.
- Managing users.
- Hashing user passwords.
- Issuing JWT access tokens.
- Managing refresh tokens.
- Managing favourite movies.
- Managing favourite series.
- Managing movie watchlists.
- Managing series watchlists.
- Providing movie and series endpoints.
- Providing genre endpoints.
- Communicating with TMDB.
- Mapping external API responses into application DTOs.
- Persisting user-related application data.
- Validating request data.
- Handling CORS configuration.

## Backend Structure

```text
backend/
│
├── src/
│   ├── main/
│   │   ├── java/com/example/backend/
│   │   │   ├── config/
│   │   │   ├── controller/
│   │   │   ├── entity/
│   │   │   ├── exception/
│   │   │   ├── repository/
│   │   │   ├── request/
│   │   │   ├── response/
│   │   │   ├── security/
│   │   │   ├── service/
│   │   │   └── tmdb_client/
│   │   │
│   │   └── resources/
│   │
│   └── test/
│
├── pom.xml
├── mvnw
└── mvnw.cmd
```

## Controller Layer

The backend currently contains controllers for:

- Authentication
- Favourites
- Genres
- Movies
- TV series
- Users
- Watchlists

The authentication controller exposes endpoints for registration, login, refresh and logout.

## Service Layer

Services contain the main business logic and coordinate repositories, security components and external API clients.

The movie and series services provide functionality for:

- Popular content
- Trending content
- New releases
- Random content
- Search
- Discovery with filters
- Details
- Trailers

## Repository Layer

Spring Data JPA repositories are used for application-specific persistent data.

The repository layer currently contains repositories for:

- Users
- Refresh tokens
- Favourite movies
- Favourite series
- Movie watchlists
- Series watchlists

## Entities

The backend currently defines entities for:

```text
User
RefreshToken
FavoriteMovie
FavoriteSeries
WatchlistMovie
WatchlistSeries
```

This means the application does not need to persist the complete external movie catalogue locally. Instead, user-specific relationships such as favourites and watchlists are stored in the application database.

---

# 🔐 Authentication & Security

Authentication is implemented using Spring Security and JWT.

The backend supports:

- User registration
- Login
- Access tokens
- Refresh tokens
- Logout / refresh token revocation
- Password hashing using BCrypt
- Protected API endpoints

## Authentication Flow

```text
User
 ↓
Login
 ↓
POST /api/auth/login
 ↓
AuthService
 ↓
Validate credentials
 ↓
Generate JWT access token
 ↓
Create refresh token
 ↓
Return authentication response
 ↓
Frontend stores tokens
```

For subsequent authenticated requests:

```text
React
 ↓
Axios interceptor
 ↓
Authorization: Bearer <accessToken>
 ↓
JwtAuthenticationFilter
 ↓
Spring Security
 ↓
Protected Controller
```

Public endpoints include authentication, movies, series, genres and the H2 console. Favourites, watchlists and user endpoints require authentication. Everything else is protected by default.

<!--
PLACEHOLDER — Add an authentication flow diagram.
Recommended image: ./docs/images/authentication-flow.png
-->

![Authentication Flow](./docs/images/authentication-flow.png)

---

# 🔗 External API — TMDB

The backend contains a dedicated `tmdb_client` package for communication with **The Movie Database (TMDB)**.

```text
tmdb_client/
├── client/
├── config/
├── dto/
└── response/
```

The project uses Spring WebClient to communicate with TMDB asynchronously.

The WebClient is configured with a base URL obtained from TMDB properties and a response timeout.

## Movie Data

The movie integration currently supports:

- Popular movies
- Trending movies
- New movie releases
- Random movies
- Movie search
- Movie discovery
- Movie details
- Movie trailers
- Movie genres

## TV Series Data

The series integration currently supports:

- Popular TV series
- Trending TV series
- New series releases
- Random series
- Series search
- Series discovery
- Series details
- Series trailers
- Series genres

## Trailer Selection

The backend applies selection logic when retrieving trailers.

The preferred order is:

1. Official YouTube trailer.
2. Any YouTube trailer.
3. Any YouTube video.

This logic is implemented separately for movies and TV series.

---

# 🔎 Search & Discovery

The application provides separate search and discovery functionality for movies and TV series.

Discovery supports filters such as:

- Genre
- Minimum year
- Maximum year
- Rating
- Sort order
- Page

The frontend uses dedicated filter components and discovery hooks, while the backend forwards the corresponding parameters to the external API client.

---

# ❤️ Favourites

Authenticated users can save movies and TV series as favourites.

The frontend provides dedicated services and hooks for favourite operations.

The backend stores these relationships using:

```text
FavoriteMovie
FavoriteSeries
```

The application can also check whether a specific movie or series is already marked as a favourite, allowing the UI to display the correct state.

---

# 📺 Watchlist

Authenticated users can maintain watchlists for both movies and TV series.

The implementation is separated into:

```text
Movie Watchlist
Series Watchlist
```

The backend persists these relationships using:

```text
WatchlistMovie
WatchlistSeries
```

The frontend contains dedicated watchlist services and hooks for managing these resources.

---

# 🗄 Database

The backend uses Spring Data JPA for persistence.

The project includes support for:

- H2
- PostgreSQL

H2 is useful for local development and inspection through the H2 console, while PostgreSQL is available as a relational database driver for a more persistent environment.

The application database primarily stores user and user-specific data rather than the complete TMDB catalogue.

<!--
PLACEHOLDER — Add a database/entity relationship diagram.
Recommended image: ./docs/images/database-diagram.png
The diagram should show User, RefreshToken, FavoriteMovie, FavoriteSeries, WatchlistMovie and WatchlistSeries and their relationships.
-->

![Database Diagram](./docs/images/database-diagram.png)

---

# 🔄 Data Flow

## Movie Request

```text
User
 ↓
Movie Page
 ↓
Movie Custom Hook
 ↓
movieService.js
 ↓
Axios
 ↓
GET /api/movies/...
 ↓
MovieController
 ↓
MovieService
 ↓
MovieClient
 ↓
TMDB API
 ↓
TMDB Response
 ↓
Backend DTO / Response
 ↓
Frontend Hook
 ↓
React UI
```

## Favourite Request

```text
User
 ↓
Favourite Button
 ↓
Favourite Hook
 ↓
favoriteService.js
 ↓
Axios
 ↓
JWT Authorization Header
 ↓
FavoriteController
 ↓
FavoriteService
 ↓
FavoriteMovie / FavoriteSeries Repository
 ↓
Database
 ↓
Response
 ↓
React UI Update
```

## Watchlist Request

```text
User
 ↓
Watchlist Action
 ↓
Watchlist Hook
 ↓
watchlistService.js
 ↓
Axios
 ↓
JWT Authorization Header
 ↓
WatchlistController
 ↓
WatchlistService
 ↓
Watchlist Repository
 ↓
Database
 ↓
Response
 ↓
React UI Update
```

---

# 📱 Responsive Design

Responsive design is implemented throughout the React interface using Tailwind CSS and responsive component layouts.

The application contains dedicated UI components for:

- Responsive navigation
- Movie and series cards
- Grids
- Carousels
- Filters
- Detail sections
- Profile areas
- Modals

<!--
PLACEHOLDER — Add a desktop/tablet/mobile comparison.
Recommended image: ./docs/images/responsive-design.png
-->

![Responsive Design](./docs/images/responsive-design.png)

---

# 🎬 Main Features

- Movie discovery
- TV series discovery
- Popular movies
- Popular TV series
- Trending movies
- Trending TV series
- New movie releases
- New TV series releases
- Movie search
- TV series search
- Movie and series filters
- Genre filtering
- Rating filtering
- Year filtering
- Sorting
- Pagination
- Random movie selection
- Random series selection
- Movie details
- TV series details
- Movie trailers
- TV series trailers
- User registration
- User login
- JWT authentication
- Refresh tokens
- Logout
- Profile management
- Favourite movies
- Favourite series
- Movie watchlist
- Series watchlist
- Responsive UI
- Loading skeletons
- Interactive carousels

---

# 🧪 API Testing

Postman can be used to test the backend independently from the React application.

Relevant API areas include:

- `/api/auth`
- `/api/movies`
- `/api/series`
- `/api/genres`
- `/api/favorites`
- `/api/watchlist`
- `/api/users`

<!--
PLACEHOLDER — Add a Postman screenshot here.
Recommended image: ./docs/images/postman-api.png
-->

![Postman API Testing](./docs/images/postman-api.png)

---

# 🖼️ Documentation Images

The README uses image placeholders so screenshots and diagrams can be added later without changing the documentation structure.

Recommended directory:

```text
docs/
└── images/
    ├── desktop-preview.png
    ├── mobile-preview.png
    ├── system-architecture.png
    ├── authentication-flow.png
    ├── database-diagram.png
    ├── responsive-design.png
    └── postman-api.png
```

If an image has not been added yet, the corresponding Markdown reference can remain as a placeholder until the asset is available.

---

# 📁 Project Structure

```text
IMDB_Clone/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/backend/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── entity/
│   │   │   │   ├── exception/
│   │   │   │   ├── repository/
│   │   │   │   ├── request/
│   │   │   │   ├── response/
│   │   │   │   ├── security/
│   │   │   │   ├── service/
│   │   │   │   └── tmdb_client/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── css/
│   │   ├── hooks/
│   │   ├── js/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── eslint.config.js
│
└── README.md
```

---

# 🚀 Future Improvements

Possible future improvements include:

- Removing unused dependencies such as TanStack React Query if it is not introduced later.
- Improving automated backend and frontend tests.
- Adding more comprehensive exception handling.
- Improving API error messages.
- Adding production environment configuration.
- Improving token refresh handling on the frontend.
- Adding Docker support.
- Adding CI/CD.
- Deploying the frontend and backend.
- Improving caching where useful.
- Adding user reviews and ratings.
- Adding more advanced recommendation functionality.
- Adding more profile customization.

---

# 👤 Author

**Hugo Faria**

GitHub: https://github.com/hugofaria25500

---

# 📄 Disclaimer

This project is an independent educational project inspired by the functionality and concept of IMDB.

It is not affiliated with, sponsored by, or endorsed by IMDB.
