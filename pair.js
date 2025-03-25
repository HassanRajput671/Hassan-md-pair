const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "HASSAN-MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `┏━━━━━━━━━━━━━━ 
┃𝐇𝐀𝐒𝐒𝐀𝐍-𝐌𝐃
┃𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐒
┃𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 
┃𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 ✅🔥
┗━━━━━━━━━━━━━━━ 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴄʀᴇᴀᴛᴏʀ = 𖥘⚡ 𝐇𝐀𝐒𝐒𝐀𝐍 𝐑𝐀𝐉𝐏𝐎𝐎𝐓•••²⁴³⁰ ⚡𖥘 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴏᴡɴᴇʀ = https://wa.link/mk4uhx
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ᴡʜᴀᴛsᴀᴘᴘ = https://whatsapp.com/channel/0029Vao1lnR1nozDF8jBNh3B
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 ★ || ʙᴏᴛ ʀᴇᴘᴏ = https://github.com/HassanRajput671/HASSAN-MD 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ²⁴³⁰ `; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐇𝐀𝐒𝐒𝐀𝐍 𝐑𝐀𝐉𝐏𝐎𝐎𝐓•••²⁴³⁰",
thumbnailUrl: "https://i.ibb.co/YdSKMhv/6767.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb0y7mxBvvskntdFVp32",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Don't Share with anyone this code use for deploy SHEIKH-ALI-MD*\n\n ◦ *Github:* https://github.com/HassanRajput671/HASSAN-MD.git`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "𝐇𝐀𝐒𝐒𝐀𝐍 𝐑𝐀𝐉𝐏𝐎𝐎𝐓•••²⁴³⁰",
thumbnailUrl: "https://i.ibb.co/YdSKMhv/6767.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb0y7mxBvvskntdFVp32",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await GIFTED_MD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
