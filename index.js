const fs = require('fs')
const dir = './goole_map_vuejs'
let count = 1
getItem = (dir) => {
    let tab = '      '
    let files = fs.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        console.log(tab.repeat(count) + '|' + '\n' + tab.repeat(count) + '└───' + files[i]);
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            count++
            getItem(name)
            count--
        }
    }
}
getItem(dir);

