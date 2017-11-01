import { handleNext } from '../src/state_functions/state_functions';


describe('Addition', () => {
	console.log('H===', handleNext)
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});