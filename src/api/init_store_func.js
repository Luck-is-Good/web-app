import {firestore} from '../db/firebase';

const UserCol = firestore.collection("USERS");

let fb_users = []
let user_data = []
let user_locs = []

export function setData(){
    UserCol.where("device_id", "!=", false).get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            fb_users.push(doc.id)
        })
    }).then(()=>{
    
        fb_users.forEach((user)=>{
            UserCol.doc(user).collection("locations").orderBy("createdAt", "asc").limit(1)
            .get()
            .then((data)=>{
                data.forEach((doc)=>{
                    // console.log(doc.data())
                    user_locs.push(doc.data());
                })
            }).then(()=>{
                if(user_locs.length == fb_users.length){
                    for(let i = 0; i < fb_users.length;i++){
                        let data = {
                            name:fb_users[i],
                            longitude: user_locs[i].longitude,
                            latitude: user_locs[i].latitude,
                            createdAt: user_locs[i].createdAt
                        };
                
                        user_data.push(data);
                    }
                }
                console.log(user_data);
                return user_data;
            })
            
        })
    })
}