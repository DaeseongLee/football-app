import firebase from './init-firebase.js';

class Store {
    upload = async (path, file, metadata) => {
        return await firebase.storage().ref().child(path).put(file, metadata)
    }
}

export default Store;