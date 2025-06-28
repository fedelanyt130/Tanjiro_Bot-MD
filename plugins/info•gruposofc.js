import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  const namegrupo = 'comunidad Oficial'
  const gp1 = 'https://chat.whatsapp.com/GgPP07cL54iL6C1lrwX0fz' // ← tu link real

  const namechannel = 'Canal del Bot'
  const channel = 'https://whatsapp.com/channel/0029VbApe6jG8l5Nv43dsC2N' // ← tu canal real

  const catalogo = 'https://files.catbox.moe/qs5m6d.jpg' // o './media/grupos.jpg'
  const emojis = '📡'

  let grupos = `
╭─⚔ *⚘ GRUPOS OFICIALES ⚔* 
│
│ ❐ *${namegrupo}*
│ ${gp1}
│
│ ❐ *${namechannel}*
│ ${channel}
│ 
╰─────────────────
`

  await conn.sendFile(m.chat, catalogo, 'grupos.jpg', grupos.trim(), m)
  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
