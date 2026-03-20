# Experiment 9: AJAX JSON Data Reader

This experiment demonstrates how to read data from a JSON file using AJAX and display it dynamically on a webpage.

## Files
- `index.html`: User interface with a button and data display section.
- `style.css`: Styling for layout and cards.
- `script.js`: AJAX logic using `XMLHttpRequest` and dynamic DOM rendering.
- `data.json`: Sample JSON dataset.

## How It Works
1. User clicks **Load Data**.
2. JavaScript sends an AJAX GET request to `data.json`.
3. Response is parsed into JavaScript objects.
4. Data is displayed dynamically as cards.

## How to Run
Open `index.html` in a browser using a local server.

Example with VS Code Live Server extension:
- Right click `index.html`
- Click **Open with Live Server**

Note: Some browsers block AJAX requests to local JSON files when opened directly via `file://`.
