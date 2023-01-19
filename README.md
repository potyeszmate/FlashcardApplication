# CAS trial work
## _Flashcard application_

TO DO LIST:

  - Study page: filter card to categories, restore index when last in loop to 0, isLast to boolean
  - favourite flashcards - correct it, connect with firebase
  - Inquiery: only 10 cards view, when clicked all, next (?)

  - CRUD: Edit - show old values
  - CRUD: no stars
  - mobile view
  
  - profile page- name (?)
  - upload image?
  
## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF


## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Versions


| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

## Development


