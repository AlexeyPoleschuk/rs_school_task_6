module.exports = function check(str, bracketsConfig) {
  // your solution
  while (str.length > 0){
      tmp_str = str;

          for (var i =0; i < bracketsConfig.length;  i++){
              rpl = bracketsConfig[i].join('');
              str = str.replace(rpl, '');
          }
          if (str == tmp_str){
              return false;
          }
  }
  return true;
}
