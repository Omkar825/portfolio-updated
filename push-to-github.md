# How to Push Your Portfolio to GitHub

## Option 1: If you already have a GitHub repository

1. **Initialize Git (if not already done):**
   ```bash
   git init
   ```

2. **Add your GitHub repository as remote:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Commit your changes:**
   ```bash
   git commit -m "Fix animation issues in Achievements and Projects pages"
   ```

5. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

## Option 2: Create a new GitHub repository

1. **Go to GitHub.com and create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it something like "portfolio" or "omkara-portfolio"
   - Make it public or private as you prefer
   - Don't initialize with README since you already have files

2. **Follow the commands GitHub provides for "push an existing repository":**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Option 3: Using GitHub CLI (if you have it installed)

1. **Create and push in one command:**
   ```bash
   gh repo create omkara-portfolio --public --source=. --remote=origin --push
   ```

## Important Notes:

- Replace `YOUR_USERNAME` with your actual GitHub username
- Replace `YOUR_REPOSITORY_NAME` with your desired repository name
- If you encounter authentication issues, you may need to:
  - Set up a Personal Access Token
  - Configure SSH keys
  - Use GitHub Desktop app

## After pushing:

1. **Enable GitHub Pages (optional):**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select source as "GitHub Actions"
   - Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

2. **Set up automatic deployment:**
   - The portfolio will automatically deploy when you push changes
   - You can also deploy to Netlify, Vercel, or other platforms

Let me know if you need help with any of these steps!