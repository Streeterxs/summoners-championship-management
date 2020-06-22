## Summoners Championship Manager

This project focus on a management of a Championship/Tournament. You can add, update and delete teams and make a championship with them .

## Installation

Simply `npm i` or `yarn install`;

## Running

### Json-server

This project has a self json-server to persist and mock data. You need to create a file named db.json based on the db.example.json (with same object properties) and run `npm run server`. 

### Environment Variables

Create a typescript file named environment.ts. There is too a environment-example.ts that you could take as basis to create yours. 'production' property is type boolean, `don't forget it`.

### Scripts

This project is a MVP and the focus was to create a Championship Management tool. I developed it to be scalable, in order to create a new team you need to select a Player list from the Store Service but no player management is added to the project, so you need to run the Populate script.

#### Don't Forget!
`Create your environment.ts file in environments folder`;

`Create your db.json file based on db-example.json`;

`npm run server THEN npm run populate`;
