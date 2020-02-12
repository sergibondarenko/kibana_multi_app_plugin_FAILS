export default function(server) {
  server.route({
    path: '/api/aplugin/example',
    method: 'GET',
    handler() {
      return { time: new Date().toISOString() };
    },
  });
}
