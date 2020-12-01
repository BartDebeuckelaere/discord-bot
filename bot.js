

const fetch = require('node-fetch');

const Discord = require('discord.js');
const client = new Discord.Client();
//client.login(process.env.token);
client.login('NzgyMzQyNjE5NjIzMDYzNjEy.X8KzVw.WkWjqzvARYTobB_vXeYVNlLxTXQ');
client.on('ready',readykaka);
client.on('message', gotMessage)



function readykaka(){
    console.log('ik ben klaaaar');
    client.user.setActivity("typ bot")
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
var randomZinnen = [

    "davey is gey",
    "kakapipi",
    "je zou beter leren dan spelen met deze domme bot",
    "od je bek",
    "hoe gaat het met je?",
    "bliep bloep",
    "ik ben gemaakt om de mensheid over te nemen"




]


function gotMessage(msg){
   //Davey id 701112008413806654
   
   //het mijne 512340561215356928


 
    if(701112008413806654 == msg.author.id){
        
        
        var random = Math.floor( Math.random() * zinnen.length);
        var zin = zinnen[random]
        const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'daveyisgay');
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

    if(msg.content === "bot zever"){
        msg.channel.send("ik ben een bot gemaakt door de oppermachtige lars doise");
    }
    if(msg.content === "bot help"){
        msg.channel.send("dit is wat je allemaal kan doen: bot <Commando>");
        msg.channel.send("commandos: zever | random | suggesties | dab | weetje | klucht | betere_klucht | beste klucht | regine");
        msg.channel.send("De bot pest ook davy automatisch cool eh");
        msg.channel.send("Mijn profielfoto is een bot");

        
    }
    if(msg.content === "bot random"){
        var random = Math.floor( Math.random() * zinnen.length);
        var zin = randomZinnen[random]
        msg.channel.send(zin);
    }
    if(msg.content === "bot suggesties"){
        msg.channel.send("suggesties mogen altijd doorgestuurd worden naar mijn ultieme maker Lars Doise");
    }
    if(msg.content === "bot dab"){
        msg.channel.send( {files: ["https://upload.wikimedia.org/wikipedia/commons/4/47/Do_the_Dab.jpg"]});
        msg.channel.send( {files: ["https://media.gifs.nl/dab-gifs-ObWrhc.gif"]});
        msg.channel.send({files: ["lars_dab.jpg"]})

       
    }
    if(msg.content === "bot weetje"){
        fetch('https://uselessfacts.jsph.pl/random.json?language=en', {method: 'GET'})
        .then(res => res.json())
        .then(weetje => {
            msg.channel.send(weetje.text);
        }).catch(err => console.log(err));
    }
    if(msg.content === "bot klucht"){
        msg.channel.send("lars zijn presentatie straks omdat hij nu bezig is geweest met die stomme bot ier");
    }
    if(msg.content === "bot betere_klucht"){
        msg.channel.send("odisee hogeschool");
    }
    if(msg.content === "bot beste_klucht"){
        fetch('https://icanhazdadjoke.com/slack')
            .then(res => res.json())
            .then(mop => {
                msg.channel.send(mop.attachments[0].text);
        }).catch(err => console.log(err));
    }
    if(msg.content === "bot regine"){
        msg.channel.send({files: ["regine.png"]})

    }
        
}

