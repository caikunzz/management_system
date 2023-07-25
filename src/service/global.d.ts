/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface ISearchResult {
  result: {
    songs: {
      id: number;
      name: string;
      artists: {
        id: number;
        name: string;
        picUrl?: any;
        alias: any[];
        albumSize: number;
        picId: number;
        fansGroup?: any;
        img1v1Url: string;
        img1v1: number;
        trans?: any;
      }[];
      album: {
        id: number;
        name: string;
        artist: {
          id: number;
          name: string;
          picUrl?: any;
          alias: any[];
          albumSize: number;
          picId: number;
          fansGroup?: any;
          img1v1Url: string;
          img1v1: number;
          trans?: any;
        };
        publishTime: number;
        size: number;
        copyrightId: number;
        status: number;
        picId: number;
        mark: number;
      };
      duration: number;
      copyrightId: number;
      status: number;
      alias: any[];
      rtype: number;
      ftype: number;
      mvid: number;
      fee: number;
      rUrl?: any;
      mark: number;
    }[];
    hasMore: boolean;
    songCount: number;
  };
  code: number;
}
