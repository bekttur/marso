const { Telegraf } = require("telegraf");
const TOKEN = "6418207132:AAGXIk34bTGyoBzif6FGYgusAR7TZGr6gxc";
const bot = new Telegraf(TOKEN);

const web_link = "https://647b16094cd976692e0817d4--tourmaline-narwhal-cd74b6.netlify.app/";

console.log("start");
bot.start((ctx) => {
    const userId = ctx.from.id;

    // console.log(ctx.from.id);

    ctx.reply(`Добро пожаловать, ${ctx.from.first_name}.`)
})




bot.launch();
