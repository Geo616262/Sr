import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '*No estas en partida*', null, null, [['Iniciar sala de juego', `${usedPrefix}ttt partida nueva`]], m);
  delete conn.game[room.id];
  await m.reply('*Eliminando sesion del juego*');
};
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
