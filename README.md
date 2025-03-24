# Discord Clear Channel Bot
I have a Laravel application, that sends the errors, that are written to the error log, to a private discord channel. You could also set up an entire server for yourself just to receive these errors. Once I see them though, I don't really want to keep the messages out there. Both for security reasons, and so I can know I've addressed them. This simple bot will allow me to type in that channel ```!clear number_to_clear```, or ```!clear```

The basis of the project was from https://brianmorrison.me/blog/building-a-hello-world-discord-bot/ and the rest was written with Bing Chat (chapt gpt). Use that link to create your bot on the [discord developer website](https://discord.com/developers) creating the url, and registering it with your server.

Since this is pretty damaging, you'll want to only give your bot access to the channels you need it in. Otherwise any user could blow your entire chat history.

To run you either run `npm start` which will run and watch for changes to index.js, or you can use `node index.js` which will start the bot. Note: you then have to ctrl+c to exit out and restart it anytime there are changes.

To host your bot you can: 
- [run it locally](https://stackoverflow.com/questions/4018154/how-do-i-run-a-node-js-app-as-a-background-service#15616912) in a terminal or service
- use [Heroku](https://www.youtube.com/watch?v=uH3nWjql2IE)
- use  [Repl.it](https://www.youtube.com/watch?v=D7OWuslFYCw)
- Raspberry Pi
- Any other form of hosting like VPS

I'm using Replit and UptimeRobot, for now, as Heroku is no longer free. When you set up your UptimeRobot, be sure to prefix the url with `https://`. I will most likely wrap in a service and just run on my desktop, because it isn't that critical. 

## To Run
 - Clone repo
 - `npm update`
 - To test run `node index.js` (ctrl+c to exit)
 - To build docker image `docker build -t clearchannelbot .`
 - To run docker image `docker run -d clearchannelbot` or `docker-compose up -d`
  
## On Ubuntu Docker Server
 - I use git to pull down the code
 - `sudo docker build -t clearchannelbot .`
 - `sudo docker-compose up -d`
 - `sudo docker run --restart=unless-stopped -d clearchannelbot` start and set to autorestart
 - `sudo docker logs clearchannelbot` view log

Other resources were:
 - https://stackoverflow.com/a/73075344/505829
 - https://stackoverflow.com/a/74151035/505829