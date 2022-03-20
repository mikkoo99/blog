import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ValidateObjectId } from 'src/common/pipes/validate-objectId.pipe';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller({ path: 'posts', version: '1' })
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return await this.postService.getPosts();
  }

  @Get(':postId')
  async getPostById(@Param('postId', ValidateObjectId) postId: string) {
    return await this.postService.getPostById(postId);
  }

  @Post()
  async createPost(@Body() postData: CreatePostDto) {
    return await this.postService.createPost(postData);
  }

  @Patch(':postId')
  async updatePost(
    @Param('postId', ValidateObjectId) postId: string,
    @Body() postData: UpdatePostDto,
  ) {
    return await this.postService.updatePost(postId, postData);
  }

  @Delete(':postId')
  async removePost(@Param('postId', ValidateObjectId) postId: string) {
    return await this.postService.removePost(postId);
  }
}
