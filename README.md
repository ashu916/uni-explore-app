# UniExplore – Study Abroad App

## About the App

This is a simple React Native app built to explore study abroad programs.
It shows a list of universities with basic details, and users can tap on any item to see more information.

The main focus of this project was to keep the UI clean, responsive, and the code structure reusable.

---

## What it does

* Shows a list of universities/programs
* Search universities by name
* View full details on a separate screen
* Bookmark (save) programs
* Handles empty states and loading states
* Works across different screen sizes

---

## Tech used

* React Native (Expo)
* React Navigation
* AsyncStorage (for bookmarks)

---

## How to run

Clone the repo and install dependencies:

```bash
git clone https://github.com/ashu916/uni-explore-app.git
cd uni-explore-app
npm install
npx expo start
```

---

## APK

I have also generated an APK for testing:

https://drive.google.com/file/d/10PWhYB41Sj0LgYUQSQZv3EyBfn3vW0dD/view?usp=sharing

---

## How I approached it

I kept the project structure simple and reusable.
Components like cards and text are separated so they can be reused easily.

Data is currently static JSON, but the structure is ready to switch to API data if needed.

I also added small UX improvements like:

* Empty state (when no results found)
* Loading indicator
* Clean card layout

---

## What I would improve next

* Connect to a real API
* Add filters (country, ranking, etc.)
* Add a separate saved/bookmark screen
* Improve animations and transitions

---

## Author

Ashish
React Native Developer 
