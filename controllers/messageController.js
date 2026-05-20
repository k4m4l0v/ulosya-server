const easyvk = require('easyvk');

let vkInstance;

easyvk({
    token: process.env.ACCESS_TOKEN
}).then(vk => {
    vkInstance = vk;
})

class messageController {
    async sendMessage(req, res) {
        try {
            const {order, name, phone, address, countStore, sum} = req.body;

            let message = `📦Новый заказ!\n\n`;
            message += `Покупатель: ${name}\n`;
            message += `Телефон: ${phone}\n`;
            message += `Адрес: ${address}\n\n`;
            message += `Заказ:\n`

            order.forEach((item, count) => {
                message += `${item.name} - ${countStore.find(count => count.id === item.id).count} x ${item.price} руб.\n\n`
            })

            message += `Итого: ${sum} руб.`

            const response = await vkInstance.call('messages.send', {
                peer_id: process.env.USER_ID,
                message: message,
                random_id: easyvk.randomId()
            });

            return res.json(response)
        } catch {

        }
    }

    async callback(req, res) {
        try {
            const {name, phone} = req.body;

            let message = `☎️Вас просят перезвонить:\n\n`
            message += `${name}\n`
            message += `${phone}`

            const response = await vkInstance.call('messages.send', {
                peer_id: process.env.USER_ID,
                message: message,
                random_id: easyvk.randomId()
            });

            return res.json(response)
        } catch {

        }
    }
}

module.exports = new messageController();
