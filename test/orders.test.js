import chai from 'chai'
import chaiHttp from 'chai-http'
const expect =  chai.expect
const baseUrl = "http://localhost:8001/api"

/*
{
  "_id": {
    "$oid": "657cda3d1a124ad73c6ccca6"
  },
  "orderClientName": "Ivan Ermakov",
  "orderDescription": "",
  "orderDeliverTo": "Rusianova 13",
  "orderItemsList": "elastico+",
  "orderPrice": 5.49,
  "orderDate": {
    "$date": "2023-12-15T22:59:09.000Z"
  },
  "createdAt": {
    "$date": "2023-12-15T22:59:09.018Z"
  },
  "updatedAt": {
    "$date": "2023-12-15T22:59:09.018Z"
  },
  "__v": 0
}
*/


const orderId = '657cda3d1a124ad73c6ccca6'
chai.use(chaiHttp);
describe("Test", function(){
  var orderBody = {
    "orderClientName": "Mykhailo Mudryk",
    "orderDescription": "",
    "orderDeliverTo": "Minsk, Prilutskogo 42",
    "orderItemsList": "elastico+",
    "orderPrice": 5.49,
    "orderDate": Date()
  }

  it('create a new order', function(done) {
    chai.request(baseUrl)
    .post('/order')
    .send(orderBody)
    .end(function (err, res) {
        expect(res).to.have.status(200);
        //expect(res.body).to.have.property("data");
        expect(res.body.message).to.equal("Order has been successfuly created!");
        //expect(res.body.data.clientName).to.equal(clientBody.clientName);
        //expect(res.body.data.clientPoint).to.equal(clientBody.clientPoint);
        done();
    });
  });

    it('get all orders', function(done) {
        chai.request(baseUrl)
        .get('/order')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            const order = res.body.find(o=>o._id==orderId)
            expect(order).to.be.an("object")
            expect(order).to.have.property("_id")
            done();
        });
    });
    it('get one order', function(done){
        chai.request(baseUrl)
        .get('/order/'+orderId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("_id");
            expect(res.body._id).to.equal(orderId);
            expect(res.body.orderClientName).to.equal("Ivan Ermakov")
            expect(res.body.orderItemsList).to.equal("elastico+")
            expect(res.body.orderPrice).to.equal(5.49)
            done();
        });
    })
    it('update an order', function(done){
        chai.request(baseUrl)
        .put('/order/'+orderId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Order has been successfuly updated!");
            done();
        });
    });
    
    it('delete an order', function(done){
       chai.request(baseUrl)
       .delete('/order/'+orderId)
       .end(function (err, res) {
           expect(res).to.have.status(200);
           expect(res.body.message).to.equal("Order has been successfuly deleted!");
           done();
       });
    });
});
