function calcular() {
  n1 = parseFloat(document.form1.n1.value);
  n2 = parseFloat(document.form1.n2.value);
  op = document.form1.op.value;
  switch (op) {
    case "ad":
      r = n1 + n2;
      break;
    case "su":
      r = n1 - n2;
      break;
    case "mult":
      r = n1 * n2;
      break;
    case "divi":
      r = n1 / n2;
      break;
    case "pot":
      r = 1;
      n12 = n1;
      for (n2; n2 > 1; n2--) {
        r = n1 * n12;
        n1 = r;
      }
      break;
    case "rar":
      r = Math.sqrt(n1);
      break;
  }
  document.form1.result.value = r;
}
