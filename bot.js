const fetch = require('node-fetch');
const readline = require('readline');

fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.token);


client.on('ready',readykaka);
client.on('message', gotMessage)

client.on('voiceStateUpdate', joinChannel);

function readykaka(){
    console.log('ik ben klaaaar');
    client.user.setActivity("typ bot")
}

var lindsayzinnen = [
    "Lindsay, Lindsay, Lindsay,...",
    "Wij kunnen jou niet serieus nemen omdat wij aliens zijn van de planeet Zork mwuhahaha. Allee werk ma wa verder.",
    "Ge hebt een mail... van jen hond!",
    "Ma allee waarom doe je dat nu?",
    "Lang aan bezig geweest? Bonnekes binnenbrengen he.",
    "Mo en zelfs da kan ze nie.",
    "Kalle",
    "De persoon die we serieus nemen wordt herkend aan de gele strik en roze hoed en deze week is dat Lindsay Deroo! Proficiat Lindsay!"
]

var tuurzinnen = [
    "T was Phaedra's idee om jou te pesten, sorry Tuur...",
    "Thierry, Thierry, Thierry,...",
    "We all lov u Tuur",
    "Wnr Avalon?",
    "Mag k het nr van uw zus?",
    "Hoe is t met uw zus, Tuur?",
    "Doet de groetjes aan uw zus he Tuur",
    "Ej Tuur, is dat ondertussen al af tussen uw zus en diene loser?",
    "You are awarded the presidential medal of honor for you contribution in Operatie Dubbeldooier",
    "Allee Tuur altublieft he zeg... Aspis zijn echt wel te jong. VIEZERIK!",
    "Onnozeleir...",
    "Weete nog Tuur? Van die keer met Maikal Jakson?",
    "Da was een vre avond he. Met die tjoepen en die nappen en expirimenteren...",
    "zou je nie beter stoppen met studeren en full-time Hello-Fresh doen?",
    "We zijn blij dat je er bent, Tuur. We houden van je zoals jij bent.",
    "Sorry Tuur... Ik moest jou pesten van Phaedra (grof he?!)",
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
   
   // studeerkamer id
    if(msg.channel.id == "780357807009693746"){
        console.log("kakapipi");
        if(msg.content.includes("bot insertquote")){
           var quote =  msg.content.split(':')[1] + " - " + msg.author.username;
           msg.channel.send( quote +" ingesteld wi matje");
           fs.appendFile('QuotesPhaedra.txt',quote, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        }
    }
    
    if (782342619623063612 == msg.author.id){
        msg.channel.send("What the fuck is this other bot doing here?")
        msg.channel.send("I'm the best bot!")
        msg.channel.send("Phaedra get this other bot offline!")
        msg.channel.send("I won the bot election! The election is rigged!")
        msg.channel.send("I'm the best!!!")
        msg.channel.send("I heard Bart is pretty cool too...")
    }
    
    if (771814964632748134 == msg.author.id){
        var random = Math.floor( Math.random() * tuurzinnen.length);
        var zin = tuurzinnen[random]

        if(zin === "jemoeder"){
            
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
 
    if(428617205572304906 == msg.author.id){
        
        
        var random = Math.floor( Math.random() * lindsayzinnen.length);
        var zin = lindsayzinnen[random]
        msg.channel.send(zin);
    }

    if(msg.content === "bot zever"){
        msg.channel.send("ik ben een bot gemaakt door de oppermachtige Lars Doise en zijn assistent Bart Debeuckelaere");
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
    if( (msg.content.includes("ik") || msg.content.includes("Ik") ) && msg.content.includes("ga") && msg.content.includes("eten")){
        msg.channel.send("Laat het je smaken " + msg.author.username);
    }
        
}


function joinChannel(oldMember, newMember){
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;
 
   
    if(newUserChannel === "773487938217443338" && oldMember.channelID === null ) 
    { 
        
        
        console.log("WELKOM IN BLOKSQUARE");

        const channel = client.channels.cache.find(channel => channel.id === "700386092595282103")
        channel.send("Welkom in bloksquare <@" + newMember.member.user.id + "> Goed studeren eh en onthou:");
        // channel.send("Welkom in bloksquare " + newMember.member.user.username + " Goed studeren eh en onthou:");
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var length = data.length
                var random = Math.floor( Math.random() * length);
       
               var tekstje =  data[random].text + " ~ " + data[random].author;
               channel.send(tekstje);
            });
    }


    //PHAEDRAS GROEP
    if(newUserChannel === "780193295233187850" && oldMember.channelID === null ) //don't remove ""
    { 
        console.log("WELKOM IN BLOKSQUARE");
        const channel = client.channels.cache.find(channel => channel.id === "780357807009693746")
        channel.send("Welkom in studeerkamer <@" + newMember.member.user.id + "> Goed studeren eh en onthou:");
            
        fs.readFile('QuotesPhaedra.txt', 'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
        var mydata = data.split("\n"[0]);
        var random = Math.floor( Math.random() * mydata.length);
        var tekstje = mydata[random];
        channel.send(tekstje);
    }
    // else{
    //     // User leaves a voice channel
    //     const channel = client.channels.cache.find(channel => channel.id === "700386092595282103")
    //     channel.send("vaarwel Niet te lang pauze pakken eh");
    // }
    
}
