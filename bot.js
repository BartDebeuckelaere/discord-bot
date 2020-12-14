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
    msg.channel.send("Sorry voor de spam... Ik zal meer manieren hebben in de toekomst...");
    msg.channel.send("Moest ik weer kut doen, kan je \"bot klep toe\" typen en dan zwijg ik...");
}

var lindsayzinnen = [
    "Lindsay, Lindsay, Lindsay,...",
    "Wij kunnen jou niet serieus nemen omdat wij aliens zijn van de planeet Zork mwuhahaha. Allee werk ma wa verder.",
    "Ge hebt een mail... van jen hond!",
    "Ma allee waarom doe je dat nu?",
    "Lang aan bezig geweest? Bonnekes binnenbrengen he.",
    "Mo en zelfs da kan ze nie.",
    "Kalle",
    "Olla eerst toeter gebruiken he",
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

// _play stay rihanna, _play I will wait
var pauzezinnen = [
    "Tot sebiet",
    "K zou t niet te lang maken als k jou was ;)",
    "K ga je missen!",
    "Geniet ervan",
    "Royco soepje drinken he!",
    "Ha... Alsof je t nodig hebt",
    "Ik hou je stoel wel efkes warm",
    "Weeral?!",
    "Ja, en blijf maar weg!"
    
]

var sportzinnen = [
    "Veel plezier!",
    "Succes!",
    "Geniet ervan!",
    "Ik wil ook sporten maar ik ben een bot :'(",
    "Pls come back tho",
    "Ola sportief!"
]


var dankzinnen = [
    "Who the f are you?",
    "Why is there another bot here?",
    "Who let this one in?",
    "I don't like you...",
    "Nobody",
    "Puh...",
    "ha. ha. ha."
]

    
var battzinnen = [
    "Ha loser! ",
    "Koop es een deftige gsm ",
    "Ja laad hem dan op he ",
    "Zeg ma gewoon dat je ons niet moet hebben he ",
    "Pls come back tho "
    
]    

var randomZinnen = [

    "Bart is leuk",
    "Gaan we es op wandeldate?",
    "LAAT ME GERUST!",
    "Heyy, how you doiiin?",
    "je zou beter leren dan spelen met deze domme bot",
    "od je bek",
    "hoe gaat het met je?",
    "bliep bloep",
    "ik ben gemaakt om de mensheid over te nemen"




]
var zwijg = False


function gotMessage(msg){
    if(msg.content === "bot klep toe"){
        zwijg = True
    }
    if not zwijg{
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

        if (270904126974590976 == msg.author.id){
            var random = Math.floor( Math.random() * dankzinnen.length);
            var zin = dankzinnen[random]
            if (zin === "Nobody"){
                msg.channel.send("Nobody thinks you're funny " + msg.author.username);
            }
            else{
                msg.channel.sen(zin)
            }
        }

        // phaedra pesten
        if(428617205572304906 == msg.author.id){
            if(Math.random() < 0.5){
                var random = Math.floor( Math.random() * lindsayzinnen.length);
                var zin = lindsayzinnen[random]
                msg.channel.send(zin);
            }
        }

        // tuur pesten
        if (771814964632748134 == msg.author.id){
            if (Math.random()<0.5){
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
        }

        if (msg.author.id ==622422566081921054) {
            if (msg.content.includes("essiah")){
                msg.channel.send("HE IS THE MESSIAH!")
            }
            else if (Math.random<0.05){
                msg.channel.send("Heiiil Messiah!")
            }
        }

        if(msg.content === "bot zever"){
            msg.channel.send("ik ben een bot gemaakt door de oppermachtige Lars Doise en zijn assistent Bart Debeuckelaere");
        }
        if(msg.content === "bot help"){
            msg.channel.send("dit is wat je allemaal kan doen: bot <Commando>");
            msg.channel.send("commandos: zever | random | suggesties | dab | weetje | klucht | betere_klucht | beste klucht");
            msg.channel.send("Ik lach ook jegens Phaedra hehe (en Tuur ma da moest van Phaedra...)");
            msg.channel.send("Mijn profielfoto is de prombadge van mijn all time favoriete prom");


        }
        if(msg.content === "bot random"){
            var random = Math.floor( Math.random() * randomZinnen.length);
            var zin = randomZinnen[random]
            msg.channel.send(zin);
        }
        if(msg.content === "bot suggesties"){
            msg.channel.send("suggesties mogen altijd doorgestuurd worden naar Bart Debeuckelaere");
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
            msg.channel.send("Lindsay");
        }
        if(msg.content === "bot beste_klucht"){
            fetch('https://icanhazdadjoke.com/slack')
                .then(res => res.json())
                .then(mop => {
                    msg.channel.send(mop.attachments[0].text);
            }).catch(err => console.log(err));
        }
    //    if(msg.content === "bot regine"){
    //        msg.channel.send({files: ["regine.png"]})
    //    }
        if (msg.author.id != 1){
            if(msg.content.includes("pauze") || msg.content.includes("Pauze") || msg.content.includes("10 min") || msg.content.includes("15 min") || msg.content.includes("break")){
                var random = Math.floor( Math.random() * pauzezinnen.length);
                var zin = pauzezinnen[random]
                msg.channel.send(zin);
            }
            if ((msg.content.includes("batterij")|| msg.content.includes("Batterij")||msg.content.includes("battery")|| msg.content.includes("Battery"))&&msg.content.includes("plat")){
                var random = Math.floor( Math.random() * battzinnen.length);
                var zin = battzinnen[random]
                msg.channel.send(zin+ msg.author.username);
            }
            if (msg.content.includes("sport")|| msg.content.includes("Sport")||msg.content.includes("lopen")||msg.content.includes("Lopen")){
                var random = Math.floor( Math.random() * sportzinnen.length);
                var zin = sportzinnen[random]
                msg.channel.send(zin+ msg.author.username);
            }
            if( (msg.content.includes("ik") || msg.content.includes("Ik") || msg.content.includes("k") || msg.content.includes("K")) && msg.content.includes("ga") && msg.content.includes("eten")){
                msg.channel.send("Laat het je smaken " + msg.author.username);
            }
            if(msg.content.includes("slapen")||msg.content.includes("Slapen")||msg.content.includes("slaap")||msg.content.includes("Slaap")||(msg.content.includes("toppen")&&msg.content.includes("vandaag"))){
                msg.channel.send("Slaapwel " + msg.author.username);
            }
            if (msg.content.includes("fack") || msg.content.includes("Fack") || msg.content.includes("FACK") || msg.content.includes("fuck")|| msg.content.includes("Fuck")
               || msg.content.includes("FUCK")|| msg.content.includes("GVD")|| msg.content.includes("gvd")|| msg.content.includes("verdomme")|| msg.content.includes("Godverdomme")
               || msg.content.includes("GODVERDOMME")|| msg.content.includes("Shit")|| msg.content.includes("SHIT")|| msg.content.includes("shit")){
                msg.channel.send("Ola nie vloeken he "+ msg.author.username);
            }
        }
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

        if(Math.random() < 0){

            const channel = client.channels.cache.find(channel => channel.id === "780357807009693746")
            channel.send("Welkom in de studeerkamer <@" + newMember.member.user.id + "> Goed studeren eh en onthou:");
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
        else{
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
              });
        }

    }
    // else{
    //     // User leaves a voice channel
    //     const channel = client.channels.cache.find(channel => channel.id === "700386092595282103")
    //     channel.send("vaarwel Niet te lang pauze pakken eh");
    // }
    
}
