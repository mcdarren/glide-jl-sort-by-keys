window.function = function (data, sort_keys, delimiter) {
  if (data.value === undefined) return undefined;
  if (sort_keys.value === undefined) return undefined;
  var delim = delimiter.value ? delimiter.value : ',';

  var data_arr = data.value.split(delim);
  var keys_arr = sort_keys.value.split(delim);
  var obj = {};
  for (i=0; i<data_arr.length; i++) {
    obj[data_arr[i]] = keys_arr[i];
  }
  var sorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]});
  var joined = sorted.join('');

  return joined;

}
