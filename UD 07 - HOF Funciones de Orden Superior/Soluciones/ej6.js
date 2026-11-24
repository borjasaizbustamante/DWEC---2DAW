const carrito = [
    { sku: "P01", nombre: "Teclado mecánico", unidades: 1, precio: 80, categoria: "perifericos" },
    { sku: "P02", nombre: "Ratón gaming", unidades: 2, precio: 40, categoria: "perifericos" },
    { sku: "P03", nombre: "Monitor 27\"", unidades: 1, precio: 250, categoria: "monitores" },
    { sku: "P04", nombre: "Cable HDMI", unidades: 3, precio: 10, categoria: "cables" }
];

const promociones = [
    { tipo: "porcentaje", categoria: "perifericos", descuento: 0.10 }, // -10% a esa categoría
    { tipo: "envio_gratis", minimo: 300 }, // si importe neto >= 300 → envío 0
    { tipo: "descuento_fijo", sku: "P03", cantidad: 20 } // -20€ al monitor
];

const gastosEnvioBase = 9.90;
const iva = 0.21;



// Helpers para buscar promos
const promosPorcentaje = promociones.filter(p => p.tipo === "porcentaje");
const promosFijas = promociones.filter(p => p.tipo === "descuento_fijo");
const promoEnvio = promociones.find(p => p.tipo === "envio_gratis");

// Calculamos lineas con descuentos
const lineas = carrito.map(linea => {
    const { sku, nombre, unidades, precio, categoria } = linea;

    const bruto = unidades * precio;

    // Descuento por porcentaje de categoría
    const promoCat = promosPorcentaje.find(p => p.categoria === categoria);
    const descCategoria = promoCat ? bruto * promoCat.descuento : 0;

    // Descuento fijo por sku (por unidad)
    const promoFija = promosFijas.find(p => p.sku === sku);
    const descFijo = promoFija ? promoFija.cantidad * unidades : 0;

    const descuentoAplicado = descCategoria + descFijo;
    const subtotalNeto = bruto - descuentoAplicado;

    return {
        sku,
        nombre,
        unidades,
        precioUnitario: precio,
        descuentoAplicado,
        subtotalNeto
    };
});

// Base imponible = suma de subtotales netos
const baseImponible = lineas.reduce((acc, linea) => acc + linea.subtotalNeto, 0);

// Gastos de envío según promo
let gastosEnvio = gastosEnvioBase;
if (promoEnvio && baseImponible >= promoEnvio.minimo) {
    gastosEnvio = 0;
}

// IVA y total
const importeIVA = baseImponible * iva;
const total = baseImponible + importeIVA + gastosEnvio;

const resumenCarrito = {
    lineas,
    resumen: {
        baseImponible: Number(baseImponible.toFixed(2)),
        iva: Number(importeIVA.toFixed(2)),
        gastosEnvio: Number(gastosEnvio.toFixed(2)),
        total: Number(total.toFixed(2))
    }
};

console.log(resumenCarrito);
