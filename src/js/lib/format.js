 // shop: {},
 //  main: [],
 //  currentPage: 1,
 //  totalPages: 1
export const index = {
  getSHop(data) {
    return data.shop[0];
  },
  getMain(data) {
    return Array.prototype.slice.call(data.pager.data, 0);
  },
  getcurrentPage(data) {
    return data.pager.currentPage;
  },
  gettotalPages(data) {
    return data.pager.totalPages;
  },
  getTitle(data) {
    return data.shop[0].name;
  },
  getBg(data) {
    return data.shop[0].background;
  },
  getDate(data) {
    return {
      shop: this.getSHop(data),
      main: this.getMain(data),
      currentPage: this.getcurrentPage(data),
      totalPages: this.gettotalPages(data),
      title: this.getTitle(data),
      background: this.getBg(data)
    }
  }
};

 export const shop = {
     getSHop(data) {
         return data.shop[0];
     },
     getMain(data) {
         return data.pager;
     },
     getTitle(data) {
         return data.shop[0].name;
     },
     getDate(data) {
         return {
             shop: this.getSHop(data),
             main: this.getMain(data),
             title: this.getTitle(data)
         }
     }
 };
