const easyvk = require('easyvk')

module.exports = easyvk({
  token: `${process.env.ACCESS_TOKEN}`
}).then(async vk => {

  let peerId = process.env.USER_ID;

  let response = await vk.call('messages.send', {
	peer_id: peerId,
	message: "Привет!",
	random_id: easyvk.randomId()
  })

  console.log(response)
})
