import fs from 'fs';

let handler = async (m, { conn }) => {
  let txt = `
   *HOLA 👋🏻 ESTE ES MI MENU*

  *INFORMACIÓN*
  
  *.perfil*
  *.menu*
  *.grupos*
  
  🌙 *IA*
  
  *.remini*
  *.hd*
  *.enhance*
  *.wallpaper <query>*
  *.gemini / ia*
  *.pixai <query>*
  
  🌙 *BUSQUEDAS*

  *.google <query>*
  *.tiktoksearch <query>*
  *.ytsearch <query>*
  *.imagen <txt>*
  *.play <txt>*
  *.ytdlmp3 <txt>*
  *.ytdlmp4 <txt>*
  
  🌙 *JUEGOS*

  *.abrazar <@tag>*
  *.acertijo*
  *.sonrojarse <@tag>*
  *.consejo*
  *.enamorada <@tag>*
  *.meme*
  *.acariciar <@tag>*
  *.personalidad*
  *.piropo*
  *.poquedex <pokemón>*
  *.pregunta*
  *.dormir <@tag>*
  *.triste <@tag>*
  *.top <txt>*
  *.zodiac <2020 02 12>*

  🌙 *JADIBOT*

  *.code*
  *.serbot*
  *.estado*

  🌙 *RPG*

  *.bal*
  *.crimen*
  *.daily*
  *.claim*
  *.depositar*
  *.lb*
  *.retirar*
  *.rob2*
  *.rob*
  *.trabajar*
  *.buy*
  *.buy all*

  🌙 *STICKERS*

  *.qc*
  *.stiker <img>*
  *.sticker <url>*
  *.take <nombre/autor>*

  🌙 *NSFW*

  *.xnxxsearch <txt>*
  *.xnxxdl <link>*

  🌙 *ANIMES*

  *.rule34 <tag>*
  *.waifu*
  *.hentaisearch <query>*
  *.hentaidl <link / id>*

  🌙 *GRUPOS*

  *.link*
  *.grupo open / close*
  *.delete*
  *.demote*
  *.promote*
  *.encuesta <txt / txt>*
  *.hidetag*
  *.infogrupo*
  *.kick*
  *.listadv*
  *.tagall <txt>*
  *.invocar <txt>*

  🌙 *ON / OFF*

  *.enable*
  *.disable*

  🌙 *DESCARGAS*

  *.facebook - fb*
  *.imagen <txt>*
  *.instagram - ig*
  *.tiktok*
  *.ytmp4*
  *.ytmp3*

  🌙 *HERRAMIENTAS*

  *.toanime*
  *.remini*
  *.hd*
  *.enhance*
  *.ssweb*
  *.ss*
  *.trad*

  🌙 *AUDIOS*

  *.bass <vn>*
  *.blown <vn>*
  *.deep <vn>*
  *.earrape <vn>*
  *.fast <vn>*
  *.fat <vn>*
  *.nightcore <vn>*
  *.reverse <vn>*
  *.robot <vn>*
  *.slow <vn>*
  *.smooth <vn>*
  *.tupai <vn>*

  🌙 *CONVERTIDORES*

  *.togifaud*
  *.toimg*
  *.toaudio*

  🌙 *ADMIN*

  *.addprem2 <@tag> <days>*
  *.addyen2 <@tag>*`.trim();

  let db = JSON.parse(fs.readFileSync('src/database/db.json', 'utf-8'));
  let videoUrl = db.links.video[0];

  await conn.sendMessage(m.chat, {
    video: { url: videoUrl },
    caption: txt,
    gifPlayback: true
  }, { quoted: m });

  m.react('✅');
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['main', 'menu', 'menuall', 'menucompleto'];
handler.register = true

export default handler;
