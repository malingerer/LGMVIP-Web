# To-Do List

This project provides a simple web app that helps users create and manage a to-do list.

## Features

- Add, remove, and reset tasks
- Task persistence using localStorage
- Responsive and visually appealing UI

## Usage

1. Open `index.html` in your browser.
2. Enter a task and click the "+" button to add it.
3. View, delete individual tasks, or reset the entire list.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🚀 Deployment Options

You can deploy this project as a static website using any of the following methods:

### 1. GitHub Pages

1. Go to your GitHub repository.
2. Click on **Settings** > **Pages**.
3. Under **Build and deployment**, select the `main` branch and set the folder to `/ (root)`.
4. Click **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repository-name>/`.

**Tip:** Add a `.nojekyll` file to the repo root to avoid Jekyll processing issues.

---

### 2. Netlify

1. Sign up at [Netlify](https://www.netlify.com/).
2. Click "Add new site" > "Import an existing project" or drag-and-drop the folder.
3. Connect your GitHub repo or upload files, set the publish directory to `/` (root).
4. Click "Deploy site".

**Terminal deploy:**
```sh
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

### 3. Vercel

1. Sign up at [Vercel](https://vercel.com/).
2. Click "New Project" and select your repo.
3. Accept the default settings and deploy.

**Terminal deploy:**
```sh
npm install -g vercel
vercel
```

---

### 4. Surge

1. Install Surge CLI:
    ```sh
    npm install -g surge
    ```
2. Deploy from your project directory:
    ```sh
    surge
    ```
3. Enter your email, password, and pick a domain (or accept the default).

---

### 5. Firebase Hosting

1. Install Firebase CLI:
    ```sh
    npm install -g firebase-tools
    ```
2. Login and initialize hosting:
    ```sh
    firebase login
    firebase init hosting
    ```
3. Deploy:
    ```sh
    firebase deploy
    ```

---

Choose any of the above for quick, free deployment of your static web project!
