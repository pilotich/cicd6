import chai from 'chai'
import chaiHttp from 'chai-http'
const expect =  chai.expect
const baseUrl = "http://localhost:8000/api"

/*
{
  "_id": {
    "$oid": "65771603985807d08779b4c8"
  },
  "clientName": "Billie Bean",
  "clientOrdersNum": {
    "$numberLong": "2"
  },
  "clientPoint": "Minsk, Lenina 42"
}
*/


const clientId = '65771603985807d08779b4c8'
chai.use(chaiHttp);
describe("Test", function(){
    //var clientId;
    var clientBody = {
            "clientName": "Jeffrey Dahmer",
            "clientOrdersNum": 4,
            "clientPoint": "Minsk, Losika 78"
    };

    it('create a new client', function(done) {
        chai.request(baseUrl)
        .post('/client')
        .send(clientBody)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Client has been successfuly created!");
            //expect(res.body.data.clientName).to.equal(clientBody.clientName);
            //expect(res.body.data.clientPoint).to.equal(clientBody.clientPoint);
            //clientId = res.body._id
            //console.log(clientId)
            done();
        });
    });

    it('get all clients', function(done) {
        chai.request(baseUrl)
        .get('/client')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            const client = res.body.find(o=>o._id==clientId)
            expect(client).to.be.an("object")
            expect(client).to.have.property("_id")
            done();
        });
    });

    it('get one client', function(done){
        chai.request(baseUrl)
        .get('/client/'+clientId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("_id");
            //expect(res.body._id).to.equal(clientBody.clientId);
            expect(res.body.clientName).to.equal("Billie Bean")
            done();
        });
    });

    it('update an client', function(done){
        chai.request(baseUrl)
        .put('/client/'+clientId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Client has been successfuly updated!");
            done();
        });
    });

    it('delete an client', function(done){
        chai.request(baseUrl)
        .delete('/client/'+clientId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Client has been successfuly deleted!");
            // chai.request(baseUrl)
            //     .get('/client/'+clientId)
            //     .end(function (err, res) {
            //         expect(res).to.have.status(404);
            //         expect(res.body.message).to.equal("Can't Delete Contact!");
            //         done();
            //     });
            done();
        });
    });
});
