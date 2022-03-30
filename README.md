This app was developed in React Native and TailwindCSS.

<img src="https://user-images.githubusercontent.com/5312427/160927418-1b0aea84-f7fe-4b8a-8f6c-9c861927867a.png" alt="Snapshot 1" width="320" /> <img src="https://user-images.githubusercontent.com/5312427/160927424-36909e92-eb8d-4c49-93fc-783f9e18e0a8.png" alt="Snapshot 2" width="320" />

## Filesystem structure

```
src/components/app -- app specific components (header, footer, etc)
              /*   -- "pure" components (inputs, button, etc)
   /layouts        -- layouts
   /libs           -- libraries
   /pages          -- pages
   /providers      -- functions to connect to async resources (APIs, etc)
   /store          -- Redux store
   App.js          -- Application
```

## Test the app

This app was tested on iOS 15.4

```bash
# install libraries
yarn

# run on a iOS simulator
yarn ios
```
