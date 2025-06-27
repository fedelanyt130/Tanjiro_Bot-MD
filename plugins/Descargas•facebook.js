await conn.sendMessage(m.chat, {
      video: { url: download },
      caption: `✦ *${botname}*`, 
      contextInfo: {
        forwardingScore: 2,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363392482966489@newsletter', 
          newsletterName: 'TANJIRO-AI', 
          serverMessageId: -1
        }
      }
    }, { quoted: m });
