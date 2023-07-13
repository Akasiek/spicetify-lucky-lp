# LuckyLP - Spicetify Extension

LuckyLP is a Spicetify Extension which allows to easily choose random album from your homepage. Just press the _"Get Random Saved Album"_ button located in the navigation section of home or album page.

> **Note:** This extension only works with 
> - Spicetify v2.20.0 and above
> - Spotify 1.2.15.828.g79f41970 and above

## Installation

### Linux/MacOS

```bash
wget https://raw.githubusercontent.com/Akasiek/spicetify-lucky-lp/main/LuckyLP.js
mv ./LuckyLP.js ~/.config/spicetify/Extensions/
spicetify config extensions LuckyLP.js
spicetify apply
```

### Windows (Powershell)

```powershell
wget https://raw.githubusercontent.com/Akasiek/spicetify-lucky-lp/main/LuckyLP.js
Move-Item -Path .\LuckyLP.js -Destination %appdata%\spicetify\Extensions\
spicetify config extensions LuckyLP.js
spicetify apply
```

## Screeshot

![Screenshot 1](/screenshots/Screenshot_1.png)

![Screenshot 2](/screenshots/Screenshot_2.png)

## Docs
Check out [Spicetify's docs](https://spicetify.app/docs/development/spicetify-creator/the-basics)!

## Made with Spicetify Creator
- https://github.com/spicetify/spicetify-creator
