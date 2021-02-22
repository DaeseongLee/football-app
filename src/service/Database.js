import firebase from './init-firebase.js';

class Database {
    update = async (ref, child, update) => {
        await firebase.database().ref("users").child(child).update({ image: update })
    }

    createRoom = async (roomInfo) => {
        const key = firebase.database().ref("rooms").push().key;
        console.log('key', key);
        try {
            firebase.database().ref("rooms").child(key).update(roomInfo);
        } catch (error) {
            alert(error);
        }
    }
}

export default Database;