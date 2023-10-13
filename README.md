# Discord Clear Channel Bot
I have a Laravel application, that sends the errors, that are written to the error log, to a private discord channel. You could also set up a server for yourself to receive these errors. Once I see them though, I dont really want to keep the messages out there. Both for security reasons, and so I can know I've addressed them. This simple bot will allow me to type in that channel ```!clear number_to_clear```, or ```!clear```

The basis of the project was from https://brianmorrison.me/blog/building-a-hello-world-discord-bot/ and the rest was written with Bing Chat (chapt gpt). Use that link to create your bot on the [discord developer website](https://discord.com/developers) creating the url, and registering it with your server.

Since this is pretty damaging, you'll want to only give your bot access to the channels you need it in. Otherwise any user could blow your entire chat history (100 messages at a time).

To run you either run `npm start` which will run and watch for changes to index.js, or you can use `node index.js` which will start the bot. You then have to ctrl+c to exit out.

To host you your bot you can run it locally in a terminal, or use [Heroku(https://www.youtube.com/watch?v=uH3nWjql2IE)], Repl.it, Raspberry Pi, or some other form of hosting like VPS.

Other resources where:
 - https://stackoverflow.com/a/73075344/505829
 - https://stackoverflow.com/a/74151035/505829