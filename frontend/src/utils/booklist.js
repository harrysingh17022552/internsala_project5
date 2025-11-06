//default book list, any books added, will not be update here that will be stored in user local storage.
const BooksList = () => {
  const books = [
    {
      id: "b001",
      bookname: "The Silent Patient",
      bookauthor: "Alex Michaelides",
      booktitle: "A psychological thriller full of twists",
      bookprice: 399,
      bookpublished: 2019,
      category: "Thriller",
      bookimage:
        "https://m.media-amazon.com/images/I/71yqFJ7HkPL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b002",
      bookname: "Atomic Habits",
      bookauthor: "James Clear",
      booktitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      bookprice: 499,
      bookpublished: 2018,
      category: "Self-Help",
      bookimage:
        "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b003",
      bookname: "The Alchemist",
      bookauthor: "Paulo Coelho",
      booktitle: "A fable about following your dream",
      bookprice: 299,
      bookpublished: 1988,
      category: "Fiction",
      bookimage:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b004",
      bookname: "The Psychology of Money",
      bookauthor: "Morgan Housel",
      booktitle: "Timeless lessons on wealth, greed, and happiness",
      bookprice: 450,
      bookpublished: 2020,
      category: "Finance",
      bookimage:
        "https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b005",
      bookname: "The 5 AM Club",
      bookauthor: "Robin Sharma",
      booktitle: "Own your morning, elevate your life",
      bookprice: 350,
      bookpublished: 2018,
      category: "Motivation",
      bookimage:
        "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b006",
      bookname: "Ikigai",
      bookauthor: "Héctor García & Francesc Miralles",
      booktitle: "The Japanese secret to a long and happy life",
      bookprice: 299,
      bookpublished: 2016,
      category: "Philosophy",
      bookimage:
        "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b007",
      bookname: "Deep Work",
      bookauthor: "Cal Newport",
      booktitle: "Rules for focused success in a distracted world",
      bookprice: 399,
      bookpublished: 2016,
      category: "Productivity",
      bookimage:
        "https://m.media-amazon.com/images/I/61kq6Zy6X2L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b008",
      bookname: "Can't Hurt Me",
      bookauthor: "David Goggins",
      booktitle: "Master your mind and defy the odds",
      bookprice: 550,
      bookpublished: 2018,
      category: "Autobiography",
      bookimage:
        "https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b009",
      bookname: "Rich Dad Poor Dad",
      bookauthor: "Robert T. Kiyosaki",
      booktitle: "What the rich teach their kids about money",
      bookprice: 399,
      bookpublished: 1997,
      category: "Finance",
      bookimage:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b010",
      bookname: "Sapiens",
      bookauthor: "Yuval Noah Harari",
      booktitle: "A brief history of humankind",
      bookprice: 499,
      bookpublished: 2011,
      category: "History",
      bookimage:
        "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b011",
      bookname: "Educated",
      bookauthor: "Tara Westover",
      booktitle: "A memoir of a girl who sought education against all odds",
      bookprice: 450,
      bookpublished: 2018,
      category: "Biography",
      bookimage:
        "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b012",
      bookname: "The Power of Now",
      bookauthor: "Eckhart Tolle",
      booktitle: "A guide to spiritual enlightenment",
      bookprice: 375,
      bookpublished: 1997,
      category: "Spirituality",
      bookimage:
        "https://m.media-amazon.com/images/I/61v6d93xT0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b013",
      bookname: "Start With Why",
      bookauthor: "Simon Sinek",
      booktitle: "How great leaders inspire everyone to take action",
      bookprice: 420,
      bookpublished: 2009,
      category: "Leadership",
      bookimage:
        "https://m.media-amazon.com/images/I/71vNfZxJRAL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b014",
      bookname: "Thinking, Fast and Slow",
      bookauthor: "Daniel Kahneman",
      booktitle: "The two systems that drive the way we think",
      bookprice: 480,
      bookpublished: 2011,
      category: "Psychology",
      bookimage:
        "https://m.media-amazon.com/images/I/71Yz7U5Ck9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b015",
      bookname: "Becoming",
      bookauthor: "Michelle Obama",
      booktitle: "The memoir of the former First Lady of the United States",
      bookprice: 520,
      bookpublished: 2018,
      category: "Biography",
      bookimage:
        "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b016",
      bookname: "The Subtle Art of Not Giving a F*ck",
      bookauthor: "Mark Manson",
      booktitle: "A counterintuitive approach to living a good life",
      bookprice: 399,
      bookpublished: 2016,
      category: "Self-Help",
      bookimage:
        "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b017",
      bookname: "The Lean Startup",
      bookauthor: "Eric Ries",
      booktitle: "How today's entrepreneurs use continuous innovation",
      bookprice: 450,
      bookpublished: 2011,
      category: "Business",
      bookimage:
        "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b018",
      bookname: "Zero to One",
      bookauthor: "Peter Thiel",
      booktitle: "Notes on startups, or how to build the future",
      bookprice: 420,
      bookpublished: 2014,
      category: "Entrepreneurship",
      bookimage:
        "https://m.media-amazon.com/images/I/61v+5vhg3fL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b019",
      bookname: "Dune",
      bookauthor: "Frank Herbert",
      booktitle: "A science fiction saga set on the desert planet Arrakis",
      bookprice: 499,
      bookpublished: 1965,
      category: "Science Fiction",
      bookimage:
        "https://m.media-amazon.com/images/I/91A6QmJ+3LL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b020",
      bookname: "The Hobbit",
      bookauthor: "J.R.R. Tolkien",
      booktitle: "A fantasy adventure preceding The Lord of the Rings",
      bookprice: 350,
      bookpublished: 1937,
      category: "Fantasy",
      bookimage:
        "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b021",
      bookname: "To Kill a Mockingbird",
      bookauthor: "Harper Lee",
      booktitle: "A novel about racial injustice and moral growth",
      bookprice: 320,
      bookpublished: 1960,
      category: "Classic",
      bookimage:
        "https://m.media-amazon.com/images/I/81OdwZ9WELL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b022",
      bookname: "1984",
      bookauthor: "George Orwell",
      booktitle: "A dystopian tale of totalitarianism and surveillance",
      bookprice: 299,
      bookpublished: 1949,
      category: "Dystopian",
      bookimage:
        "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b023",
      bookname: "The Catcher in the Rye",
      bookauthor: "J.D. Salinger",
      booktitle: "A story of teenage rebellion and alienation",
      bookprice: 280,
      bookpublished: 1951,
      category: "Classic",
      bookimage:
        "https://m.media-amazon.com/images/I/71SMr+ZgnSL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b024",
      bookname: "The Great Gatsby",
      bookauthor: "F. Scott Fitzgerald",
      booktitle: "A tragic tale of love and the American Dream",
      bookprice: 310,
      bookpublished: 1925,
      category: "Classic",
      bookimage:
        "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b025",
      bookname: "The Kite Runner",
      bookauthor: "Khaled Hosseini",
      booktitle:
        "A story of friendship, betrayal, and redemption in Afghanistan",
      bookprice: 399,
      bookpublished: 2003,
      category: "Drama",
      bookimage:
        "https://m.media-amazon.com/images/I/81l0ky7+e0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b026",
      bookname: "A Thousand Splendid Suns",
      bookauthor: "Khaled Hosseini",
      booktitle: "A tale of two women and their struggle for freedom",
      bookprice: 420,
      bookpublished: 2007,
      category: "Drama",
      bookimage:
        "https://m.media-amazon.com/images/I/81VStYnDGrL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b027",
      bookname: "Harry Potter and the Sorcerer’s Stone",
      bookauthor: "J.K. Rowling",
      booktitle: "The first book in the Harry Potter series",
      bookprice: 450,
      bookpublished: 1997,
      category: "Fantasy",
      bookimage:
        "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b028",
      bookname: "The Da Vinci Code",
      bookauthor: "Dan Brown",
      booktitle: "A symbologist uncovers a secret hidden for centuries",
      bookprice: 430,
      bookpublished: 2003,
      category: "Mystery",
      bookimage:
        "https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b029",
      bookname: "The Girl on the Train",
      bookauthor: "Paula Hawkins",
      booktitle: "A psychological thriller about memory and truth",
      bookprice: 380,
      bookpublished: 2015,
      category: "Thriller",
      bookimage:
        "https://m.media-amazon.com/images/I/81wZt+z5y1L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "b030",
      bookname: "The Midnight Library",
      bookauthor: "Matt Haig",
      booktitle: "A story about regrets, hope, and infinite lives",
      bookprice: 410,
      bookpublished: 2020,
      category: "Fiction",
      bookimage:
        "https://m.media-amazon.com/images/I/81AzcAMe4zL._AC_UF1000,1000_QL80_.jpg",
    },
  ];
  return books;
};
