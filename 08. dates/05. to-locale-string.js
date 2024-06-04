const date = new Date("2023/01/01 22:00:00");
// Sun Jan 01 2023 22:00:00 GMT-0300 (Chile Standard Time)

const dateIso = date.toISOString();
// 2023-01-02T01:00:00.000Z

const localDate = new Date(dateIso);
const localDateString = localDate.toLocaleString();
// Sun Jan 01 2023 22:00:00 GMT-0300 (Chile Standard Time)
