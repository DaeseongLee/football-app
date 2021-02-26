import firebase from './init-firebase.js';

class Database {
    update = async (child, update) => {
        await firebase.database().ref("users").child(child).update({ image: update })
    }

    createRoom = (roomInfo) => {
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
                value && onUpdate(value);
            })
        } catch (error) {
            alert(error);
        }
        return () => firebase.database().ref("rooms").off();
    }

    addParticipant = (currentRoomId, participant) => {
        try {
            firebase.database().ref("participant").child(currentRoomId).child(participant.uid).set(participant);
        } catch (error) {
            alert(error);
        }
    }

    syncParticipant = (roomid, onUpdate) => {
        try {
            firebase.database().ref("participant").child(roomid).on('value', DataSnapshot => {
                const value = DataSnapshot.val();
                onUpdate(value);
            })
        } catch (error) {
            console.log(error);
        }
        return () => firebase.database().ref("participant").off();
    }

    removeParticipant = (userId, roomId) => {
        firebase.database().ref("participant").child(roomId).child(userId).remove();
    }
}

export default Database;