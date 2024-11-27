export interface IErrorResponse {
  data: {
    origin: string;
    status: number;
    code: string;
    exception: string;
    detail: string;
  };
}
