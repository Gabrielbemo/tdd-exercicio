const Gerador = require('../lib/gerador');

describe('Gerador', () =>{
    test('faixa ate 1000', () => {
        const g = new Gerador();
        const cliente = {
            nome: 'gabra',
            salario: 500.0,
            idade: 30,
            valorDoEmprestimo: 1000.0
        };
        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(2);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(2000.0);
        expect(props[0].ValorDaParcela).toBeCloseTo(1000.0);
        ///
        expect(props[1].parcelas).toBe(3);
        expect(props[1].total).toBeCloseTo(2000.0);
        expect(props[1].ValorDaParcela).toBeCloseTo(666.66);
    });

    test('faixa de 1000 ate 5000', () => {
        const g = new Gerador();
        const cliente = {
            nome: 'jose',
            salario: 2000.0,
            idade: 40,
            valorDoEmprestimo: 2000.0
        };
        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(3);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(2600.0);
        expect(props[0].ValorDaParcela).toBeCloseTo(1300.0);
        ///
        expect(props[1].parcelas).toBe(4);
        expect(props[1].total).toBeCloseTo(3000.0);
        expect(props[1].ValorDaParcela).toBeCloseTo(750.0);
        ///
        expect(props[2].parcelas).toBe(10);
        expect(props[2].total).toBeCloseTo(3000.0);
        expect(props[2].ValorDaParcela).toBeCloseTo(300.0);
    });

    test('faixa acima de 5000', () => {
        const g = new Gerador();
        const cliente = {
            nome: 'matheus',
            salario: 6000.0,
            idade: 30,
            valorDoEmprestimo: 3000.0
        };
        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(4);
        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(3300.0);
        expect(props[0].ValorDaParcela).toBeCloseTo(1650.0);
        ///
        expect(props[1].parcelas).toBe(4);
        expect(props[1].total).toBeCloseTo(3900.0);
        expect(props[1].ValorDaParcela).toBeCloseTo(975.0);
        ///
        expect(props[2].parcelas).toBe(10);
        expect(props[2].total).toBeCloseTo(3900.0);
        expect(props[2].ValorDaParcela).toBeCloseTo(390.0);
        ///
        expect(props[3].parcelas).toBe(20);
        expect(props[3].total).toBeCloseTo(4200.0);
        expect(props[3].ValorDaParcela).toBeCloseTo(210.0);
    });

    test('idade errada', () => {
        const g = new Gerador();
        expect(() => {
            const cliente = {
                nome: 'igor',
                salario: 6000.0,
                idade: 71,
                valorDoEmprestimo: 3000.0
            };
            const props = g.montarPropostas(cliente);
        }).toThrow('age invalid');
    });

    test('wage invalido', () => {
        const g = new Gerador();
        expect(() => {
            const cliente = {
                nome: 'mat',
                salario: -1.0,
                idade: 69,
                valorDoEmprestimo: 3000.0
            };
            const props = g.montarPropostas(cliente);
        }).toThrow('wage invalid');
    });

    test('financing errada', () => {
        const g = new Gerador();
        expect(() => {
            const cliente = {
                nome: 'hel',
                salario: 6000.0,
                idade: 69,
                valorDoEmprestimo: 88.0
            };
            const props = g.montarPropostas(cliente);
        }).toThrow('financing invalid');
    });
});

