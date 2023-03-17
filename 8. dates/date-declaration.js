const date1 = new Date(); // Fri Mar 17 2023 11:01:03 GMT-0300 (hora de verano de Chile)
date1.toISOString(); // 2023-03-17T14:01:03.031Z


const date2 = new Date("2023/01/01 22:00:00"); // Sun Jan 01 2023 22:00:00 GMT-0300 (hora de verano de Chile)
date2.toISOString(); // 2023-01-02T01:00:00.000Z


const date3 = new Date(1678720536905); // Mon Mar 13 2023 12:15:36 GMT-0300 (hora de verano de Chile)
date3.toISOString(); // 2023-03-13T15:15:36.905Z


const date4 = new Date(2023, 03, 03, 17, 30, 00, 00); // Mon Apr 03 2023 17:30:00 GMT-0400 (hora estándar de Chile)
date4.toISOString(); // 2023-04-03T21:30:00.000Z