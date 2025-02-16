# MFM Ventures - Landing Page

    This project is a landing page for MFM Ventures, a platform inspired by the My First Million podcast. It aims to connect entrepreneurs, developers, and innovators to collaborate on business ideas.

    ## Project Structure

    The project is built using React and Vite. Here's a breakdown of the directory structure:

    ```
    mfmventures/
    ├── index.html          # Main HTML file
    ├── package.json        # Project dependencies and scripts
    ├── src/
    │   ├── App.jsx         # Main application component
    │   ├── components/     # Reusable UI components
    │   │   ├── PodcastIdeaCard.jsx  # Component for displaying podcast ideas
    │   │   └── ProjectCard.jsx      # Component for displaying project ideas
    │   ├── data.js         # Static data for profiles, projects, and podcast ideas
    │   ├── index.css       # Global styles
    │   ├── main.jsx        # Entry point for the React application
    │   └── pages/          # Individual page components
    │       ├── About.jsx
    │       ├── Home.jsx
    │       ├── HowItWorks.jsx
    │       ├── Profile.jsx
    │       ├── Projects.jsx
    │       ├── Signup.jsx      # Placeholder signup page
    │       └── SuccessStories.jsx # Placeholder
    └── vite.config.js    # Vite configuration (if any)

    ```

    ## Running the Project

    1.  **Install Dependencies:**
        ```bash
        npm install
        ```
    2.  **Start the Development Server:**
        ```bash
        npm run dev
        ```
        This will start the Vite development server, and you can view the landing page in your browser.

    ## Limitations (WebContainer Environment)

    This project is currently running in the WebContainer environment, which has significant limitations:

    *   **No Backend:** There is no server-side code (no Node.js, Python, etc.). This means:
        *   No real user authentication (registration, login).
        *   No database storage.  All data is static or stored in the browser's local storage (for simulation purposes only).
        *   No ability to send emails.
        *   No fetching data from external APIs (like the MFM Podcast RSS feed) directly from the client.
    *   **Client-Side Only:** All functionality is limited to what can be done in the browser.

    Because of these limitations, many features are *simulated* or *placeholders*.  For example:

    *   The "Sign Up" form doesn't create real accounts.
    *   The "Contact Us" form doesn't send emails; it logs data to the console and local storage.
    *   "Likes" on projects and podcast ideas are visual toggles only, not persistent.
    * Profile, Projects and Podcast ideas are static.

    ## Future Development (Requires a Backend)

    To become a fully functional application, this project would need a backend server with:

    *   User authentication (e.g., using Passport.js, JWT).
    *   A database (e.g., PostgreSQL, MongoDB) to store user data, projects, etc.
    *   An email sending service (e.g., SendGrid, Mailgun).
    *   API endpoints to handle user interactions, data fetching, and other server-side logic.
    * Ability to fetch data from external APIs.
