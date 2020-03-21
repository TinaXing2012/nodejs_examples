const buffer1 = Buffer.alloc(8);
console.log(buffer1);

const buffer2 = Buffer.from([1, 4, 7, 2, 8, 9]);
console.log(buffer2);

const buffer3 = Buffer.from('This is Miss Xing', 'utf-8');
console.log(buffer3);
console.log(buffer3.toString());