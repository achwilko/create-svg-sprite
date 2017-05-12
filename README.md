# create-svg-sprite
Create SVG sprite with no build configuration based on SVG files from given folder.

## Installation
Using NPM:
```
npm install create-svg-sprite --save-dev
```

## Usage
CLI
```
Usage:

    create-svg-sprite [OPTIONS] [ARGS]
    
Options:
    --optimize optimize SVG input files (default false)
    --quiet avoid logs during creation (default false)
    --input INPUT_FOLDER input folder with SVG files to process (default "./icons")
    --output OUTPUT_FOLDER output folder for created SVG sprite (default "./sprite")
    --name SPRITE_NAME SVG sprite name (default "icons")
```

## Examples
- Create and optimize SVG sprite "my_icons.svg" in "static" folder from SVG files placed in "/asssets" folder:
```
create-svg-sprite --optimize --input "assets" --output "static" --name "my_icons"
```
- Create and optimize SVG sprite "icons.svg" in "sprite" folder from SVG files placed in "icons" folder:
```
create-svg-sprite --optimize
```