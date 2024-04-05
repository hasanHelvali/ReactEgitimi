import './App.css';
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import NotFound from './components/NotFound';
import History from './components/History';
import Company from './components/Company';
import Team from './components/Team';
import Members from './components/Members';
import MemberDetail from './components/MemberDetail';
import React from 'react';
// import AboutUs from './components/AboutUs';
const LazyAboutUs=React.lazy(()=>import('./components/AboutUs'))
//Normal import iptal edildi. LazyLoading ile import yapıldı.

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Bu sekilde ki bir router yapısında / dedigimiz icin  u direkt olarak localhost 3000 de calısır demektir. 
        Kullanacagı element olarak da bu sekilde home component i verdim. Bunu da element att ile belirtiyorum.*/}

        {/* <Route path='/aboutUs' element={<AboutUs/>}/> */}
        <Route path='/aboutUs' element={
          <React.Suspense>
            <LazyAboutUs/>
          </React.Suspense>
          }/>
        {/* AboutUs yerine lazyAboutUs kullanıldı. Bu da lazy loading mekanizmasıdır.  */}
        
        <Route path='/mission' element={<Mission/>}/>
        <Route path='/history' element={<History/>}>
          {/* Burada ise nested route yapısına bakalım. */}
            <Route path='company' element={<Company/>}/>
            <Route path='team' element={<Team/>}/>
        </Route>
        <Route path='/members' element={<Members/>}>Members</Route>
        <Route path='/member/:memberId' element={<MemberDetail/>}>Member Detail</Route>
        {/* Burada ise url den bilgi alırız. Ilgili bilgi :memberId de aktarılır. ..../member/1  dendigi zaman url e bu ifade yazar ve MemberDetail yuklenir.
        Daha sonra bu deger MemberDetail dan elde edilir. useParams aracılıgıyla elde edilen bu degere MemberDetail dan gidip bakılabilir. */} 
        <Route path='*' element={<NotFound/>}/>
        {/* Eger hicbir yola uymayan bir url girilirse bu sekilde * a dusulur ve NotFound Component goruntulenir. */}
      </Routes>

    </div>
  );
}

export default App;
