import { expect } from 'chai';
import sayHello from '../src/sayHello';

describe('Hello World', () => {
  it('should work', () => {
    expect(sayHello('Jair')).to.equal('Hello Jair');
  });
});
