import firebase from './init-firebase.js';

class Database {
    update = async (ref, child, update) => {
        await firebase.database().ref("users").child(child).update({ image: update })
    }

    createRoom = async (roomInfo) => {
        const key = firebase.database().ref("rooms").push().key;
        roomInfo["id"] = key;

        try {
            firebase.database().ref("rooms").child(key).update(roomInfo);
        } catch (error) {
            alert(error);
        }
    }

    syncRoomList = (onUpdate) => {
        try {
            firebase.database().ref("rooms").on('value', DataSnapshot => {
                const value = DataSnapshot.val();
                console.log("DataSnapshot", DataSnapshot.val());
                value && onUpdate(value);
            })
        } catch (error) {
            alert(error);
        }
        return () => firebase.database().ref("rooms").off();
    }
}

export default Database;