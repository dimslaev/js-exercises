/**
 * Have the function MostFreeTime(strArr) read the strArr
 * parameter being passed which will represent a full day
 * and will be filled with events that span from time X to
 * time Y in the day. The format of each event will be
 * hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be
 * ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"].
 * Your program will have to output the longest amount of
 * free time available between the start of your first event
 * and the end of your last event in the format: hh:mm.
 * The start event should be the earliest event in the day
 * and the latest event should be the latest event in the day.
 * The output for the previous input would therefore be 01:30
 * (with the earliest event in the day starting at 09:10AM and
 * the latest event ending at 02:45PM). The input will contain
 * at least 3 events and the events may be out of order.
 */

const assert = require("node:assert").strict;
const { to24Hour } = require("./_helpers");

function toDate(time) {
  return new Date("2024-08-01T" + time);
}

function MostFreeTime(strArr) {
  const arr = strArr
    .map((str) => {
      const parts = str.split("-");
      const start = to24Hour(parts[0]);
      const end = to24Hour(parts[1]);
      return [start, end];
    })
    .sort((a, b) => toDate(a[0]) - toDate(b[0]));

  let max = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const end = arr[i][1];
    const start = arr[i + 1][0];
    const t = toDate(start) - toDate(end);
    if (t > max) max = t;
  }

  const maxD = new Date(max);
  const hh = String(maxD.getUTCHours()).padStart(2, 0);
  const mm = String(maxD.getUTCMinutes()).padStart(2, 0);

  return [hh, mm].join(":");
}

assert.equal(
  MostFreeTime(["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]),
  "01:30"
);
assert.equal(
  MostFreeTime(["12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"]),
  "00:30"
);
assert.equal(
  MostFreeTime(["12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"]),
  "00:04"
);
assert.equal(
  MostFreeTime(["07:00AM-08:00AM", "09:00AM-10:00AM", "10:00PM-11:00PM"]),
  "12:00"
);
assert.equal(
  MostFreeTime(["07:00AM-08:00AM", "10:00PM-11:00PM", "09:00AM-09:15PM"]),
  "01:00"
);
assert.equal(
  MostFreeTime(["01:52AM-01:55AM", "01:00AM-01:10AM", "01:20AM-01:50AM"]),
  "00:10"
);
assert.equal(
  MostFreeTime([
    "11:30AM-01:00PM",
    "07:00AM-08:15AM",
    "01:50PM-05:00PM",
    "08:30AM-11:10AM",
  ]),
  "00:50"
);
assert.equal(
  MostFreeTime([
    "11:30AM-01:00PM",
    "07:00AM-08:15AM",
    "01:05PM-05:00PM",
    "08:30AM-11:10AM",
  ]),
  "00:20"
);
assert.equal(
  MostFreeTime([
    "06:00AM-08:00PM",
    "09:09PM-09:11PM",
    "08:02PM-08:04PM",
    "08:10PM-09:00PM",
  ]),
  "00:09"
);
assert.equal(
  MostFreeTime([
    "06:00AM-08:00PM",
    "05:00AM-05:45AM",
    "08:02PM-08:04PM",
    "08:10PM-09:00PM",
    "09:09PM-09:11PM",
  ]),
  "00:15"
);
