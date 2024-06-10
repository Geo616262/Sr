let handler = async (m, { conn, command, text, usedPrefix }) => {
    
	m.react('💟') 
  let menu = `
> ▢ Hola! Soy *SaraBot* 🍒
> ▢ Bot en desarrollo🧑🏻‍💻
> ▢ Sigueme en mi canal❤️
`
 await conn.sendButton2(m.chat, menu, null, 'https://telegra.ph/file/3d5029455ece1116b5885.jpg', [
    ['📚Menu📚', `${usedPrefix}allmenu`],
    ['👤Creador👤', `${usedPrefix}creador`]
  ], null, [['❤️Canal❤️', `${fgcanal}`]], m)
}
handler.help = ['menu']
handler.command = ['menu']

export default handler
