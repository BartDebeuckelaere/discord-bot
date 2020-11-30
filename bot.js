


const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.token);

client.on('ready',readykaka);
client.on('message', gotMessage)



function readykaka(){
    console.log('ik ben klaaaar');
}

var zinnen = [

"davey is gey",
"spongebob",
"stopt van janken",
"je muzieksmaak trekt op niets",
"davey is gey",
"davey is gey",
"hou je bek tjeuten",
"jemoeder"

]


function gotMessage(msg){
   //Davey id 701112008413806654
   
   //het mijne


 
        if(701112008413806654 == msg.author.id){
            
            
            var random = Math.floor( Math.random() * zinnen.length);
            var zin = zinnen[random]
            const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'daveyisgey');
            msg.react(reactionEmoji);
            if(zin === "spongebob"){
                var spongebob = msg.content;
                var returnstring = " ";
                for(var i = 0; i < spongebob.length; i++){
                    if(i%2 == 0){
                        
                        var bucht = spongebob.charAt(i).toUpperCase();
                        returnstring += bucht;
                    }
                    else{
                        returnstring += spongebob.charAt(i);
                    }
                    
                }
                msg.channel.send(returnstring);
            }
            else if(zin === "jemoeder"){
                
                var woorden = msg.content.split(" ");
                var longest = woorden.reduce(
                    function (a, b) {
                        return a.length > b.length ? a : b;
                    })
                    msg.channel.send("je moeder is een " + longest);
                }
                else{
                    msg.channel.send(zin);  
                }
            }
        
    }

