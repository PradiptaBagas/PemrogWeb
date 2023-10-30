function tugas2(){
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let alamat = document.getElementById("alamat").value;

    let data = nama + " " + email + " " + alamat + "";

    if (nama === "" || email === "" || alamat === "") {
        alert("Anda harus mengisi data degan lengkap");
    }else{
        alert("Data Anda Berhasil Di Input"+ data)
    }
}