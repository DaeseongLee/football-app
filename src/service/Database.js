import firebase from './init-firebase.js';

class Database {
    update = async (ref, child, update) => {
        await firebase.database().ref("users").child(child).update({ image: update })
    }

}

export default Database;