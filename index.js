const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
formatInt = (number) => `${number >= 0 ? '+' : ''}${number}`

generateFudge = () => Math.floor(Math.random() * 3) - 1;
client.on('message', msg => {
    if (msg.content.startsWith('/fudge')) {
        const param = msg.content.split(' ')[1];
        const bonus = param ? parseInt(param) : 0;
        console.log({ bonus })
        const results = [];
        while (results.length < 4) results.push(generateFudge());
        const total = results.reduce((total = 0, num) => {
            return total += num;
        });

        const rollText = results.map(result => {
            if (result === -1) {
                return ':no_entry:'; ``
            } else if (result === 0) {
                return ':white_large_square:';
            } else {
                return ':white_check_mark:';
            }
        });
        msg.reply(
            `\n Bonus: ${formatInt(bonus)}\n Roll: ${rollText.join(', ')} = ${formatInt(total)}\n Total:  = ${formatInt(bonus + total)}`
        );
    }
});

client.login('NjY0NzExMjc1NjAzMDM0MTIy.XhbEsg.HVjlyzcxf5PjuX-tO00QDRZ8YoU');

// https://discordapp.com/api/oauth2/authorize?client_id=664711275603034122&permissions=1074134080&scope=bot