const dataAtual = new Date ();
let dataNiver = prompt ("data do próximo niver :");
dataNiver = new Date (dataNiver + "T23:59:59");
let diasQueFaltam = Math.Floor((dataNiver-dataAtual) /86400000