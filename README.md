This app was developed in React Native and TailwindCSS.

<img src="https://user-images.githubusercontent.com/5312427/160925217-a5a23309-7fb2-4cbc-9788-b7534374fbdf.png" alt="Snapshot 1" width="320" /> <img src="https://user-images.githubusercontent.com/5312427/160925224-e3aaae4c-b35b-4bac-9204-b192ab9aae95.png" alt="Snapshot 2" width="320" />

## Filesystem structure

```
src/components/app -- app specific components (header, footer, etc)
              /*   -- "pure" components (inputs, button, etc)
   /layouts        -- layouts
   /libs           -- libraries
   /pages          -- pages
   /providers      -- functions to connect async resources (APIs, etc)
   /store          -- Redux store
   App.js          -- Application
```

## Test the app

This app was tested in iOS 15.4

```bash
# install libraries
yarn

# run on a iOS simulator
yarn ios
```
