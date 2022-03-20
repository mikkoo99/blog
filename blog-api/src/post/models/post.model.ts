import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostI } from '../interfaces/post.interface';

@Schema({ autoIndex: true, timestamps: true })
export class Post extends Document implements PostI {
  _id?: string;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  subtitle: string;

  @Prop({ required: true, type: String })
  content: string;

  @Prop({ required: true, type: Boolean, default: false })
  isPublic: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
