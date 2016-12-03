export let io: SocketIO.Server = null;

export function registerSocket(socket: SocketIO.Server): SocketIO.Server {
  socket.on('connect', (socket: SocketIO.Server) => {
    console.log('connected');
  });
  socket.on('disconnect', (socket: SocketIO.Server) => {
    console.log('disconnected');
  });

  return io = socket;
}
