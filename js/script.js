function hitungBMI(){
    //data yang diinput
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; //diubah ke meter
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;

    if (weight && height && gender && age){
        const bmi = (weight / (height ** 2)).toFixed(1); //dibuletin jadi satu angka desimal
        let status_berat = "";

    if (bmi < 18.5){
        status_berat = "Kekurangan Berat Badan"
        saran = "menaikkan berat badan hingga batas normal"
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        status_berat = "Normal (ideal)"
        saran = "mempertahankan berat badan"
    }
    else if (bmi >= 25.0 && bmi <= 29.9){
        status_berat = "Kelebihan berat badan"
        saran = "menurunkan berat badan hingga batas normal"
    }
    else{
        status_berat = "Kegemukan (obesitas)"
        saran = "menurunkan berat badan hingga batas normal"
    }

    document.getElementById("hasil-hitung").innerHTML = bmi; //hasil hitung BMI
    document.getElementById("kategori").innerHTML = `Anda berada dalam kategori ${status_berat}`; //hasil pengkategorian status berat
    document.getElementById("saran").innerHTML = `Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan ${saran}.` // saran yang diberikan
    }
    
    else{
        alert("Data belum lengkap") //pemberitahuan kalau ada data kosong
    }
}