const logs = [
  { ip: "10.0.0.1", endpoint: "/login",   estado: 200, tiempoMs: 120 },
  { ip: "10.0.0.2", endpoint: "/login",   estado: 401, tiempoMs: 80  },
  { ip: "10.0.0.3", endpoint: "/datos",   estado: 200, tiempoMs: 220 },
  { ip: "10.0.0.2", endpoint: "/login",   estado: 401, tiempoMs: 90  },
  { ip: "10.0.0.2", endpoint: "/login",   estado: 401, tiempoMs: 110 },
  { ip: "10.0.0.1", endpoint: "/datos",   estado: 500, tiempoMs: 300 },
  { ip: "10.0.0.4", endpoint: "/login",   estado: 200, tiempoMs: 70  },
  { ip: "10.0.0.3", endpoint: "/login",   estado: 200, tiempoMs: 95  },
  { ip: "10.0.0.3", endpoint: "/datos",   estado: 500, tiempoMs: 400 },
  { ip: "10.0.0.2", endpoint: "/datos",   estado: 200, tiempoMs: 150 }
];


// 1) IPs sospechosas: 3 o más /login con 401
const intentosLogin401PorIp = logs
  .filter(log => log.endpoint === "/login" && log.estado === 401)
  .reduce((acc, log) => {
    acc[log.ip] = (acc[log.ip] || 0) + 1;
    return acc;
  }, {});

const ipsSospechosas = Object.entries(intentosLogin401PorIp)
  .filter(([ip, intentos]) => intentos >= 3)
  .map(([ip]) => ip);

// 2) Resumen por IP
const resumenPorIpObj = logs.reduce((acc, log) => {
  if (!acc[log.ip]) {
    acc[log.ip] = {
      ip: log.ip,
      peticiones: 0,
      errores5xx: 0,
      tiempoTotal: 0
    };
  }

  const ipData = acc[log.ip];
  ipData.peticiones += 1;
  if (log.estado >= 500 && log.estado < 600) {
    ipData.errores5xx += 1;
  }
  ipData.tiempoTotal += log.tiempoMs;

  return acc;
}, {});

// Pasamos a array y calculamos tiempo medio
const resumenPorIp = Object.values(resumenPorIpObj)
  .map(item => ({
    ip: item.ip,
    peticiones: item.peticiones,
    errores5xx: item.errores5xx,
    tiempoMedio: Number((item.tiempoTotal / item.peticiones).toFixed(2))
  }))
  .toSorted((a, b) => {
    if (b.peticiones !== a.peticiones) {
      return b.peticiones - a.peticiones; // más peticiones primero
    }
    return a.ip.localeCompare(b.ip);      // en empate, IP ascendente
  });

const resultadoLogs = {
  ipsSospechosas,
  resumenPorIp
};

console.log(resultadoLogs);
