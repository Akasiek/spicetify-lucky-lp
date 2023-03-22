# Lucky LP - Spicetify Extension

Lucky LP is a Spicetify Extension which allows to easily choose random album from your album collection. Just press the "Get Random Saved Album" button located in the header section of album collection page.


## Installation

### Linux/MacOS

```bash
wget https://raw.githubusercontent.com/akasiek/spicetify-lucky-lp/main/LuckyLP.js
mv ./LuckyLP.js ~/.config/spicetify/Extensions/
spicetify config extensions LuckyLP.js
spicetify apply
```

### Windows

```powershell
wget https://raw.githubusercontent.com/akasiek/spicetify-lucky-lp/main/LuckyLP.js
Move-Item -Path .\LuckyLP.js -Destination %appdata%\spicetify\Extensions\
spicetify config extensions LuckyLP.js
spicetify apply
```

## Screeshots

![Screenshot 1](/screenshots/Screenshot_1.png)

## Docs
Check out [Spicetify's docs](https://spicetify.app/docs/development/spicetify-creator/the-basics)!

## Made with Spicetify Creator
- https://github.com/spicetify/spicetify-creator