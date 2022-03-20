import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { Model } from 'mongoose';
import { Post } from './models/post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async getPosts() {
    return await this.postModel.find();
  }

  async getPostById(postId: string) {
    const post = await this.postModel.findById(postId);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async createPost(postData: CreatePostDto) {
    const newPost = await this.postModel.create(postData);
    return await newPost.save();
  }

  async updatePost(postId: string, postData: UpdatePostDto) {
    const updatedPost = await this.postModel.findByIdAndUpdate(
      postId,
      postData,
      { new: true },
    );

    if (!updatedPost) throw new InternalServerErrorException();
    return updatedPost;
  }

  async removePost(postId: string) {
    await this.getPostById(postId);

    return await this.postModel.findByIdAndRemove(postId, { new: true });
  }
}
