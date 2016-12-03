export let sockets: SocketIO.Server;

export function registerSocket(socket: SocketIO.Server): SocketIO.Server {
  socket.on('connect', (socket: SocketIO.Server) => {
    console.log('connected');
  });
  socket.on('disconnect', (socket: SocketIO.Server) => {
    console.log('disconnected');
  });

  return sockets = socket;
}
