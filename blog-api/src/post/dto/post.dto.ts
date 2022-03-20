import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Optional } from 'utility-types';
import { PostI } from '../interfaces/post.interface';

export class CreatePostDto implements PostI {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly subtitle: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly isPublic: boolean;
}

export class UpdatePostDto implements Optional<PostI> {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly subtitle?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly content?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly isPublic?: boolean;
}
