module.exports = client => {
  console.log("The bot is ready!")
  function randStatus() {
        let status = [`Mode Servis`]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "STREAMING", url:"https://twitch.tv/kurisu_ch"});
    }; setInterval(randStatus, 1000)
}
