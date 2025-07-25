# 🚚 Real-Time Delivery Tracker (versión gratuita)

Este proyecto simula un sistema backend para rastreo de entregas en tiempo real. Está orientado a la visualización de eventos, uso de streaming de datos y mensajería entre usuarios, utilizando herramientas completamente gratuitas.

---

## 📌 Objetivo

- Simular la ubicación en tiempo real de repartidores.
- Enviar mensajes tipo chat entre usuarios y repartidores.
- Visualizar eventos de entregas con dashboards y logs.

---

## 🛠️ Stack Tecnológico

| Componente | Herramienta | Descripción |
|-----------|-------------|-------------|
| Backend API | `NestJS` | Exposición de endpoints y WebSocket |
| Streaming | `Redis Streams` | Para simular Kafka sin costo |
| Base de datos | `PostgreSQL` o `SQLite` | Almacena usuarios, entregas y mensajes |
| WebSocket | `Socket.IO` / `NestJS WebSocket` | Para chat y eventos en tiempo real |
| Dashboards | `Apache Superset` o `Grafana OSS` | Visualización de datos |
| Deploy | `Render`, `Railway`, `Fly.io` | Hosting gratuito (opcional) |

---

## 🔁 Flujo de Datos

1. El simulador publica posiciones GPS del repartidor en Redis Stream.
2. El backend las consume y reenvía por WebSocket a los clientes conectados.
3. Los mensajes entre usuario y repartidor también van por WebSocket (y opcionalmente por Redis).
4. La base de datos guarda historial de entregas y conversaciones.
5. Superset muestra estadísticas como entregas por zona o actividad por hora.

---

## 📈 Métricas y Paneles Sugeridos

- Número de entregas por repartidor.
- Entregas por zona o tipo (simulado).
- Actividad de mensajes por hora.
- Tiempos promedio de entrega.

---

## 🚀 Cómo Ejecutar Localmente

```bash
# Clonar el proyecto
$ git clone https://github.com/renzofajardo/delivery-tracker.git

# Ir al backend
$ cd backend

# Instalar dependencias
$ npm install

# Levantar Redis con Docker
$ docker run -p 6379:6379 redis

# Ejecutar backend
$ npm run start:dev
```
> Este proyecto está pensado para fines educativos y como demostración de habilidades backend aplicadas a arquitecturas de eventos.
