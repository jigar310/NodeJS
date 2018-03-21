const expect = require('expect');

const utils = require('./utils');

describe("Utils", () => {
    describe("#add", () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44);
           expect(res).toBeA('number');
            
        });
    });
    
    
    it('should async add two numbers', (done) => {
        var res = utils.asyncAdd(33,11,(sum)=>{
            expect(sum).toBe(44).toBeA('number');
            done();
        });
    }); 
    it('should square a number', () => {
        var res = utils.square(5);
    
        expect(res).toBe(25).toBeA('number');
    });
    it('should async square a number', (done) => {
        var res = utils.asyncSquare(6,(res)=>{
            expect(res).toBe(36).toBeA('number');
            done();
        });
    }); 

});


it('should verify firstname and lastname are set', () => {
    var user = {
        location: 'Toronto',
        age: 30
    }
    var res = utils.setName(user,"Jigar Patel");
    expect(user).toEqual(res);
    expect(user).toInclude({
        firstname:'Jigar',
        lastname:'Patel'
    });
    expect(user).toBeA('object');
});

// it('should expect some value', () => {
//     expect({name:'Jigar'}).toEqual({name:'Jigar'});
//     expect([2,3,4]).toInclude(4);
//     expect({name:'Jigar', age: '30'}).toInclude({name:'Jigar'});
// });