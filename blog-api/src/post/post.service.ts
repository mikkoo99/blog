import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  async getPosts() {
    return [];
  }

  async getPostById(postId: string) {
    return postId;
  }

  async createPost(postData: CreatePostDto) {
    return postData;
  }

  async updatePost(postId: string, postData: UpdatePostDto) {
    return { postId, postData };
  }

  async removePost(postId: string) {
    return postId;
  }
}
