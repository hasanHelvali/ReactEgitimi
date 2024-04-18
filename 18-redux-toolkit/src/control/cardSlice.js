import {createSlice} from '@reduxjs/toolkit'
//Merkezden dallara ayırdıgım her reducer yapısını burada createSlice ile kullanmam lazım. Dallara bu nesne ile ayırıyoruz.

import courseItems from '../CourseItems';
const initialState={
    cardItems:courseItems,
    quantity:5,
    totalPrice:0
}
const cardSlice=createSlice({
    name:'card',
    initialState,
    reducers:{
        clearCard:(state)=>{
            state.cardItems=[]
        },
        removeItem:(state,action)=>{
            const itemId=action.payload
            state.cardItems=state.cardItems.filter((item)=>item.id!==itemId )
        },
        increase:(state,action)=>{
            const cardItem =state.cardItems.find((item)=>item.id===action.payload)
            cardItem.quantity+=1;
        },
        decrease:(state,action)=>{
            const cardItem =state.cardItems.find((item)=>item.id===action.payload)
            cardItem.quantity-=1;
        },
        calculateTotal:(state,action)=>{
            let total=0;
            let quantity=0;
            state.cardItems.forEach((item)=>{
                total+=item.quantity*item.price
                quantity+=item.quantity
            })
            state.quantity=quantity;
            state.totalPrice=total
        },
    }
})
export const {clearCard,removeItem,increase,decrease,calculateTotal}=cardSlice.actions
//clearCard action ını dısarı actım. Bu action a istedigim yerden ulasıp dispatch ile islemler yapabiliriz.

export default cardSlice.reducer;