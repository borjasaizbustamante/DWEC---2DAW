const clientesVetados = ["u03"];
const pedidos = [
  {
    id: 1,
    clienteId: "u01",
    estado: "enviado",
    fecha: "2024-03-15",
    lineas: [
      { sku: "P01", nombre: "Teclado", unidades: 2, precio: 25,  dto: 0.10 },
      { sku: "P02", nombre: "Ratón",   unidades: 1, precio: 15,  dto: 0    }
    ]
  },
  {
    id: 2,
    clienteId: "u02",
    estado: "cancelado",
    fecha: "2024-04-10",
    lineas: [
      { sku: "P01", nombre: "Teclado", unidades: 1, precio: 25, dto: 0.20 }
    ]
  },
  {
    id: 3,
    clienteId: "u03",
    estado: "enviado",
    fecha: "2024-11-01",
    lineas: [
      { sku: "P02", nombre: "Ratón",   unidades: 3, precio: 15, dto: 0    },
      { sku: "P03", nombre: "Alfombrilla", unidades: 1, precio: 10, dto: 0.10 }
    ]
  },
  {
    id: 4,
    clienteId: "u01",
    estado: "enviado",
    fecha: "2024-12-05",
    lineas: [
      { sku: "P01", nombre: "Teclado", unidades: 1, precio: 25, dto: 0    },
      { sku: "P03", nombre: "Alfombrilla", unidades: 2, precio: 10, dto: 0.15 }
    ]
  }
];


const pedidosFiltrados = pedidos
  .filter(pedido =>
    pedido.estado === "enviado" &&
    pedido.fecha.startsWith("2024-") &&
    !clientesVetados.includes(pedido.clienteId)
  );

// Sacamos todas las líneas de todos esos pedidos
const lineasValidas = pedidosFiltrados.flatMap(pedido => pedido.lineas);

// Agregamos por SKU
const agregadosPorSku = lineasValidas.reduce((acc, linea) => {
  const { sku, nombre, unidades, precio, dto } = linea;
  const ingresosLinea = unidades * precio * (1 - dto);

  if (!acc[sku]) {
    acc[sku] = {
      sku: sku,
      nombre: nombre,
      ingresos: 0,
      unidades: 0
    };
  }

  acc[sku].ingresos += ingresosLinea;
  acc[sku].unidades += unidades;

  return acc;
}, {});
// Pasamos a array, ordenamos por ingresos desc y cogemos TOP 3
const topProductos = Object.values(agregadosPorSku)
  .toSorted((a, b) => b.ingresos - a.ingresos)
  .slice(0, 3);

console.log(topProductos);
