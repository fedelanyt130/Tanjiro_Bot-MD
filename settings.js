import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.botNumberCode = '' //Ejemplo: +5493876639332
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['5491126852241', 'Fede', true],
]

global.mods = []
global.prems = []

global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '1.0.1'
global.languaje = 'Español'
global.nameqr = 'Tαɳʝιɾσ-AI'
global.sessions = 'BotSession'
global.jadi = 'JadiBot'

global.banner = 'https://qu.ax/ECoeX.jpeg'
global.botname = 'Tαɳʝιɾσ-AI'
global.author = 'Owner of the bot fede'
global.dev = 'Owner of the bot fede'
global.currency = 'Yenes'
global.botStatus = true;
global.image = fs.readFileSync('./src/img/imagen.jpeg')
global.avatar = fs.readFileSync('./src/img/avatar_contact.jpeg')

global.grupo = 'https://chat.whatsapp.com/DIcOu7REVCLJ3ZpknCwNpO'

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
