const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.post('/people', function (req, res) {
  console.log(`\n================ New person ================`);
  console.log(req.body);
  console.log(`============================================\n`);

  // LowDB instance
  const db = router.db;

  // Save person
  db.get('people')
    .push(req.body)
    .write();

  // Return success
  res.jsonp({ status: "success" });
});

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running in PORT 3000');
});
