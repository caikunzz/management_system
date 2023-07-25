import http from "@/utils/https";
export const getSearchResult = () => http.get<ISearchResult>("/search");
getSearchResult().then((res) => console.log(res.data.result));
