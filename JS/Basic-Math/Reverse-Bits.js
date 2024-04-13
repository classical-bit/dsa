let count = 32;
let num = 12;
let reverse_num = num;
num >>= 1;
while (num) {
    reverse_num <<= 1;
    reverse_num |= num & 1;
    num >>= 1;
    count--;
}
reverse_num <<= count;

console.log(reverse_num);