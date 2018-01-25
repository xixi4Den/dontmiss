const { VK } = require('vk-io');

const vk = new VK();

vk.setOptions({
	token: '5fb8cdbf5fb8cdbf5fb8cdbf5e5fd8661a55fb85fb8cdbf05e786f74a5109ba26a481e7'
});

exports.notify = function() {
    vk.api.secure.sendNotification({
        user_id: 48797801,
        message: 'notifier works!'
    });

    return "notifier works!";
}