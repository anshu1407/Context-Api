import {db, firebase} from './firebase';

export const getPosts= async()=>{
    try{
        const data=[];
        const res = await db.collection('Posts').orderBy('date').get();
        res.forEach((doc)=>{
            data.push({
                id:doc.id,
                data:doc.data(),
            })
        })
        return data;
    }catch(error){
        console.log(error)
        return error;
    }
}

export const addPost= async (post)=>{
    try{
        const data= await db.collection('Posts').add({
            ...post,date:firebase.firestore.FieldValue.serverTimestamp()
        });
        return data;
    }catch(error){
        console.log(error);
        return error;
    }
}