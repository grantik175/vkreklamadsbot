const axios = require('axios')
const token = "c8ab0aa602729d0b4a49921a05ff7583dc5f434746732dc50609b363a37010076cf0cf8a34cf99793e9ee";
const publicIds = [167298476, 161623929, 165420048, 180760688, 16057855, 149951497, 138789875, 62309918, 173437827, 107412143, 31528152, 152606132, 30049821, 93750603];
const message = `
M I N O K O 

Заходите в наше уютное место тут можно:
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
| Отдохнуть или заняться делом 🈶
| Посмотреть фильмы любых жанров 💥
| Поболтать о жизни 💕
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
У нас :
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
| Нету токсичных людей 🎃
| Собственный бот с крутыми функциями 🥑
| Крутые роли для тебя 😜
| Крутая администрация 💫
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
Все для тебя , заходи к нам!
https://discord.gg/xErWasxPTq
`;


function sendMessage(message, public_id) {
    axios.post(
        encodeURI(`https://api.vk.com/method/wall.post?v=5.62&attachments=https://discord.gg/xErWasxPTq&owner_id=-${public_id}&message=${message}&access_token=${token}`),
        {
            headers: {
                "Authorization": `Bearer ${global.token}`
            }
        }).then(r => {
        console.log(`Пост успешно отправлен в сообщество https://vk.com/public${public_id}`)
    })
}

const timer = (ms) => new Promise((res) => {
    setTimeout(() => {
        res();
    }, ms)
})

async function sendTick() {
    for (const publicId of publicIds) {
        await timer(1500);
        sendMessage(message, publicId)
    }
}

async function startVKMessageApp() {
    await sendTick();
    setInterval(async () => {
        await sendTick();
    }, 1000 * 60 * 10, true)
}


startVKMessageApp();
