function kisiSilme(kişi) {
    swal({
        title: "Emin misiniz ?",
        text: "Bu kişiyi silmek istiyor musunuz ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $('#myTable1').DataTable().destroy();
                document.getElementById("body").removeChild(document.getElementById(kişi));
                $('#myTable1')
                    .DataTable()
                    .rows(`#${kişi}`)
                    .remove()
                    .draw();

                swal("Kişiyi sildiniz.", {
                    icon: "success",
                });
            } else {
                swal("Kişi silinmedi!");
            }
        });


}


var i = 6

function kisiEkleme() {
    $('#myTable1').DataTable().destroy();
    let yeniKisi = document.createElement("tr")
    yeniKisi.id = 'kisi' + i
    let ad = document.createElement("td")
    ad.textContent = document.getElementById("isim1").value
    let soyad = document.createElement("td")
    soyad.textContent = document.getElementById("soyisim1").value
    let bölüm = document.createElement("td")
    bölüm.textContent = document.getElementById("bölüm1").value
    let sınıf = document.createElement("td")
    sınıf.textContent = document.getElementById("sınıf1").value
    let yaş = document.createElement("td")
    yaş.textContent = document.getElementById("yaş1").value
    let cinsiyet = document.createElement("td")
    cinsiyet.textContent = document.getElementById("cinsiyet1").value
    let butonYeri = document.createElement("td")
    let buton = document.createElement("button")
    buton.classList.add("kisiSil")
    buton.innerHTML = 'Kişi Sil'
    buton.onclick = function (click) {
        kisiSilme(yeniKisi.id)

    }

    butonYeri.appendChild(buton)
    i++


    yeniKisi.appendChild(ad)
    yeniKisi.appendChild(soyad)
    yeniKisi.appendChild(bölüm)
    yeniKisi.appendChild(sınıf)
    yeniKisi.appendChild(yaş)
    yeniKisi.appendChild(cinsiyet)
    yeniKisi.appendChild(butonYeri)
    document.getElementById("body").appendChild(yeniKisi)
    swal({
        title: "KİŞİ EKLENDİ!",
        text: "Girdiğiniz kişi tabloya eklendi",
        icon: "success",
    });


    document.getElementById("isim1").value = '';
    document.getElementById("soyisim1").value = '';
    document.getElementById("bölüm1").value = '';
    document.getElementById("sınıf1").value = '';
    document.getElementById("yaş1").value = '';
    document.getElementById("cinsiyet1").value = '';

    $('#myTable1').DataTable().draw();


}





// function kisiEkleme() {
// swal("Eklenecek kişinin adı:", {
// content: "input",
// })
// .then((value) => {
// let isim = value
// });
// swal("Eklenecek kişinin soyadı:", {
// content: "input",
// })
// .then((value) => {
// let soyisim = value
// });
// swal("Eklenecek kişinin bölümü:", {
// content: "input",
// })
// .then((value) => {
// let bölüm = value
// });
// swal("Eklenecek kişinin sınıfı:", {
// content: "input",
// })
// .then((value) => {
// let sınıf = value
// });
// swal("Eklenecek kişinin yaşı:", {
// content: "input",
// })
// .then((value) => {
// let yaş = value
// });
// swal("Eklenecek kişinin cinsiyeti:", {
// content: "input",
// })
// .then((value) => {
// let cinsiyet = value
// });
// }
//    buton.addEventListener('onclick',kisiSilme('kisi6'))






