import { IData } from './services';

export interface IPost extends IData {
  title: string;
  descriptions: string;
  cover: { url: string };
}
