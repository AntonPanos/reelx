import { IData } from './services';

interface ICoverImage {
  url: string;
  name: string;
  mime: string;
}

export interface IPost extends IData {
  title: string;
  descriptions: string;
  cover: ICoverImage;
}
