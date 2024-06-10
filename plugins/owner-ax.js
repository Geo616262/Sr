let handler = (m) => m;
handler.all = async function (m) {


  if (/^Ton|Ton|Ton|Ton|Ton|Ton$/i.test(m.text)) {
    var ax = `*¿Para que mencionas a mi papá?*`;


    m.reply(ax, m.chat, { mentions: conn.parseMention(ax)}); 
  return !0
}}
export default handler
