const app = require('./script');
const PORT = 3000;
const hostman = '127.0.0.1';



app.listen(PORT, hostman, () => {
    console.log(`App is listning on port => http://${hostman}:${PORT}`);
});