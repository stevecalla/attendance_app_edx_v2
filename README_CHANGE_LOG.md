### 6/26/24
- DONE = Add json web token to encrypt user info on front end
- DONE = Add route for /api/students & more
- DONE = Adjust choose file & upload file button functionality
- DONE = Add route for /api/participants
- DONE = Add route for /api/attendance
- DONE = Add fuzzy logic match logic
- DONE = adjust student container to conditionally render properly
- DONE = replace placeholder with react bootstrap component
- DONE = align body of attendance accordian to same width & make font smaller

### 7/22/24
- DONE = add threshold logic to render attendance status (currently hard coded in student roster attendance)
- DONE = return attendance_status from match logic in server (not on front-end)

### 7/23/24
- DONE = disable/enable match & minutes threshold
- DONE = add ability to change match & minutes threshold via input
- DONE = fix match % to send as decimal but render at whole number?
- DONE = add stats to student stats components
- DONE = add status ui/ux
- DONE = refactor studentStats to a single return element
- DONE = refactor studentStats to bootstrap react accordian
- DONe = presentCount / absentCount variables?

### 7/25/24
- DONE = refactor status ui to text area
- DONE = add get attendance functionality
- DONE = add copy button functionality

### 7/26/24
- DONE = adjust upload status icons to change from X to check mark
- DONE = adjust stats so present / absent are 0
- DONE = upload student file before participant file

### 7/27/24
- DONE = add instructions
- DONE = add code library
- DONE = modify copy to clipboard button to show copied?
- DONE = scroll on instructions & code library?
- DONE = move instructions & code data to util file
- DONE = set small gap between attendance and instructions container

### 7/31/24
- DONE = Heroku deploy. Add env variables 
- DONE = removed pwa for now since it wasn't working offline
- DONE = adjust favicon path; without pwa favicon loaded from /public/favicon.ico in dev and /favicon.ico in production
- DONE = added asset folder in public. changed favicon path to ./assets/favicon.ico

### 8/1/24
- DONE = adjust verifyTokenMiddleware if no token to return next() to both exit function and next to generate a new token
- DONE = adjust verifyTokenMiddleware if token expired return res.json(true); to real error message?; adjust manage_token_user_id to accept error; did not do this because an error caused the program to stop working while returning true allowed the token to reset

### SU8/25/24
- DONE = complete 8/1/24 above
- DONE = adjust youtube to no cookie url
- DONE = server crash?
- DONE = adjust "tech-matchup-app@1.0.0"
- DONE = change copy to cursor copy
- DONE = adjust copy icon on status tab similar to the display in the code copy ux

### M8/26/24
- log page events
- middleware-origin in server.js?

- duration incorrect when participant name changes
- add delete button to allow user to delete roster/participants
- add readme
- use context for attendance data?
- remove console logs
- adjust time for token expiration from 1 min to 60 minutew

- check on iphone
- refactor manage_token_user_id utility
- refactor file structure = adjust index.jsx to name of component
  `https://dev.to/vyan/mastering-react-a-developers-guide-to-structuring-your-frontend-code-45a5?context=digest`

- launch in render
- add redis in render = can I see the redis data in render?