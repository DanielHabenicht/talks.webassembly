# Client Image Conversion

## Problem

Your API supports uploading images, but building support for any image format there is is cumbersome. So why not solve the problem on the client side?
Or the other way around.

## Prerequisites

- Install Angular

## Installation

```bash
npm install --save wasm-imagemagick copyfiles
```

Add some references to your `angular.json` build:

```jsonc
{
  "projects": {
    "WebAssemblyDemo": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            // ...
            "assets": [
              "src/assets",
              {
                "glob": "magick.wasm",
                "input": "./node_modules/wasm-imagemagick/dist",
                "output": "."
              },
              {
                "glob": "magick.js",
                "input": "./node_modules/wasm-imagemagick/dist",
                "output": "."
              }
```

> Supported Formats: https://cancerberosgx.github.io/demos/WASM-ImageMagick/supported-formats/
