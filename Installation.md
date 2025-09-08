# 🚀 Nirvana AI Installation & Setup Guide

Welcome to Nirvana AI! Follow these steps to install, configure, and run both the backend and frontend applications.

---

## 📦 Prerequisites

- [Bun](https://bun.sh/) installed globally
- Node.js (if required by dependencies)
- API keys for external services (see below)

---

## 🗂️ Project Structure

```powershell

nirvana-ai/
      backend/
      frontend/
   INSTALLATION.md       # guide for installation process
   LICENSE
   README.md         # overview of the project
```

---

## ⚙️ Backend Setup

1. **Navigate to the backend folder:**

   ```powershell
   cd backend
   ```

2. **Install dependencies:**

   ```powershell
   bun install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:

     ```powershell
     cp .env.example .env
     ```

   - Fill in the required API keys and secrets in `.env` (see below for details).
4. **Run the backend server:**

   ```powershell
   bun run start
   ```

   _Or check `package.json` for available scripts._

---

## 🖥️ Frontend Setup

1. **Navigate to the frontend folder:**

   ```powershell
   cd frontend
   ```

2. **Install dependencies:**

   ```powershell
   bun install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:

     ```powershell
     cp .env.example .env
     ```

   - Fill in the required API keys and secrets in `.env` (see below for details).
4. **Run the frontend server:**

   ```powershell

   bun run dev

   ```

   _Or check `package.json` for available scripts._

---

## 🔑 API Keys & Environment Variables

- Both `backend` and `frontend` require environment variables for API keys and secrets.
- Check `.env.example` in each folder for the required variables.
- Typical keys may include:
  - Database connection strings
  - Third-party API keys (e.g., OpenAI, Groq)
  - JWT secrets
- Obtain API keys from the respective service providers and fill them in `.env` files.

---

## 📝 Quick Start Summary

1. Copy `.env.example` to `.env` in both `backend` and `frontend`.
2. Fill in all required values in `.env` files.
3. Install dependencies using Bun in both folders.
4. Start backend and frontend servers using Bun commands.

---

## ❓ Need Help?

- Check the `README.md` files in each folder for more details.
- Refer to the documentation of each API provider for instructions on obtaining keys.

---

Happy coding! ✨
