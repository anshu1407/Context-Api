import {storage, firebase, db} from './firebase';

export const uploadSingleFile = (file) => {
    const filename = `${new Date().getTime()}.${file.name.split('.')[1]}`;
    console.log('fileName==========>>', filename);
    const url = new Promise((resolve) => {
      const uploadTask = storage.ref(`/files/${filename}`).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        // snackbar(`Upload is ${progress}% done`, 'warning');
        // add Progress Bar
      }, (error) => {
        console.log(error);
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          resolve(downloadURL);
        });
      });
    });
    return url;
  };

  export const signUp= async(email,password, data)=>{
      try{
        const {user}= await firebase.auth().createUserWithEmailAndPassword(email,password);
        if(user?.uid){
            await db.collection('Users').doc(user.uid).set({...data,role:'user'});
            return user;
        }
      }catch(error){
          console.log(error);
          return error;
      }
  }

export const signIn= async(email,password)=>{
    try{
        const {user} = await firebase.auth().signInWithEmailAndPassword(email,password);
        if(user){
            return user
        }
    }catch(error){
        console.log(error);
        return error;
    }
}

export const userData= async(id)=>{
    try{
        const res= await db.collection('Users').doc(id).get();
        console.log(res.data(), '------------------>>> userData response');
        return res.data();
    }catch(error){
        console.log(error);
        return(error);
    }
}
