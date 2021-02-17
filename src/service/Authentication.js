import firebase from './init-firebase.js';
import md5 from 'md5';

class Authentication {

    login() {

    }

    async register(data) {
        console.log(data);
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

}

export default Authentication;