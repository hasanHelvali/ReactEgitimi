import * as yup from 'yup';
//validasyonel kuralları burada tanımlıyoruz. 

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;//password icin regex yani regular expression lar kullanıyoruz. Bu bizim belirledigimiz sifre kuralıdır.
export const basicSchema=yup.object().shape({
    email:yup.string().email('Geçersiz Bir Email Adresi Girildi.!').required('Email Boş Geçilemez!'),
    /*Burada tanımlanan yapıların ismi formik elementleri ile aynı olmak zorundadır. Validasyonlar ilgili fonksiyonlarla belirtilir. Bu 
    validasyonlara uyulmazsa verilecek hata mesajları fonksiyonlara parametre olarak gecilir.  */
    age:yup.number("Yaş Değeri Sayısal Olmalıdır!").positive('Yaş Değeri Negatif Olamaz!').integer("Yaş Değeri Tam Sayı Olmalıdır!")
    .required("Yaş Değeri Boş Geçilemez."),

    password:yup.string("Şifre Bir Text Olmalıdır!").min(5,"Şifre En Az 5 Karakter Olmalıdır!").max(15,"Sifre En "
    +"Fazla 15 Karakter Olmalıdır.").matches(passwordRules,{
        message:"Lütfen En Az Bir Buyuk Bir Kucuk Harf ve Bir Sayı Giriniz!"
    })
    .required("Sifre Boş Geçilemez!"),

    confirmPassword:yup.string("Sifre Bir Text Olmalıdır!")
    .oneOf([yup.ref('password')],"Sifre ve Sifre Dogrulama Degerleri Farklı Olamaz!")//sifre olmalı... ne olmalı? password ile aynı olmalı demis olduk.
    .required("Şifre Doğrulama Boş Geçilemez!")
});

export const advancedSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Kullanıcı adı minunmum 3 karakter uzunluğunda olmadılır')
      .required('Kullanıcı adı zorunludur'),
    university: yup
      .string()
      .oneOf(['bogazici', 'gsu', 'odtü', 'itü'], 'Lütfen üniversitenizi seçiniz')
      .required('Lütfen üniversitenizi seçiniz'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul ediniz'),
  });