const dic = {first:'a', second:'b', third:"c"};
const {first, ...rest} = dic;
console.log(rest);