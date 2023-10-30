function jumlahkan() {
    var bilangan1 = document.getElementById("bilangan1").value;
    var bilangan2 = document.getElementById("bilangan2").value;

    // Melakukan operasi penjumlahan
    var hasil = parseInt(bilangan1) + parseInt(bilangan2);

    alert("Hasil Penjumlahan " + " =  " + hasil);
}

function ulang() {
    document.getElementById("bilangan1").value = "";
    document.getElementById("bilangan2").value = "";
}