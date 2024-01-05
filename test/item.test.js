import chai from 'chai'
import chaiHttp from 'chai-http'
const expect =  chai.expect
//const baseUrl = "http://localhost:8002/api"

/*
{
  "_id": {
    "$oid": "6578b8c4f7874af069d18ffb"
  },
  "itemName": "perorol",
  "itemPrice": 11.99,
  "itemQuantity": "26"
}
*/
const app = "http://localhost:8002/api"
const appServer = app.callback();
const itemId = '6578b8c4f7874af069d18ffb'
chai.use(chaiHttp);
describe("Test", function(){
    it('get all items', function(done) {
        chai.request(baseUrl)
        .get('/item')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            const item = res.body.find(o=>o._id==itemId)
            expect(item).to.be.an("object")
            expect(item).to.have.property("_id")
            done();
        });
    });
    it('get one item', function(done){
        chai.request(baseUrl)
        .get('/item/'+itemId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("_id");
            expect(res.body._id).to.equal(itemId);
            expect(res.body.itemName).to.equal("perorol")
            expect(res.body.itemPrice).to.equal(11.99)
            done();
        });
    })
    // it('post an order', function(done){

    // });
    it('update an item', function(done){
        chai.request(baseUrl)
        .put('/item/'+itemId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Item has been successfuly updated!");
            done();
        });
    });
    it('delete an item', function(done){
        chai.request(baseUrl)
        .delete('/item/'+itemId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("Item has been successfuly deleted!");
            done();
        });
    });
});
