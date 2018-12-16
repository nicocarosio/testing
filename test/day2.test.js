// Interface stayle BDD
import {expect} from chai;
import day from '../src/day2';

describe('day 2 test', ()=>{
   it('should return undefined if no parameter passed', ()=>{
     expect(day2()).to.be.undefined;

   });
});
