const obj = new URLSearchParams('username=tina&password=xing&username=irene');
console.log(obj);
console.log(obj.getAll('username'), obj.get('password'));
// obj.set('role', 'admin');
// console.log(obj);

// console.log(obj.toString());
// obj.delete('username');
// console.log(obj);

const urlObj = new URL('https://tina:xing@gmail.google.com:443/web/user/default?page=2&index=10#top');
console.log(urlObj);
console.log(urlObj.searchParams.get('index'));
console.log(urlObj.toString());