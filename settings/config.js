
/*─────────────────────────────────────────
  GitHub   : https://github.com/kiuur    
  YouTube  : https://youtube.com/@kyuurzy
  Rest API : https://laurine.site        
  Telegram : https://kyuucode.t.me       
──────────────────────────────────────────*/

const fs = require('fs')

global.owner = "254798570132"
global.linkch = "https://whatsapp.com/channel/0029Vask3D80rGiHtQYeeo27"

global.status = true
global.welcome = true

global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = 'supreme'
global.author = 'https://www.kyuurzy.tech'
global.pairing = "PELERRRR"

global.KEY = "GET APIKEY elevenlabs.io"
global.IDVOICE = "GET ON elevenlabs.io"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
