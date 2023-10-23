const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe("special", () => {
  test("12:00 am", () => {
    expect(timeWord("00:00")).toEqual("midnight");
  });

  test("12:00 pm", () => {
    expect(timeWord("12:00")).toEqual("noon");
  })
})

describe("o'clocks", () => {
  test('1:00 am', () => {
    expect(timeWord("01:00")).toEqual("one o'clock am");
  });

  test('11:00 am', () => {
    expect(timeWord("11:00")).toEqual("eleven o'clock am");
  });

  test('1:00 pm', () => {
    expect(timeWord("13:00")).toEqual("one o'clock pm");
  });

  test('11:00 pm', () => {
    expect(timeWord("23:00")).toEqual("eleven o'clock pm");
  });

  test('8:00 pm', () => {
    expect(timeWord("20:00")).toEqual("eight o'clock pm");
  });
});

describe("o'number", () => {
  test('6:01 am', () => {
    expect(timeWord("06:01")).toEqual("six oh one am");
  });

  test('2:09 pm', () => {
    expect(timeWord("14:09")).toEqual("two oh nine pm");
  });

  test('12:03 am', () => {
    expect(timeWord("00:03")).toEqual("twelve oh three am");
  });

  test('12:06 pm', () => {
    expect(timeWord("12:06")).toEqual("twelve oh six pm");
  });
});

describe("specific time", () => {
  test('12:10 am', () => {
    expect(timeWord("00:10")).toEqual("twelve ten am");
  });

  test('4:20 pm', () => {
    expect(timeWord("16:20")).toEqual("four twenty pm");
  });

  test('9:40 pm', () => {
    expect(timeWord("21:40")).toEqual("nine forty pm");
  });

  test('10:50 am', () => {
    expect(timeWord("10:50")).toEqual("ten fifty am");
  });

  test('6:26 am', () => {
    expect(timeWord("06:26")).toEqual("six twenty six am");
  });

  test('12:30 pm', () => {
    expect(timeWord("12:30")).toEqual("twelve thirty pm");
  });

  test('11:59 pm', () => {
    expect(timeWord("23:59")).toEqual("eleven fifty nine pm");
  });

  test('5:14 am', () => {
    expect(timeWord("05:14")).toEqual("five fourteen am");
  });
});