import add from '../../dist/basic.js';
describe('add', function() {

    it('2 + 3 should be 5', () => {
        expect(add(2, 3)).toEqual(5);
    });
});