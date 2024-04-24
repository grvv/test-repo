const userData = [
  {
    id: 1,
    first_name: "Jean",
    last_name: "Micheli",
    email: "jmicheli0@umich.edu",
    gender: "Male",
    ip_address: "0.200.16.186",
  },
  {
    id: 2,
    first_name: "Saxon",
    last_name: "Pocknoll",
    email: "spocknoll1@earthlink.net",
    gender: "Male",
    ip_address: "103.55.172.30",
  },
  {
    id: 3,
    first_name: "Darnell",
    last_name: "Tire",
    email: "dtire2@indiegogo.com",
    gender: "Male",
    ip_address: "147.124.252.200",
  },
  {
    id: 4,
    first_name: "Sasha",
    last_name: "Froome",
    email: "sfroome3@princeton.edu",
    gender: "Female",
    ip_address: "236.17.180.218",
  },
  {
    id: 5,
    first_name: "Elden",
    last_name: "Creedland",
    email: "ecreedland4@buzzfeed.com",
    gender: "Male",
    ip_address: "246.47.115.29",
  },
  {
    id: 6,
    first_name: "Ximenes",
    last_name: "Wrassell",
    email: "xwrassell5@naver.com",
    gender: "Male",
    ip_address: "190.203.18.34",
  },
  {
    id: 7,
    first_name: "Kippy",
    last_name: "Belderfield",
    email: "kbelderfield6@people.com.cn",
    gender: "Female",
    ip_address: "180.253.188.62",
  },
  {
    id: 8,
    first_name: "Benn",
    last_name: "MacKereth",
    email: "bmackereth7@myspace.com",
    gender: "Male",
    ip_address: "207.86.21.44",
  },
  {
    id: 9,
    first_name: "Melisenda",
    last_name: "Inglesant",
    email: "minglesant8@stumbleupon.com",
    gender: "Female",
    ip_address: "157.171.205.198",
  },
  {
    id: 10,
    first_name: "Woodie",
    last_name: "Pyett",
    email: "wpyett9@github.io",
    gender: "Male",
    ip_address: "151.108.184.154",
  },
];

const singleUser = userData[0];

// console.log(singleUser);

// Without ES6 -->  ECMAscript 6 --> version of javascript launched in 2015/16

// .dot notation
// const firstNameOfUser = singleUser.first_name;

// bracket notation
// const firstNameOfUser = singleUser["first_name"];

// .notation
// const firstNameOfUser = singleUser.name.first_name;

// bracket notation
// const firstNameOfUser = singleUser["name"]["first_name"];

// Destructing

// const { first_name } = singleUser;

// const { first_name: firstNameOfUser } = singleUser;

// const {
//   name: { first_name },
// } = singleUser;

// const {
//   name: { first_name: firstNameOfUser },
// } = singleUser;

console.log(firstNameOfUser);
