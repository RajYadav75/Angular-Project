interface IFriends{
    name:string;
    phoneNumber: number;
    age: number;
    address?:string;
}

let friend:IFriends={
    name: "Baba Yaga",
    phoneNumber: 91815612362,
    age: 21
}

console.log(`${friend.name} ${friend.phoneNumber} ${friend.age} ${friend.address}`);


let secondFriend:IFriends={
    name: "Raj Yadav",
    phoneNumber: 8115605569,
    age: 24,
    address:"Kanapar"
}
console.log(`${secondFriend.name} ${secondFriend.phoneNumber} ${secondFriend.age} ${secondFriend.address}`);
