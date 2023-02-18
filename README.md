# Weather Application

This project is created using vite with react template for fast and flexible development for developers.
It is integrated with [Auth0](https://auth0.com/docs/libraries/auth0-react) for authenticating users and [OpenWeatherMap](https://openweathermap.org/forecast16#geo16) for weather api.

## Steps on how to run project

After cloning from github repository:

Create a .env file on project directory and copy the values from .env.example file.

Go to [Auth0](https://auth0.com/docs/libraries/auth0-react) and create an account.
After that, create an application choose `Single Page Web Applications` as application type.
Add your vite dev server `http://localhost:<port>` on `Allowed Callback URLS`,`Allowed Logout URLS` and 
`Allowed Web Origins`.
Add `github` as one of Social login provider.
Create an account for [OpenWeatherMap](https://openweathermap.org/forecast16#geo16) to get your API Keys.
Copy your Auth0 `domain`,`clientId`,`openweathermap api` and put it on your env values accordingly:

VITE_APP_AUTH0_DOMAIN=domain
VITE_APP_AUTH0_CLIENT_ID=clientId
VITE_APP_WEATHER_API_KEY=openweathermap api

`npm i`

To install initial packages.

`npm run dev`

Runs the application in dev mode.