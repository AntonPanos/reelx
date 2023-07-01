interface IMetaData {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface IResponse<T> {
  data: T;
  meta: IMetaData;
}

export interface IData {
  id: number;
  createdAt: string;
  updatedAt: string;
}
