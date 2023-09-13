export const months = [
  { title: "January" },
  { title: "February" },
  { title: "March" },
  { title: "April" },
  { title: "May" },
  { title: "June" },
  { title: "July" },
  { title: "August" },
  { title: "September" },
  { title: "October" },
  { title: "November" },
  { title: "December" },
];

let today = new Date();
const nowYear = today.getFullYear();
export const years = [];
for (let i = nowYear; i >= 1900; i--) {
  years.push({ title: i });
}

export const content = [
  [
    { id: 1, title: "Nazwa filtra" },
    { id: 2, title: "Select" },
    { id: 3, title: "Select" },
    { id: 4, title: "Select" },
    { id: 5, title: "Select" },
    { id: 6, title: "Select" },
    { id: 7, title: "Select" },
    { id: 8, title: "Select" },
    { id: 9, title: "Select" },
    { id: 10, title: "Select" },
  ],
  [
    { id: 1, title: "Nazwa filtra" },
    { id: 2, title: "Select" },
    { id: 3, title: "Select" },
    { id: 4, title: "Select" },
    { id: 5, title: "Select" },
    { id: 6, title: "Select" },
    { id: 7, title: "Select" },
    { id: 8, title: "Select" },
    { id: 9, title: "Select" },
    { id: 10, title: "Select" },
  ],
  [
    { id: 1, title: "Nazwa filtra" },
    { id: 2, title: "Select" },
    { id: 3, title: "Select" },
    { id: 4, title: "Select" },
    { id: 5, title: "Select" },
    { id: 6, title: "Select" },
    { id: 7, title: "Select" },
    { id: 8, title: "Select" },
    { id: 9, title: "Select" },
    { id: 10, title: "Select" },
  ],
];
