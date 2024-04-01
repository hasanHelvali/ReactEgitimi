//Bu js dosyası her bir kurs card yapısına bir alt yapı olsuturması icin tasarlandı.
//bir snippet ekledim ve rafc yazarak bir functional component yapısını asagıdaki gibi direkt olarak getirebiliyorum.

import React from 'react'




export var imageUrl=""
export const Course = (props) => {//Buradaki Course component bir child component tir. Dolayısıyla AppComponent i parent component yapar.
    //   console.log(props.title);
    // console.log(props.description);
    // return (
    // // <div>Course</div>
    // <>
    // <div>{props.title}</div>
    // <div>{props.description}Course</div>
    // </>
    // //Seklinde ilgili yapıları kullanabilirim.

    const {title,description}=props;
    /*Bu sekilde de bir kullanım yapabilirim. Bu demektir ki props.title i title a esitle. props.description i
     description a esitle demektir.*/
    return (
        <> 
        <div>{title}</div>
        <div>{description}</div> 
        </>
    );
    //Bu sekilde ilgili yapılar degiskenlere atanarak da kullanılabilir.

}
//Ben bu yapıyı tıpkı angular daki bir compoennt mis gibi gidip bir sayfanın icerisine gomebilirim

export const Course2=({title,description})=>{
    /*burada ise farklı bir sekilde props kullanımı yaptık. gonderilen yapıda title ve description var. Bu sebeple ilgili 
    gonderilen yapılar burada map edilirler.*/
    return (
    <>
       <div>{title}--</div> 
       <div>{description}</div> 
    </>
    );
}



export const Course3=({image,title,description})=>{
    /*burada ise farklı bir sekilde props kullanımı yaptık. gonderilen yapıda title ve description var. Bu sebeple ilgili 
    gonderilen yapılar burada map edilirler.*/
    return (
    <>
        <img src={image} />
        <div>{title}--</div> 
        <div>{description}</div> 
    </>
    );
}


export const Course4=(props)=>{
    return (
        <>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props?.image} />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">{props?.title}</p>
                </div>
            </div>

            <div className="content">{props.description}</div>
        </div>
    </div>
        </>
    );
}