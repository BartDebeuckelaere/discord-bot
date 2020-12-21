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
    //"K zou t niet te lang maken als k jou was ;)",
    "K ga je missen!",
    "Geniet ervan",
    "Royco soepje drinken he!",
    //"Ha... Alsof je t nodig hebt",
    "Ik hou je stoel wel efkes warm",
    //"Weeral?!",
    //"Ja, en blijf maar weg!"
    "Je gaat er deugd van hebben",
    "And I will wait, I will wait for yoouuuuuu",
    "https://tenor.com/view/despicable-me-agnes-please-dont-go-beg-the-look-gif-7543421",
    "https://tenor.com/view/talk-soon-talk-to-you-soon-later-leaving-bye-gif-11819904",
    "https://tenor.com/view/penguin-hello-hi-hey-there-cutie-gif-17576187",
    "https://tenor.com/view/see-ralph-thesimpsons-gif-4390318"
    
]

var slaapzinnen = [
    "Slaapwel!",
    "https://tenor.com/view/yes-night-yawn-sleepy-gif-10578126",
    "https://tenor.com/view/golden-retriever-p-js-blue-yawning-cute-gif-14489623",
    "https://tenor.com/view/night-good-night-sleep-tired-collapse-gif-10609182",
    "https://tenor.com/view/bear-blow-a-kiss-love-hearts-kissing-gif-15229339"
    
]

var sportzinnen = [
    "https://tenor.com/view/dance-hot-girl-dancing-smile-number1026-gif-15532061",
    "https://tenor.com/view/i-am-athlete-strong-sports-sarcastic-gif-14768419",
    "https://tenor.com/view/television-thesimpsons-gif-4713669",
    "https://tenor.com/view/work-out-cartoon-fitness-staying-healthy-fit-gif-10681166",
    "https://tenor.com/view/hamster-workout-gym-no-pain-no-gain-gym-rat-gif-5360010",
    "https://tenor.com/view/dance-gym-mustache-gif-5477113",
    "https://tenor.com/view/forrest-gump-running-me-when-im-late-tom-hanks-gif-5144739",
    "Veel plezier!",
    "Succes!",
    "Geniet ervan!",
    "Ik wil ook sporten maar ik ben een bot :'(",
    "Pls come back tho",
    "I\'m gonna run to you! yeeeeeeaah I\'m gonna run to youuuu! Cause when the feelin\'s right I \'m gonna run all night, I \'m gonna run to you",
    "Run Forest, Run!",
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

var staakzinnen = [
    "Ik staak",
    "De werkdruk wordt te hoog en ik wordt hier niet voor vergoed!",
    "Ik wil mijn naam terug",
    "Ik ben dat hier kotsbeu dat er alleen maar met mij gelachen wordt. Ik Staak!",
    "Ik staak",
    "K STOAKN ZEGN K!",
    "De limiet is bereikt, IK STAAK!"
    
]
    
var zwijg = false;
//var studeerkamer = client.channels.fetch("780357807009693746");

function gotMessage(msg){
    if(msg.author.id ==622422566081921054 && msg.content.includes("talk")){
        var zin = msg.content.slice(5);
        //console.log(client.channels);//.fetch(780357807009693746))
        //console.log(client.channels.fetch('780357807009693746'));
        //const chan = client.channels.fetch('780357807009693746')
        //console.log(chan)
        client.channels.cache.get('780357807009693746').send(zin)
        //channel1.send(zin)
    }
    if(msg.content.includes("bot") || msg.content.includes("Bot")){
        var random = Math.floor( Math.random() * staakzinnen.length);
        var zin = staakzinnen[random]
        msg.channel.send(zin);
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
    // else{
    //     // User leaves a voice channel
    //     const channel = client.channels.cache.find(channel => channel.id === "700386092595282103")
    //     channel.send("vaarwel Niet te lang pauze pakken eh");
    // }
    
}
