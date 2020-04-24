"use strict"
const payrox=require("../payrox-cal/index")
var chai = require('chai'), should = chai.should();
it('payrox-1', function() {
    payrox.add(1000,9,1,4,false,0).should.equal(10000);
});
it('payrox-2',function(){
    payrox.add(1245,12,2,2,true,2).should.equal(20792);
});