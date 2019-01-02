var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  ws.on('message', function (chat) {
    const { msg, isUser } = JSON.parse(chat);

    if (isUser) ws.send(msg);

    console.log('received: %s', msg);

  })

  // setInterval(
  //   () => ws.send(`${new Date()}`),
  //   1000
  // )
})