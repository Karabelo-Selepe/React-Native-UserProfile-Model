class UserModel {
    name;
    phone;
    email;
    occupation;
    address;
    picture;

    constructor() {}

    setName(name) {
      this.name = name;  
    }
    setPhone(phone) {
      this.phone = phone;  
    }
    setEmail(email) {
      this.email = email;  
    }
    setOccupation(occupation) {
      this.occupation = occupation;  
    }
    setAddress(address) {
      this.address = address;  
    }
    setPicture(picture) {
      this.picture = picture;  
    }
}

const userModelObj = new UserModel();
export default userModelObj;