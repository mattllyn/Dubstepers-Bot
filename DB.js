//this is the bot script for the new last plug API

var mubBot = {};
var ruleSkip = {};
mubBot.misc = {};
mubBot.settings = {};
mubBot.moderators = {};
mubBot.filters = {};
botMethods = {};
mubBot.pubVars = {};

API.sendChat('/me : Running Dubstepers Script Version 1.0.1');




API.on(API.CHAT, function(data){
        if(data.message.indexOf('!') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            
                
                  
                  if(command[0] = "ping"){
                    API.sendChat("@"+data.from+" PONG");
                  }
                
        }
    });
