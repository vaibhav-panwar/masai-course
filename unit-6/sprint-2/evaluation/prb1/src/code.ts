export enum DatabaseModel {
  users = "users",
  posts = "posts",
  comments = "comments",
  likes = "likes",
}
interface IModel {
  model: DatabaseModel;
  id: number;
}
export abstract class Model implements IModel {
  model: DatabaseModel;
  id: number;
  constructor(model: DatabaseModel) {
    this.model = model;
    this.id = Math.random();
  }
}

interface IUser extends IModel {
  name: string;
  bio: string;
  email: string;
  follows: number[];
}
export class User extends Model implements IUser {
  name: string;
  bio: string;
  email: string;
  follows: number[];
  constructor(name: string, bio: string, email: string) {
    super(DatabaseModel.users);
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.follows = [];
    Database.Instance?.create({model:DatabaseModel.users,data:{
      model:this.model,
      id:this.id,
      name:this.name,
      bio:this.bio,
      email:this.email,
      follows:this.follows
    }})
}
}

interface IPost extends IModel {
  image: string;
  content: string;
  userID: number;
}
export class Post extends Model implements IPost {
  image: string;
  content: string;
  userID: number;
  constructor(image: string, content: string, userID: number) {
    super(DatabaseModel.posts)
    this.content = content;
    this.image = image;
    this.userID = userID;
    Database.Instance?.create({
      model: DatabaseModel.posts, data: {
        model: this.model,
        id: this.id,
        image: this.image,
        content: this.content,
        userID: this.userID
      }
    })
  }
}

interface IComment extends IModel {
  content: string;
  userID: number;
  postID: number;
}
export class Comment extends Model implements IComment{
  content: string;
  userID: number;
  postID: number;
  constructor(content: string,userID: number,postID: number){
    super(DatabaseModel.comments)
    this.content = content;
    this.postID = postID;
    this.userID = userID;
    Database.Instance?.create({
      model: DatabaseModel.comments, data: {
        model: this.model,
        id: this.id,
        postID: this.postID,
        content: this.content,
        userID: this.userID
      }
    })
  }
}

interface ILike extends IModel{
  type: "POST" | "COMMENT";
  userID: number;
  parentID: number;
}
export class Like extends Model implements ILike {
  type: "POST" | "COMMENT";
  userID: number;
  parentID: number;
  constructor(type: "POST" | "COMMENT",userID: number,parentID: number){
    super(DatabaseModel.likes)
    this.type = type;
    this.userID = userID;
    this.parentID = parentID

    Database.Instance?.create({
      model: DatabaseModel.likes, data: {
        model: this.model,
        id: this.id,
        type: this.type,
        parentID: this.parentID,
        userID: this.userID
      }
    })
  }
}

type DatabaseMapping = {
  model:DatabaseModel.users;
  data: IUser;
}|
{
  model:DatabaseModel.comments;
  data:IComment;
}|
{
  model:DatabaseModel.posts;
  data:IPost;
}|
{
  model:DatabaseModel.likes;
  data:ILike;
}

export class Database {
  private users: IUser[];
  private posts: IPost[];
  private comments: IComment[];
  private likes: ILike[];
  static Instance: Database | null = null;
  private constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
    this.likes = [];
  }
  get Users(){
    return this.users;
  }
  get Posts(){
    return this.posts;
  }
  get Comments(){
    return this.comments;
  }
  get Likes(){
    return this.likes;
  }
  create({model,data}:DatabaseMapping){
    if(model===DatabaseModel.users){
      this.users.push(data)
    }
    else if(model === DatabaseModel.posts){
      this.posts.push(data)
    }
    else if (model === DatabaseModel.likes) {
      this.likes.push(data)
    }
    else if (model === DatabaseModel.comments) {
      this.comments.push(data)
    }
  }
  static connect() {
    if (Database.Instance === null) {
      Database.Instance = new Database();
    }
    return Database.Instance;
  }

}
