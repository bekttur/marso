const { Telegraf } = require("telegraf");
const TOKEN = "6344442467:AAGHuL2eIelzu-FslbXhJgVbw2NlEyQhgXY";
const bot = new Telegraf(TOKEN);


console.log("start");
bot.start((ctx) => {

  // console.log(ctx.from.id);

  ctx.reply(`Добро пожаловать, ${ctx.from.first_name}. В этот чат отправляются заказы от пользователей marso.kz.
  
  Нажмите на кнопку ниже, чтобы открыть сайт!`, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🗂️ Открыть", web_app: { url: "https://marso-telegram-bot.strattonit.ru/" } }],
      ]
    }
  }
  );
});


bot.launch();