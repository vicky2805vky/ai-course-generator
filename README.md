<a id="readme-top"></a>
<br />

<div align="center">
  <a href="https://github.com/vicky2805vky/ai-course-generator">
    <img src="./public/logos/favicon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Magic Quill</h3>

  <p align="center">
    An AI powered course generator
    <br />
    <br />
    <a href="https://magic-quill-ai.vercel.app" target="_blank" >View Demo</a>
    &middot;
    <a href="https://github.com/vicky2805vky/ai-course-generator/issues/new?labels=bug&template=bug-report---.md" target="_blank">Report Bug</a>
    &middot;
    <a href="https://github.com/vicky2805vky/ai-course-generator/issues/new?labels=enhancement&template=feature-request---.md" target="_blank">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

![Magic Quill Home Page](./public/screenshots/screenshot1.png)

Magic Quill is an AI powered that uses AI to simplify course creation for educators, creators, and learners. Input a topic, and it generates a complete course with structure, content, and media.

### 🎯 Key Features

- Clerk Authentication (Email, Google, GitHub)
- Light/Dark Mode
- Course generation via Google Gemini
- YouTube video integration
- Unsplash-powered image search
- Shareable course pages
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React.js][React.js]][React-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
- [![ShadcnUI][ShadcnUI]][ShadcnUI-url]
- [![Redux][Redux]][Redux-url]
- [![Clerk][Clerk]][Clerk-url]
- [![DrizzleORM][DrizzleORM]][DrizzleORM-url]
- [![Neon][Neon]][Neon-url]
- [![GoogleGemini][GoogleGemini]][GoogleGemini-url]
- [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- node js

  > https://nodejs.org/en/download

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vicky2805vky/ai-course-generator.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. create a `.env` file on the root and enter you api keys
   ```js
   VITE_YOUTUBE_API_KEY = "YOUR YOUTUBE API KEY";
   VITE_UNSPLASH_ACCESS_KEY = "YOUR UNSPLASH API KEY";
   VITE_CLERK_PUBLISHABLE_KEY = "YOUR CLERK API KEY";
   VITE_DATABASE_URL = "YOUR NEON DB URL";
   ```
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Sign in or register
2. Activate your account using Google Gemini
3. Click Create Course
4. Fill out the form and confirm
5. Share or learn from your generated course
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, please **fork the repo** and create a pull request. You can also open an issue with the label `"enhancement"`.

Don't forget to star the project — it means a lot!

### Steps to Contribute

1.  Fork the project
2.  Clone your fork (`git clone https://github.com/your-username/repo-name.git`)
3.  Create a feature branch (`git checkout -b feature/AmazingFeature`)
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5.  Push to the branch (`git push origin feature/AmazingFeature`)
6.  Open a pull request

## License

Distributed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

**Vignesh G**

- [vignesh.g.2805@gmail.com](mailto:vignesh.g.2805@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/-vignesh-g)
- [GitHub](https://github.com/vicky2805vky)

Project Link: [https://github.com/vicky2805vky/ai-course-generator](https://github.com/vicky2805vky/ai-course-generator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Special thanks to the resources and tools that made this project possible:

- [Clerk](https://clerk.dev) – Authentication services
- [Shadcn UI](https://ui.shadcn.com) – UI components
- [Tailwind CSS](https://tailwindcss.com) – Styling framework
- [Drizzle ORM](https://orm.drizzle.team) – Database access
- [Neon](https://neon.tech) – Postgres hosting
- [Vercel](https://vercel.com) – Deployment platform
- [Google Gemini API](https://deepmind.google/technologies/gemini/) – AI course generation
- [TubeGuruji – AI course generator tutorial](https://youtu.be/dJPVV0nFFWY?si=Yc5As1hMbczd57IG)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[ShadcnUI]: https://img.shields.io/badge/Shadcn_UI-black?style=for-the-badge&logo=tailwindcss&logoColor=white
[ShadcnUI-url]: https://ui.shadcn.com/
[Redux]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Clerk]: https://img.shields.io/badge/Clerk-3E60F9?style=for-the-badge&logo=clerk&logoColor=white
[Clerk-url]: https://clerk.dev/
[DrizzleORM]: https://img.shields.io/badge/Drizzle_ORM-0C0C0C?style=for-the-badge&logo=database&logoColor=white
[DrizzleORM-url]: https://orm.drizzle.team/
[Neon]: https://img.shields.io/badge/Neon_DB-008AFF?style=for-the-badge&logo=postgresql&logoColor=white
[Neon-url]: https://neon.tech/
[GoogleGemini]: https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white
[GoogleGemini-url]: https://deepmind.google/technologies/gemini/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
