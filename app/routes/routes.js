module.exports = function (router) {

  // test route to make sure everything is working http://localhost:8080/api
  router.get('/', (req, res) => {
    return res.json({ message: 'Test Hello World Route!' });   
  });
};