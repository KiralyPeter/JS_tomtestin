
describe('Input tesztelése', ()=> { //x-el ki lehet zárni a tesztet..
    xit('Szám', ()=> {
        let actual = checkInput(30);
        expect(actual).toBe(true);
    });
    xit('Nem szám', ()=> {
        let actual = checkInput('aaa');
        expect(actual).toBe(false);
    });
    xit('0 input', ()=> {
        let actual = checkInput(0);
        expect(actual).toBe(false);
    });
    it('-5', ()=> {
        let actual = checkInput(-5);
        expect(actual).toBe(false);
    });
});