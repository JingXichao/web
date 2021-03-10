import Vue from "vue";

Vue.filter("dateFormat", function (value) {
  const dateData = new Date(value);
  const d_Y = dateData.getFullYear();
  let d_M = dateData.getMonth() + 1;
  let d_D = dateData.getDate();
  if (d_M < 10) {
    d_M = "0" + d_M;
  }
  if (d_D < 10) {
    d_D = "0" + d_D;
  }
  return d_Y + "-" + d_M + "-" + d_D;
});

Vue.filter("NumberFormat", function (value) {
  value = value.toFixed(2);
  var arr = value.toString().split(".");
  var l = arr[0];
  var r = "";
  if (arr.length === 2) {
    r = arr[1];
  }
  l = l.split("").reverse().join("");
  l = l.replace(/(\d{3})/g, function (m, m1) {
    return m1 + ",";
  });
  l = l.split("").reverse().join("");
  if (l[0] === ",") {
    l = l.slice(1);
  }
  return l + "." + r;
});
