import yts from 'yt-search'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `${mssg.example} *${usedPrefix + command}* It's You `
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
 await m.react('⏱') 
  let play = 
`> *Titulo:* ${vid.title}
> *Duracion:* ${vid.timestamp}`
  
 let listSections = [];             

listSections.push({

title: 'Selecciona tu descarga',

rows: [{ header: "🎶Audio", title: "", id: `${usedPrefix}fgmp3 ${url}`, description: `${vid.title}\n` }, { header: "📽️Video", title: "", id: `${usedPrefix}fgmp4 ${url}`, description: `${vid.title}\n`}

]}); 
  
  
  await conn.sendList(m.chat, play, null, `Click Aqui`, thumbnail, listSections, m );
  
 /*await conn.sendButton2(m.chat, play, author, thumbnail, [
    ['🎶 MP3', `${usedPrefix}ytmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}ytmp4 ${url}`],
    ['🎶 📁 MP3 DOC', `${usedPrefix}ytmp4doc ${url}`],
    ['🎥 📁 MP4 DOC', `${usedPrefix}ytmp4doc ${url}`]
  ], null, [['Canal', `${canal}`]], m)*/
 await m.react('✅') 
}
handler.help = ['play'].map((v) => v + " <txt>");
handler.command = ['play']
handler.disabled = false

export default handler