import React from 'react'
import {useSearchParams}  from 'react-router-dom'
//UseSearchParams ise url uzerinden filtreleme islemlerini yaptıgımız ightiyaclarda kullanılrı.
function Members() {
    const [serachParams,setSearchParams,]=useSearchParams();
    //Burada state e benzer bir kullanım  yapmıs olduk.

    const isActive=serachParams.get('filter')==='active'; 
    /*ilgili filtre useSearchParams ile ne atandıysa  burada o yapıyı elde ettik ve bu yapıda 
    bize gelen filtre key indeki value active mi degil mi bunu sorguladık.*/ 
  return (
    <>
        <div>Members</div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Aktif Uyeler</button>
        {/* Bu butona tıklandıgı zaman yapılacak islem url de sekillenir. 
        Url ise localhost:3000/members?filter=active seklinde degismis olur. Bunu setSearchParams fonksiyonu yapıyor. Url e aktardıgı filtre ise icine 
        aldıgı degerdir.  */}

        <button onClick={()=>setSearchParams()}>Tüm Uyeler</button>
        {/* Bu butpna tıkladıgım zamam ise url e bos bir yapı akltarılır. Yani url 
        localhost:3000/members  seklinde olur. Bu sekilde butun uyelere vs ulasılabilir. */}



        {isActive?<h2>isActive is True || Aktif Uyeler </h2>:<h2>isActive is false || Tüm Uyeler</h2>}
        {/* Normalde elimizde data vs olsaydı aktifse  bu dataları bas degilse basma gibi operasyonlar yapabilirdik fakat suan icin ilgili 
        elde edilen veriyi ekranda yazdırmak da yeterlidir. */}
    </>
  )
}

export default Members