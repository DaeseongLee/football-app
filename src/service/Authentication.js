import firebase from './init-firebase.js';
import md5 from 'md5';

class Authentication {

    async login(data) {
        console.log("data", data)
        try {
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
            return null;
        } catch (error) {
            return error.message;
        }
    }

    logout() {
        firebase.auth().signOut();
    }

    async register(data) {
        try {
            const createdUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password); //인증
            await createdUser.user.updateProfile({
                displayName: data.name,
                photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
            })
            console.log(createdUser.user);

            //Firebase 데이터베이스에 저장해주기
            await firebase.database().ref("users").child(createdUser.user.uid).set({
                name: createdUser.user.displayName,
                image: createdUser.user.photoURL
            })
            return null;
        } catch (error) {
            console.log(error);
            return error.message;
        }

    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    uploadProfile = async (fileUrl) => {
        await firebase.auth().currentUser.updateProfile({
            photoURL: fileUrl
        })
    }

}

export default Authentication;