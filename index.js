const { Client, Intents, Message, Guild } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });
require('dotenv').config()

var malworld
var scarfpin

// warning: broken
function trollKibs() {
    client.on("presenceUpdate", (oldPresence, newPresence) => {
        if (newPresence.user.id != "277620403847954432") return false;
        if (!newPresence.activities) return false;
        newPresence.activities.forEach(activity => {
            if (activity.type == "STREAMING") {
                console.log(`qt_kibs is streaming at ${activity.url}.`);
                pot.send(`@everyone qt_kibs is streaming at ${activity.url}.`);
            }
        });
    });
}

function forceOxfam() {
    setInterval(()=>{
       scarfpin.setNickname("oxfam")
    },3000)
}

function getName (message) {
    let index = -1;
    for (var i = 0; i < message.length-1; i++) {
        if (message[i] == ">" && message[i+1] == " ") {
            index = i+1
        }
    }
    if (index != -1) {
        return message.substring(index,message.length)
    } else {
        return false;
    }
}

function applyNickname(user, name) {
    try {
        user.setNickname(name)
    } catch(err) {
        if (err) {
            console.log(err)
        }
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)

    malworld = client.guilds.cache.get("803050667202838569")
    scarfpin = malworld.members.cache.get("127959390639620097")
    durza = malworld.members.cache.get("215207761334632448")
});

client.on("messageCreate", (message) => {
    if (message.author == durza) {return;}
    
    if (message.toString().startsWith("!nick ")) {
        let mention = message.mentions.users.at(0);
        let name = getName(message.toString())
        if (mention && name.length < 32) {
            let user = malworld.members.cache.get(mention.id)
            applyNickname(user, name)
        } else {
            message.reply("query not good")
        }
    }
});

client.login(process.env.TOKEN);