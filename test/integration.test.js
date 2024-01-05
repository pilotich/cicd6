// const chai = require('chai');
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// const should = chai.should();
// const expect = chai.expect;
// const baseUrl = "http://localhost:8001/api"

// describe('Integration test', () => {
//     it('create combined order', done => {
//       chai
//         .request(baseUrl)
//         .post('/orderCreate')
//         .end((err, res) => {
//           res.should.have.status(200);
//           expect(res.body.message).to.equal("Order has been created!");
//           done();
//         });
//     });
//  });