

describe('Számítás tesztelése', ()=> {
    it('Normál1: t: 80, m: 1.8: i: 24.68', ()=> {
        let actual = calcBodyIndex(80, 1.8);
        let expected= 24.69;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Normál2: t: 100, m: 1.72: i: 33.80', ()=> {
        let actual = calcBodyIndex(100, 1.72);
        let expected= 33.80;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Szélső1: t: 1, m: 1.72: i: 0.33', ()=> {
        let actual = calcBodyIndex(1, 1.72);
        let expected= 0.33;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
    it('Szélső2: t: 1, m: 1: i: 1', ()=> {
        let actual = calcBodyIndex(1, 1);
        let expected= 1;
        expect(actual).toBeCloseTo(expected, 0.9); // 0.9 = megengedett eltérés
    });
});