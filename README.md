<p align="center">
	<a href="https://github.com/ClarkThyLord/Spot-Map">
		<img width="128px" src="./src/static/Spot-Map.svg?sanitize=true" alt="" />
		<h1 align="center">
			Spot-Map
		</h1>
	</a>
</p>

<p align="center">
	<a href="https://github.com/ClarkThyLord/Spot-Map/releases">
		<img src="https://img.shields.io/badge/Version-0.0.0-green.svg" alt="Version">
	</a>
	<a href="https://github.com/ClarkThyLord/Spot-Map/blob/master/LICENSE">
		<img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="License">
	</a>
</p>

> Spot-Map, providing you and your family with the information needed to make the right choice.

---

# About
You'll find all of the source code, assets and anything else related to Spot-Map, the project entry for the COVID-19 Data Challenge, in this repository.

## Description
The unfortunate truth that we as a society have to come to terms with, is that during the return to the new normality, there will be several people who underestimate the effect and reach of the virus. Due to this problem we offer a simple yet effective solution, Spot-Map.

Spot-Map is a lightweight progressive web application designed to ensure safe traffic around small businesses during the COVID-19 pandemic. While this crisis has taken its toll on local restaurants and shops by restricting customer capacity, the need for a community supported data map to plan secure travels is stronger than ever. Through user created “pings”, a spot map of the location's activities is generated, allowing users to make well-informed decisions of when and where to travel.

## [COVID-19 Data Challenge: Navigating Life and Work in Border Communities](https://mexico.ucsd.edu/initiatives/border-solutions/data-challenge.html)

Communities along the U.S.-Mexico border have been hard hit by COVID-19. While researchers race to develop a vaccine, life and work must continue. How can we confidently and transparently decide what is safe? Can we more efficiently mine existing data and/or gather new data for analysis to assess the risks of activities in different spheres of life, and thus more effectively direct resources and interventions? Specifically, how can we better understand risk levels in real-time for different situations and communicate them to the public?

# Usage
This project is based of the [Framework7 - Vue - Webpack Cordova Template](https://github.com/caiobiodere/cordova-template-framework7-vue-webpack) template, and is built with three platforms in mind:
 - ios
 - android
 - browser

## Setup
Install required node packages:
```cmd
> npm install
```

Install required cordova plugins:
```cmd
> cordova prepare
```

Check requirements for platforms:
```cmd
> cordova requirements
```

## Commands
| Command | Description |
| ------- |:-----------:|
| npm run [platform] | Run platform(s) with live reload |
| cordova build [platform] | Build for platform(s) |

## Known Issues
 - [JDK 8 ('1.8.*')! Detected version: null](https://github.com/apache/cordova-android/issues/1040), small but annoying bug where cordova doesn't read the JDK version even when system variables are set, the fix is to remove and add the android platform, run the following commands:
   - `cordova platforms remove android`
   - `cordova platfroms add android`

 - Android Live-Reload, running android with live-reload won't connect to the dev server, there currently isn't a fix for this, you'll have to rerun the command to refresh the application.

---

<p align="center">
	<a href="https://github.com/caiobiodere/cordova-template-framework7-vue-webpack" style="vertical-align: middle;">
		Project Template
	</a>
</platform>
