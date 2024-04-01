import './App.css';
// import { Course } from './course';
import { Course, Course2, Course3, Course4 } from './course.js';
//Course ile Course.js farketmez. 

import _angular from './images/angular.jpg'; 
import _bootstrap from './images/bootstrap5.png'; 
import _ccsharp from './images/ccsharp.png'; 
import _kompleweb from './images/kompleweb.jpg'; 
//Burada ise birkac resmi projeme import ettim.

import 'bulma/css/bulma.css'

function App() {
  // return (
  //   <div className='app'>
  //   <Course/>
  //   {/* Bu sekilde functional component yapısını ana komponent e gommus olduk. 
  //   Bizim 4 tane card yapımız olmus olsun. Burada 4 tabne alt alta Course yazıp ilgili card ları artırabilirim.
  //   Lakin her card ın resmi, acıklaması vs farklı oluyor. Bu yuzden degisken olan yapıları benım component e yollamam gerekiyor.
  //   Iste bu yapılara da props deniyor. Simdi props yollayalım. */}
  //   </div>
  //   // <>
  //   // <Course/>
  //   // </>
  // );

  return (
    <div className='app'>
    <Course title="Angular" description="Angular bir önyüz uygulama çatısıdır."  />
    <Course title="React" description="React bir önyüz uygulama çatısıdır." />
    <Course title="Vue" description="Vue bir önyüz uygulama çatısıdır." />
    <Course title="Pure"  description="Saf JavaScript bir programlama dilidir." />
    {/* Buradaki her ozellik nir props dur, Angular gibi bir isim, props ismidir. */}


    <Course2 title="Angular" description="Angular bir önyüz uygulama çatısıdır."   />
    <Course2 title="React" description="React bir önyüz uygulama çatısıdır." />
    <Course2 title="Vue" description="Vue bir önyüz uygulama çatısıdır." />
    <Course2 title="Pure"  description="Saf JavaScript bir programlama dilidir." />


    <br></br>
    <br></br>
    <br></br>

    
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">Kurslarım</p>
        {/* <p class="subtitle">Info subtitle</p> */}
      </div>
    </section>
    <br></br>
    <div className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Course3 title="Angular" description="Angular bir önyüz uygulama çatısıdır." image={_angular}   />
          </div>

          <div className='column'>
            <Course3 title="React" description="React bir önyüz uygulama çatısıdır." image={_bootstrap}/>
          </div>

          <div className='column'>
            <Course3 title="Vue" description="Vue bir önyüz uygulama çatısıdır." image={_ccsharp} />
          </div>

          <div className='column'>
            <Course3 title="Pure"  description="Saf JavaScript bir programlama dilidir." image={_kompleweb}/>
          </div>
        </div>
      </div>
    </div>

    <div className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Course4 title="Angular" description="Angular bir önyüz uygulama çatısıdır." image={_angular}   />
          </div>

          <div className='column'>
             <Course4 title="React" description="React bir önyüz uygulama çatısıdır." image={_bootstrap}/>
          </div>

          <div className='column'>
             <Course4 title="Vue" description="Vue bir önyüz uygulama çatısıdır."image={_ccsharp} />
          </div>

          <div className='column'>
              <Course4 title="Pure"  description="Saf JavaScript bir programlama dilidir."  image={_kompleweb}/>
          </div>
        </div>
      </div>
    </div>




    </div>




  );
  
  
  
  {/* Burada ise bulma kutuphanesinden  bir tasarım yapısı kullandık. */}
  
}

export default App;
