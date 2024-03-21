// Importar el servidor de la aplicación y la conexión a la base de datos
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Sincronizar todos los modelos con la base de datos, forzando la eliminación y recreación de las tablas
conn.sync({ force: true }).then(() => {
  // Iniciar el servidor en el puerto 3001
  server.listen(3001, () => {
    // Mostrar un mensaje en la consola indicando que el servidor está escuchando en el puerto 3001
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
