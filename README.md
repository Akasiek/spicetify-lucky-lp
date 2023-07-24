# LuckyLP - Spicetify Extension

LuckyLP is a Spicetify Extension which allows to easily choose random saved album from your library. Just press the "*Get Random Saved Album*" button located in the navigation section of the home or album page.

![luckylp](https://github.com/Akasiek/spicetify-lucky-lp/assets/37307597/6fc31913-2304-4f28-b5c7-fafc6105affc)

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
