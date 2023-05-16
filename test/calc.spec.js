

describe('Számítás tesztelése', ()=> {
    it('Normál1: t: 80, m: 1.8: 24.68', ()=> {
        let actual = calcBodyIndex(80, 1.8);
        let expected= 24.69;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Normál1: t: 100, m: 1.72: 33.80', ()=> {
        let actual = calcBodyIndex(100, 1.72);
        let expected= 33.80;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
});