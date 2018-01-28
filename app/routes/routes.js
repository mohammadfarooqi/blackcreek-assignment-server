module.exports = function (router) {

  // test route to make sure everything is working http://localhost:8080/api
  router.get('/', (req, res) => {
    return res.json({ message: 'Test Hello World Route!' });   
  });

  router.get('/transferRequests', (req, res) => {
    // scenario 1
    const requests = [
      {
        status: 'new',
        patientName: 'Mohammad',
        drugName: 'Drug Mohammad'
      },
      {
        status: 'inProgress',
        patientName: 'Farooqi',
        drugName: 'Drug Farooqi'
      },
      {
        status: 'archived',
        patientName: 'Mohammad Farooqi',
        drugName: 'Drug Mohammad Farooqi'
      },
    ];

    // scenario 2
    // const requests = [
    //   {
    //     status: 'new',
    //     patientName: 'Mohammad',
    //     drugName: 'Drug Mohammad'
    //   }
    // ];
    // const requests = [];

    return res.json(requests);
  });

  router.get('/prescriptionOrders', (req, res) => {
    // scenario 1
    const requests = [
      {
        status: 'new',
        patientName: 'Ayesha',
        drugName: 'Drug Ayesha'
      },
      {
        status: 'inProgress',
        patientName: 'Izhar',
        drugName: 'Drug Izhar'
      },
      {
        status: 'archived',
        patientName: 'Ayesha Izar',
        drugName: 'Drug Ayesha Izhar'
      },
    ];

    // scenario 2
    // const requests = [];
    // const requests = [
    //   {
    //     status: 'new',
    //     patientName: 'Mohammad',
    //     drugName: 'Drug Mohammad'
    //   }
    // ];

    return res.json(requests);
  });
};