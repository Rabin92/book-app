const cardDescriptions = [
  {
    img: `../books-img/book-1.jpg`,
    title: `A Life on Our Planet: My Witness Statement and a Vision for the Future`,
    author: `David Attenborough`,
    release: `2020-10-01`,
    link: `https://www.amazon.co.uk/Life-Our-Planet-Witness-Statement/dp/1529108276/ref=sr_1_1?dchild=1&keywords=a+life+on+our+planet&qid=1610306225&quartzVehicle=45-608&replacementKeywords=a+on+our+planet&sr=8-1`,
  },
  {
    img: `../books-img/book-2.jpg`,
    title: `Life on Air`,
    author: `David Attenborough`,
    release: `2010-05-20`,
    link: `https://www.amazon.co.uk/Life-Air-David-Attenborough/dp/1849900019/ref=sr_1_1?dchild=1&keywords=life+on+air&qid=1610306334&quartzVehicle=45-608&replacementKeywords=on+air&sr=8-1`,
  },
  {
    img: `../books-img/book-3.jpg`,
    title: `HTML, CSS and JavaScript in easy steps`,
    author: `Mike McGrath`,
    release: `2020-08-06`,
    link: `https://www.amazon.co.uk/HTML-CSS-JavaScript-easy-steps/dp/184078878X/ref=sr_1_1?dchild=1&keywords=HTML%2C+CSS+and+JavaScript+in+easy+steps%3A+%28In+Easy+Steps%29&qid=1610306384&sr=8-1`,
  },
  {
    img: `../books-img/book-4.jpg`,
    title: `HTML5 in easy steps, 2nd edition`,
    author: `Mike McGrath`,
    release: `2017-02-17`,
    link: `https://www.amazon.co.uk/HTML5-easy-steps-Mike-McGrath/dp/1840787546/ref=sr_1_1?dchild=1&keywords=HTML5+in+easy+steps%3A+%282nd+edition%29&qid=1610306431&sr=8-1`,
  },
  {
    img: `../books-img/book-5.jpg`,
    title: `Web Design with HTML, CSS, JavaScript and jQuery Set`,
    author: `Jon Duckett`,
    release: `2014-08-15`,
    link: `https://www.amazon.co.uk/Web-Design-HTML-JavaScript-jQuery/dp/1118907442/ref=sr_1_1?dchild=1&keywords=Jon+duckett&qid=1610306470&sr=8-1`,
  },
  {
    img: `../books-img/book-6.jpg`,
    title: `The Family Upstairs`,
    author: `Lisa Jewell`,
    release: `2019-12-12`,
    link: `https://www.amazon.co.uk/Family-Upstairs-Number-bestseller-author/dp/1787461483/ref=sr_1_1?dchild=1&keywords=the+family+upstairs&qid=1610306540&sr=8-1`,
  },
  {
    img: `../books-img/book-7.jpg`,
    title: `Into the Wild`,
    author: `Jon Krakauer`,
    release: `2007-09-07`,
    link: `https://www.amazon.co.uk/Into-Wild-Jon-Krakauer/dp/033045367X/ref=sr_1_2?dchild=1&keywords=into+the+wild&qid=1610306572&sr=8-2`,
  },
  {
    img: `../books-img/book-8.jpg`,
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K. Rowling`,
    release: `2014-09-01`,
    link: `https://www.amazon.co.uk/Harry-Potter-Philosophers-Stone/dp/1408855658/ref=sr_1_1?dchild=1&keywords=Harry+Potter+and+the+Philosopher%27s+Stone&qid=1610306622&sr=8-1`,
  },
  {
    img: `../books-img/book-9.jpg`,
    title: `Harry Potter and the Chamber of Secrets: Illustrated Edition `,
    author: `J.K. Rowling`,
    release: `2019-08-22`,
    link: `https://www.amazon.co.uk/Harry-Potter-Chamber-Secrets-Illustrated/dp/1408845652/ref=sr_1_1?dchild=1&keywords=Harry+Potter+and+the+Chamber+of+Secrets%3A+Illustrated+Edition&qid=1610306662&sr=8-1`,
  },
  {
    img: `../books-img/book-10.jpg`,
    title: `Harry Potter and the Cursed Child - Parts One and Two`,
    author: `J.K. Rowling`,
    release: `2017-07-25`,
    link: `https://www.amazon.co.uk/Harry-Potter-Cursed-Child-Playscript/dp/0751565369/ref=sr_1_1?dchild=1&keywords=Harry+Potter+and+the+Cursed+Child+-+Parts+One+and+Two&qid=1610306694&sr=8-1`,
  },
  {
    img: `../books-img/book-11.jpg`,
    title: `JavaScript in easy step, 6th edition`,
    author: `Mike McGrath`,
    release: `2020-02-28`,
    link: `https://www.amazon.co.uk/JavaScript-easy-steps-Mike-McGrath/dp/1840788771/ref=sr_1_1_sspa?dchild=1&keywords=JavaScript+in+easy+steps%3A&qid=1610306767&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzQTRDQkNBTkZPVlNNJmVuY3J5cHRlZElkPUEwMjYzMDMwVE8wMEpBTlpNTVQmZW5jcnlwdGVkQWRJZD1BMDY5MDQ1MjFDSzUyVjRGWjZaUkgmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl`,
  },
  {
    img: `../books-img/book-12.jpg`,
    title: `Python in easy steps, 2nd Edition`,
    author: `Mike McGrath`,
    release: `2018-07-25`,
    link: `https://www.amazon.co.uk/Python-easy-steps-2nd-covers/dp/1840788127/ref=sr_1_1?dchild=1&keywords=Python+in+easy+steps%2C+2nd+Edition&qid=1610306841&sr=8-1`,
  },
  {
    img: `../books-img/book-13.jpg`,
    title: `A Promised Land`,
    author: `Barack Obama`,
    release: `2020-11-17`,
    link: `https://www.amazon.co.uk/Promised-Land-Barack-Obama/dp/0241491517/ref=pd_bxgy_img_3/257-9929479-7536711?_encoding=UTF8&pd_rd_i=0241491517&pd_rd_r=d331d9dc-de5b-4ae7-b8df-bd3fda66822c&pd_rd_w=6o3rX&pd_rd_wg=78aNa&pf_rd_p=dcf35746-0212-418b-a148-30395d107b2d&pf_rd_r=94X9VS6THD4F8SZ3EWRC&psc=1&refRID=94X9VS6THD4F8SZ3EWRC`,
  },
  {
    img: `../books-img/book-14.jpg`,
    title: `Bill Gates: Hero or Villian`,
    author: `Michael Lancashire`,
    release: `2020-11-03`,
    link: `https://www.amazon.co.uk/Bill-Gates-Villain-Michael-Lancashire/dp/0992813093/ref=sr_1_2_sspa?dchild=1&keywords=bill+gates&qid=1610384073&s=books&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySU4xSFo4NE1DT04wJmVuY3J5cHRlZElkPUEwOTg5MDY4M1VQRFNPRUpDNDlQTSZlbmNyeXB0ZWRBZElkPUEwMzUxOTI0MjhXRlM2RVpUUFIyOCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=`,
  },
  {
    img: `../books-img/book-15.jpg`,
    title: `Steve Jobs`,
    author: `Waater Isaacson`,
    release: `2015-02-05`,
    link: `https://www.amazon.co.uk/Steve-Jobs-Exclusive-Walter-Isaacson/dp/034914043X/ref=sr_1_1?dchild=1&keywords=Steve+jobs&qid=1610384215&s=books&sr=1-1`,
  },
  {
    img: `../books-img/book-16.jpg`,
    title: `The Ickabog`,
    author: `J.K. Rowling`,
    release: `2015-02-05`,
    link: `https://www.amazon.co.uk/Ickabog-fairy-tale-adventure-entertain-Christmas/dp/1510202250/ref=sr_1_1?dchild=1&keywords=j.k.+rowling&qid=1610384363&s=books&sr=1-1`,
  },
];

new Vue({
  el: '#container',
  data: {
    card: cardDescriptions,
    author: '',
  },
  methods: {
    displayBooks: function (e) {
      this.author = e.target.value;
    },
  },
  computed: {
    filteredNames: function () {
      const authors = [];
      this.card.forEach(item => {
        if (!authors.includes(item.author)) {
          authors.push(item.author);
        }
      });
      return authors;
    },
  },
});

new Vue({
  el: '#footer',
  methods: {
    fullYear: function () {
      const date = new Date();
      const fullYear = date.getFullYear();
      return fullYear;
    },
  },
});
