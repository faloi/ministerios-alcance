const expect = require('chai').expect;
const Estado = require('../app/estado');
const Ministerio = require('../app/ministerio');

let estadoArgentino;
let ministerioCyT;

describe("Un estado", () => {
  beforeEach(() => {
    estadoArgentino = new Estado();
    estadoArgentino.presupuestoAnual = 1000000;
    ministerioCyT = new Ministerio(0.66);
  });

  it("puede abrir un ministerio, asignando el porcentaje de presupuesto anual que le corresponde", () => {
    estadoArgentino.abrirMinisterio(ministerioCyT);
    expect(ministerioCyT.presupuestoAnual).to.eq(6600);
  });

  it("puede ejecutar una partida presupuestaria, poniendo el dinero a disponibilidad del ministerio", () => {
    estadoArgentino.abrirMinisterio(ministerioCyT);
    estadoArgentino.ejecutarPartida(ministerioCyT, 1000);

    expect(ministerioCyT.dineroDisponible).to.eq(1000);
    expect(estadoArgentino.presupuestoEjecutado).to.eq(1000);
  })

});
