# Dùng node.js tạo ra 1 cây thư mục 

## module sử dụng:
* [fs](https://nodejs.org/dist/latest-v7.x/docs/api/fs.html) (module có sẵn trong node.js)

## Phân tích bài toán:
* Đọc từng file trong root folder(thư mục gốc) .
* Nếu file nào trong root folder là 1 folder thì lại đọc tiếp  và làm tới khi nào đọc tất cả các file trong các folder con .
* Toàn bộ quá trình chỉ có đọc file, nếu là thư mục thì đọc tiếp vào bên trong, quá trình này lặp đi lặp lại ==> sử dụng recursive.
* Sử dụng kí tự  '└───' để hiển thị cho đẹp.
* Chú ý khi đọc các file trong thư mục con thì kí tự  '└───' lên lùi vào trong.

## Code demo
```javascript
    const fs = require('fs')
    const dir = './goole_map_vuejs'
    let count = 1
    getItem = (dir) => {
        let tab = '      '
        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            console.log(tab.repeat(count) + '\n' + tab.repeat(count) + '└───' + files[i]);
            let name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()) {
                count++
                getItem(name)
                count--
            }
        }
    }
    getItem(dir);
```
## Các bước tiến hành:
* Đọc file trong root folder(đọc tuần tự):
```javascript
    let files = fs.readdirSync(dir);
```
* Dùng vòng lặp in ra các file có trong root folder: dùng hàm repeat để các file trong folder con lùi vào 1 cấp
```javascript
    console.log(tab.repeat(count) + '\n' + tab.repeat(count) + '└───' + files[i]);
```
* Kiểm tra file có phải là thư mục hay không(file đó phải tồn tại), dùng 2 hàm này trong node.js
```javascript
    fs.statSync(file_name) //kiểm tra file có tồn tại hay không
                           // file_name phải là đường dẫn tuyệt đối
```
```javascript
    isDirectory() // kiểm tra file có là thư mục hay không?
```
* Tham khảo : [link 1](http://stackoverflow.com/questions/42550620/nodejs-fs-statsync-isdirectory-returns-true-for-file), [link 2](http://stackoverflow.com/questions/17699599/node-js-check-exist-file)
 
* Nếu file là thư mục thì  các file con bên trong sẽ phải lùi vào 1 cấp và gọi lại hàm đọc file để đọc tiếp, đọc xong rồi thì phải lùi ra 1 cấp để kiểm tra file tiếp theo.
```javascript
    count++
    getItem(name)
    count--
```
## Cách chạy

* git clone https://github.com/Phambaonam/recursive_tree_direcctory.git
* cd recursive_tree_direcctory
* node index.js

