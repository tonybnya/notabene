# Notabene 📓

A full-stack Notes App that allows users to create, edit, delete, and manage their notes with Markdown support and persistent storage. Built using **React**, **Tailwind CSS**, **ShadCN UI**, **FastAPI**, **SQLite**, and **Clerk** for authentication.

---

## Features 🚀

- **User Authentication**: Secure login/signup using [Clerk](https://clerk.com/).
- **Create Notes**: Write notes in Markdown format.
- **Edit Notes**: Modify and update existing notes.
- **Delete Notes**: Remove unwanted notes.
- **Markdown to HTML Conversion**: Automatically convert Markdown to HTML on save.
- **Persistent Storage**: Notes are saved in a database and retrieved even after closing the browser.
- **Timestamps**: View the creation date of each note.

---

## Tech Stack 🛠️

### Front-End

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [ShadCN UI](https://ui.shadcn.com/) - Component library for enhanced UI design.
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering in React.

### Back-End

- [FastAPI](https://fastapi.tiangolo.com/) - High-performance web framework for Python.
- [SQLite](https://www.sqlite.org/index.html) - Lightweight relational database.

### Authentication

- [Clerk](https://clerk.com/) - Authentication and user management.

---

## Getting Started 🏁

Follow these instructions to set up and run the Notes App locally.

### Prerequisites

- Node.js (v18+)
- Python (v3.10+)
- SQLite installed

---

### Back-End Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tonybnya/notabene.git
   cd notabene/backend
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install fastapi uvicorn sqlalchemy sqlite-markdown
   ```

4. Create the database:

   ```bash
   python -c "from database import create_tables; create_tables()"
   ```

5. Run the FastAPI server:

   ```bash
   uvicorn main:app --reload
   ```

The server will be available at `http://localhost:8000`.

### Front-End Setup

1. Navigate to the front-end folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Clerk:

   - Sign up on [Clerk](https://clerk.com/).
   - Add your API keys to the Clerk configuration file.

4. Start the development server:

   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`.

## API Endpoints 🌐

**Base URL:** `http://localhost:8000`

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| POST   | `/notes/`    | Create a new note  |
| GET    | `/notes/`    | Get all the notes  |
| GET    | `/notes/{id}`| Get a specific note|
| PUT    | `/notes/{id}`| Update a note      |
| DELETE | `/notes/{id}`| Delete a note      |

## Contributing 🤝

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
