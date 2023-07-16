import Koa from 'koa';
import logger from 'koa-logger';
import Router from '@koa/router';
import { bodyParser } from "@koa/bodyparser";
const app = new Koa();
const router = new Router();
const port = 8989;

// SSE-маршрут:
router.get('/sse', async (ctx) => {
  ctx.req.socket.setKeepAlive(true); // Включение keep-alive соединения
  ctx.req.socket.setTimeout(0); // Отключение таймера ожидания для длительных соединений

  ctx.type = 'text/event-stream';
  ctx.set('Cache-Control', 'no-cache');
  ctx.set('Connection', 'keep-alive');
  ctx.set('X-Accel-Buffering', 'no'); // Отключение буферизации NGINX

  // Функция отправки событий SSE
  const sendEvent = (data, event) => {
    ctx.res.write(`event: ${event || 'message'}\n`);
    ctx.res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Функция закрытия SSE соединения
  const closeConnection = () => {
    ctx.res.end();
    ctx.req.destroy();
  };

  // Отправляем 'Connected' при установлении соединения
  sendEvent('Connected', 'connected');

  // Обработка события SSE через промежуток времени в 1 секунду
  const eventInterval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 10); // Генерация случайного числа от 0 до 10
    sendEvent(randomNumber, 'update');
  }, 1000);

  // Обработка закрытия соединения со стороны клиента
  ctx.req.on('close', () => {
    clearInterval(eventInterval); // Очистка интервала
    closeConnection(); // Закрытие соединения
  });
});

// Настройка маршрутов в приложении:
app.use(router.routes());
app.use(router.allowedMethods());
/*
app.use(logger());
app.use(bodyParser());
app.use(async(ctx) => {
  ctx.body = ctx.request.body;
});
*/

app.listen(port, () => {
  console.log(`Koa server started on localhost:${port}`);
});