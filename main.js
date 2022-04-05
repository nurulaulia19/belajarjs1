function inputdata() {
  var nim = document.forms["datapribadi"]["nim"].value;
  var nama = document.forms["datapribadi"]["nama"].value;
  var kelas = document.forms["datapribadi"]["kelas"].value;
  var uts = document.forms["datapribadi"]["uts"].value;
  var uas = document.forms["datapribadi"]["uas"].value;
  console.log(uts);
  console.log(uas);
  console.log(typeof uts);
  let nil = (parseInt(uts) + parseInt(uas)) / 2;
  console.log(nil);
  console.log(typeof nil);
  let grade;
  if (parseInt(nil) > 80) {
    grade = "A";
  } else if (parseInt(nil) > 70 && parseInt(nil) <= 80) {
    grade = "B";
  } else if (parseInt(nil) > 60 && parseInt(nil) <= 70) {
    grade = "C";
  } else if (parseInt(nil) > 50 && parseInt(nil) <= 60) {
    grade = "D";
  }
  document.getElementById("myDIV").style.display = "none";
  document.getElementById("tulisanhasil").innerHTML = "HASIL "
  document.getElementById("outputNim").innerHTML = "NIM &emsp; &emsp; &emsp; &emsp;  : " + nim;
  document.getElementById("outputNama").innerHTML = "Nama &emsp; &nbsp; &emsp; &emsp; : " + nama;
  document.getElementById("outputKelas").innerHTML = "Kelas &emsp; &nbsp; &emsp; &nbsp; &nbsp; &nbsp; : " + kelas;
  document.getElementById("outputNilaiUts").innerHTML = "Nilai UTS &nbsp; &emsp; &emsp; : " + parseInt(uts);
  document.getElementById("outputNilaiUas").innerHTML = "Nilai UAS &nbsp &emsp; &emsp;: " + parseInt(uas);
  document.getElementById("outputNilaiRataRata").innerHTML = "Nilai Rata-rata &ensp;: " + parseInt(nil);
  Swal.fire(
    "Selamat " + nama,
    "kamu mendapatkan nilai " + parseInt(nil) + " dengan grade " + grade,
    "success"
  );
}
