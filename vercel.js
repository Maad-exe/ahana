// This file helps Vercel determine how to run your application
export default (req, res) => {
  // Import the compiled server code
  import('./dist/index.js')
    .then(module => {
      // Return a message while the server is starting
      res.status(200).send('Server is starting...');
    })
    .catch(err => {
      console.error('Failed to start server:', err);
      res.status(500).send('Server failed to start');
    });
};