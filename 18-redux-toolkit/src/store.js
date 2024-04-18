import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './control/cardSlice'

/*Burası bir merkezi yonetim. Burada kontrol etmek istedigimiz her state i reducer lara ayırıyoruz. 
simdilik card i kontrol etmek istedigim icin card reducer kullandım.*/
export const store=configureStore({
    reducer:{
        card:cardReducer
    }
})