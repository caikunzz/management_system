import http from "@/utils/http";
// import { AxiosPromise } from "axios";

export const getSearchResult = async (params: ISearchParams) => {
  return (await http.get<ISearchResult>("/search", { params })).data.result
    .songs;
};

// export const getSearchResult = (params: ISearchParams) =>
//   http.get<ISearchResult>("/search", { params });

// export const getSearchResult = (params: ISearchParams) =>
//   http.get("/search", { params }) as AxiosPromise<ISearchResult>;

// getSearchResult().then(function (res) {
//   console.log(res.data.result.hasMore);
// });
// export const getSearchResult = (): AxiosPromise<ISearchResult> =>
//   http.get("/search");

// getSearchResult().then(function (res) {
//   console.log(res.data.result.songCount);
// });
//Primise<AxiosResponse<any,any>> === AxiosPrmise
// let a:AxiosPromise
