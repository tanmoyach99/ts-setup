


import { Schema, model } from 'mongoose';
import { TBook } from './books.interface';




const bookSchema = new Schema<TBook>({
   title:{
    type:String,required:true
   },
   author:{
    type:String,required:true
   },
   price:{
    type:Number,required:true
   },
   category:["Fiction" ,"Science" ,"SelfDevelopment","Poetry" ,"Religious"],
   quantity:{
    type:Number,required:true
   },
   inStock:{
    type:Boolean
   }
     
});


export const BookModel = model<TBook>('Book', bookSchema);