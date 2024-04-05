import React from 'react'
import {Link,NavLink} from 'react-router-dom'
//Sayfalar arası yonlendirme icin Link yapısını kullanıyoruz.
function Navbar() {
  return (
    <nav className='mainNav'>
        <Link to="/">Home</Link>
        {/* Home a tıklandıgında home component e bizi gonderecek. */}
        <Link to="/aboutUs">About Us</Link> <hr/>
        {/* Bu sekilde  de ilgili yonlendirmeler icin ise link yapısını kullanıyoruz.
        Eger link lerin css ine mudahale edeceksek bunları <a> etiketlerine gore yapmammız gerekir. Cunku react linkleri a etiketi olarak
         render edilirler.  */}


        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink> <hr/>
        {/* NavLink ler ise iceirsimnde tuttugu linklerin hangisi active ise o linke active class ını atayan bir yapıdır. Link den farkı budur.
        Boylece css kısmında active class ına sahip elemeanlara css atayarak aktif linkleri kullanabilir ve userFriendly bir uygulama yapmıs oluruz.  */}

        <NavLink to="/mission">Mission</NavLink> <hr/>
        <NavLink to="/history">History</NavLink> <hr/>

    </nav>
  )
}

export default Navbar