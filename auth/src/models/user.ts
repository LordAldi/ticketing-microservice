import mongoose from "mongoose";
import { Password } from "../services/password";

// An Interface that describes the properties
//that required to create new User
interface UserAttrs {
  email: string;
  password: string;
}

//an interface taht describe the properties
//that user model has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//an interface that describes the properties
//that a user document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  //   updatedAt:string
}
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

//build User for typescript with mongoose so typescipt can check the type
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
