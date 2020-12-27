import mongoose from "mongoose";

// An Interface that describes the properties
//that required to create new User
interface UserAttrs {
  email: string;
  password: string;
}

//an interface taht describe the properties
//that user model has

interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//build User for typescript with mongoose so typescipt can check the type
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<any, UserModel>("User", userSchema);

export { User };
