const alumnos = [
    {
        id: "a01",
        nombre: "Ane",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 6, recuperacion: null, mH: false },
            { cod: "DWES", nota: 4, recuperacion: 6, mH: false },
            { cod: "DIW", nota: 9, recuperacion: null, mH: true }
        ]
    },
    {
        id: "a02",
        nombre: "Iker",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 7, recuperacion: null, mH: false },
            { cod: "DWES", nota: 5, recuperacion: null, mH: false }
        ]
    },
    {
        id: "a03",
        nombre: "Uxue",
        activo: false,
        modulos: [
            { cod: "DWEC", nota: 8, recuperacion: null, mH: false }
        ]
    },
    {
        id: "a04",
        nombre: "Mikel",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 3, recuperacion: 5, mH: false },
            { cod: "DWES", nota: 6, recuperacion: null, mH: false },
            { cod: "DIW", nota: 7, recuperacion: null, mH: false }
        ]
    },
    {
        id: "a05",
        nombre: "Nerea",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 9, recuperacion: null, mH: true },
            { cod: "DWES", nota: 8, recuperacion: null, mH: false },
            { cod: "DIW", nota: 10, recuperacion: null, mH: true }
        ]
    },
    {
        id: "a06",
        nombre: "Jon",
        activo: false,
        modulos: [
            { cod: "DWEC", nota: 4, recuperacion: null, mH: false }
        ]
    },
    {
        id: "a07",
        nombre: "Leire",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 5, recuperacion: 4, mH: false },
            { cod: "DWES", nota: 5, recuperacion: 7, mH: false }
        ]
    },
    {
        id: "a08",
        nombre: "Asier",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 2, recuperacion: 4, mH: false },
            { cod: "DWES", nota: 3, recuperacion: null, mH: false },
            { cod: "DIW", nota: 4, recuperacion: 5, mH: false }
        ]
    },
    {
        id: "a09",
        nombre: "Maddi",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 10, recuperacion: null, mH: false },
            { cod: "DWES", nota: 9, recuperacion: null, mH: true }
        ]
    },
    {
        id: "a10",
        nombre: "Danel",
        activo: false,
        modulos: [
            { cod: "DWEC", nota: 6, recuperacion: 6, mH: false }
        ]
    },
    {
        id: "a11",
        nombre: "Odei",
        activo: true,
        modulos: [
            { cod: "DWEC", nota: 6, recuperacion: null, mH: false },
            { cod: "DWES", nota: 7, recuperacion: null, mH: false },
            { cod: "DIW", nota: 7, recuperacion: null, mH: true }
        ]
    }
];



const alumnosActivos = alumnos.filter(a => a.activo);

// Nota final por módulo (mejor nota, +0.25 si mH, máx 10)
const notaModuloFinal = modulo => {
    const base = modulo.recuperacion != null
        ? Math.max(modulo.nota, modulo.recuperacion)
        : modulo.nota;

    const conMH = modulo.mH ? Math.min(10, base + 0.25) : base;

    return conMH;
};

// Calcular media de cada alumno
const ranking = alumnosActivos
    .map(alumno => {
        const notasFinales = alumno.modulos.map(notaModuloFinal);
        const suma = notasFinales.reduce((acc, n) => acc + n, 0);
        const media = suma / notasFinales.length;

        return {
            nombre: alumno.nombre,
            media: Number(media.toFixed(2))
        };
    })
    .toSorted((a, b) => b.media - a.media); // desc

// Distribución por tramos
const tramoDe = media => {
    if (media < 5) return "[0,5)";
    if (media < 7) return "[5,7)";
    if (media < 9) return "[7,9)";
    return "[9,10]";
};

const distribucion = ranking.reduce((acc, alumno) => {
    const tramo = tramoDe(alumno.media);
    acc[tramo] = (acc[tramo] || 0) + 1;
    return acc;
}, {
    "[0,5)": 0,
    "[5,7)": 0,
    "[7,9)": 0,
    "[9,10]": 0
});

const resultado = {
    ranking,
    distribucion
};

console.log(resultado);