import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp);
// const should = chai.should();
const expect = chai.expect;
const baseUrl = "http://localhost:8001/api"

//const itemId =  "6578b8c4f7874af069d19000"
//const clientId = "65771730985807d08779b4cc"
describe('Integration test', function(){
    var combinedBody = {
        "orderClientName": "Ivan Ermakov",
        "orderDescription": "",
        "orderDeliverTo": "Rusianova 641",
        "orderItemsList": "MRT",
        "orderPrice": 7.49,
        "orderDate": Date()
    };
    it('create combined order', function(done) {
      chai
        .request(baseUrl)
        .post('/orderCreate')
        .send(combinedBody)
        .end(function (err, res) {
            expect(res).to.have.status(500);
            //expect(res.body.message).to.equal("Order has been created!");
            done();
        }); 
    });
 });