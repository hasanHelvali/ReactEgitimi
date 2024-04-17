import React from 'react'
import { useFormik } from 'formik'
import { Link, json } from 'react-router-dom'
import { basicSchema } from '../schemas';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
function GeneralForm() {
    // const formik=useFormik({
    //     initialValues:{
    //         /* useFormik ile formik kutuphanesinin ana nesnesine ulastım ve o nesneyi formik uzerine aldım.
    //         Bu nesne icinde istedigim form nesnesini tanımlayıp html elemanlarına baglayabilirim.*/
            
    //         email:'',
    //         //email seklinde bir html elemanının olacagını varsaydım ve email in degeri baslangıcta bos verildi.
    //         age:''
    //     },
    //     // onSubmit:values=>{
    //     //     alert(JSON.stringify(values,null,2))
    //     // }
    // }); Bu sekilde kullanılablilir. Destructuring kullanarak formik... demeden direkt lazım olan nesneleri de elde edebilirim

    const onSubmit=async (values,actions)=>{
        await new Promise((resolve)=>{
            setTimeout(resolve,1000)
            //Bunu yapmamızın sebebi form submit edilince 1 sanıye kadar olayı bekletmektir.
            actions.resetForm();//form u resetliyoruz.
        })
    }
    const {values,errors,isSubmitting, handleChange,handleSubmit}//bana lazım olanlar bunlar. Destructure ile sadece bunları aldım.
    =useFormik({
        initialValues:{
            /* useFormik ile formik kutuphanesinin ana nesnesine ulastım ve o nesneyi formik uzerine aldım.
            Bu nesne icinde istedigim form nesnesini tanımlayıp html elemanlarına baglayabilirim.*/
            
            email:'',
            //email seklinde bir html elemanının olacagını varsaydım ve email in degeri baslangıcta bos verildi.
            age:'',
            password:'',
            passwordConfirm:''
        },
        // onSubmit:values=>{
        //     alert(JSON.stringify(values,null,2))
        // }
        validationSchema:basicSchema,
        //custom  semamızı buraya vermis olduk.
        
        onSubmit
        //Bu onSubmit askında handleSubmit e tekabul eder.
    });
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            {/* <input type="email"  value={formik.values.email} id='email' placeholder='Email Adresinizi Giriniz'/> */}
            <input type="email"  value={values.email} id='email' placeholder='Email Adresinizi Giriniz' onChange={handleChange} 
            className={errors.email?'input-error':''}/>
            {/* Her degisiklikte onchange ve handlechange tetiklenir. Boylece input a girilen degerler dinamik olarak value ya aktarılır. */}
            
            {errors.email && <p className='error' >{errors.email}</p>}
            {/* email icin errors lar varsa yani hata varsa bunu ekrana yazar. */}
        </div>
        <div>
            <label>Yaş</label>
            <input type="number"  value={values.age} id='age' placeholder='Yaşınızı Giriniz' onChange={handleChange} 
            className={errors.age?'input-error':''}/>
            {errors.age && <p className='error' >{errors.age}</p>}

        </div>
        <div>
            <label>Şifre</label>
            <input type="password"  value={values.password} id='password' placeholder='Şifrenizi Giriniz' onChange={handleChange}
            className={errors.password?'input-error':''}/>
            {errors.password && <p className='error' >{errors.password}</p>}
        </div>
        <div>
            <label>Şifre Tekrar</label>
            <input type="password"  value={values.passwordConfirm} id='passwordConfirm' placeholder='Şifrenizi Doğrulayınız' onChange={handleChange}
            className={errors.passwordConfirm?'input-error':''}/>
            {errors.passwordConfirm && <p className='error' >{errors.passwordConfirm}</p>}
        </div>
        <button disabled={isSubmitting} type='submit'>Kaydet</button>
        {/* isSubmitting form submit edilinceye kadar false deger alır. Yani butonu kilitliyoruz. */}

        <Link className="formLink" to="/portal">
        Portala Git
      </Link>
    </form>
  )
}

export default GeneralForm