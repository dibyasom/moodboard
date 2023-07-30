let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
const app = require("../server");

//Our parent block
describe("Test moodboard", () => {
  // =======================================
  //   Register the User
  // =======================================
  describe("/GET quote", () => {
    it("Get a quote", (done) => {
      chai
        .request(app)
        .get(`/quote`)
        .end((err, res) => {
          // DEBUG
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("quote");
          // lenght of the quote should be at least 3 words
          res.body.quote.split(" ").length.should.be.greaterThan(3);
          done();
        });
    });
  });

  describe("/GET hello-world", () => {
    it("Hello World!", (done) => {
      chai
        .request(app)
        .get(`/`)
        .end((err, res) => {
          // DEBUG
          res.should.have.status(200);
          done();
        });
    });
  });
});
