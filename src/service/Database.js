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
            firebase.database().ref("rooms").on('child_added', DataSnapshot => {
                console.log("DataSnapshot", DataSnapshot.val());
                onUpdate(DataSnapshot.val());
            })
        } catch (error) {
            alert(error);
        }
        return () => firebase.database().ref("rooms").off();
    }
}

export default Database;