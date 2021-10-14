import { processFeed } from "./process-feed-worker";
import { mergeRawFeedToFeedMap } from "./process-order-book";

it("merge order book WS messages to local state", () => {
  expect(
    mergeRawFeedToFeedMap({
      incomingMessages: [
        {
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [
            [57559, 469927],
            [57881.5, 233545],
            [57935, 0],
            [57971.5, 1839605],
            [58024.5, 0],
            [58048.5, 250000],
            [58057, 0],
            [58076, 114177],
            [58115.5, 19889],
            [58116, 58490],
            [58118.5, 0],
            [58121, 1000],
          ],
          asks: [
            [58165.5, 1256],
            [58166, 0],
            [58168, 0],
            [58170.5, 10000],
            [58175.5, 0],
            [58178, 19206],
            [58187.5, 1000],
            [58193.5, 0],
            [58201, 0],
            [58204.5, 15192],
            [58205, 82547],
            [58222, 399999],
            [58231, 121546],
            [58231.5, 0],
            [58232, 0],
            [58245, 140000],
            [58250, 0],
            [58254, 7056],
            [58255.5, 250000],
            [58268, 0],
            [58283.5, 0],
            [58338, 0],
            [58372.5, 1893669],
            [58418.5, 232715],
            [58895.5, 0],
            [58900, 490420],
          ],
        },
        {
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [[58134.5, 0]],
          asks: [],
        },
        {
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [],
          asks: [
            [58167.5, 0],
            [58170, 10000],
          ],
        },
        {
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [
            [58121, 0],
            [58125, 1000],
          ],
          asks: [],
        },
        {
          feed: "book_ui_1",
          product_id: "PI_XBTUSD",
          bids: [],
          asks: [
            [58172.5, 1000],
            [58187.5, 0],
          ],
        },
      ],
      currentFeedStorage: {
        asks: {
          "58157": 7144,
          "58169": 15000,
          "58177": 6611,
          "58178": 29218,
          "58179": 9865,
          "58185": 6010,
          "58190": 5000,
          "58195": 450,
          "58201": 1000,
          "58203": 2017,
          "58205": 82536,
          "58210": 25000,
          "58212": 9415,
          "58220": 2582,
          "58223": 5230,
          "58225": 26019,
          "58232": 122158,
          "58233": 11940,
          "58250": 7056,
          "58252": 2028,
          "58259": 7559,
          "58268": 140000,
          "58284": 2093,
          "58291": 8220,
          "58317": 31323,
          "58338": 1893669,
          "58343": 7514,
          "58344": 10559,
          "58359": 74999,
          "58373": 399124,
          "58380": 7000,
          "58388": 2786,
          "58400": 500000,
          "58462": 36278,
          "58610": 300000,
          "58671": 26024,
          "59314": 80000,
          "58180.5": 15000,
          "58182.5": 3815,
          "58193.5": 11642,
          "58486.5": 17512,
          "58472.5": 200,
          "58240.5": 40696,
          "58415.5": 2106,
          "58181.5": 1000,
          "58291.5": 58578,
          "58347.5": 27843,
          "58418.5": 232703,
          "58354.5": 12942,
          "58178.5": 6688,
          "58244.5": 2027,
          "58307.5": 1982,
          "58399.5": 1927,
          "58516.5": 2086,
          "58231.5": 399999,
          "58895.5": 479420,
          "58338.5": 50000,
          "58283.5": 250000,
          "58377.5": 40000,
          "58441.5": 3000,
          "58493.5": 225000,
          "58900.5": 300000,
          "59656.5": 400000,
          "60528.5": 900000,
          "58160.5": 4435,
          "58168.5": 1,
          "58173.5": 2500,
          "58175.5": 10000,
          "58253.5": 150000,
          "58754.5": 176,
          "58167.5": 10000,
        },
        bids: {
          "55866": 900000,
          "56738": 300000,
          "57559": 469928,
          "57818": 1904,
          "57901": 225000,
          "57988": 7524,
          "58026": 2028,
          "58028": 1984,
          "58031": 2574,
          "58056": 150000,
          "58057": 250000,
          "58058": 2024,
          "58070": 25,
          "58073": 148160,
          "58076": 114186,
          "58077": 150000,
          "58086": 1901,
          "58087": 20000,
          "58089": 61532,
          "58090": 11618,
          "58092": 150000,
          "58093": 23999,
          "58094": 7500,
          "58095": 2071,
          "58097": 150000,
          "58100": 40000,
          "58103": 3909,
          "58110": 15000,
          "58115": 25000,
          "58119": 4587,
          "58120": 1000,
          "58126": 1000,
          "58128": 6878,
          "58127.5": 6174,
          "58122.5": 66020,
          "58121.5": 20009,
          "58109.5": 3576,
          "58100.5": 6363,
          "58098.5": 11940,
          "58089.5": 20000,
          "57943.5": 8995,
          "57892.5": 12839,
          "57971.5": 1839605,
          "58027.5": 5212,
          "58087.5": 25,
          "58080.5": 108973,
          "58143.5": 1000,
          "57933.5": 2052,
          "57993.5": 1976,
          "58050.5": 49964,
          "58083.5": 40000,
          "57319.5": 225000,
          "57784.5": 225000,
          "58115.5": 79089,
          "57970.5": 3000,
          "57559.5": 79477,
          "57881.5": 233906,
          "58077.5": 399999,
          "58118.5": 1000,
          "58124.5": 5000,
          "58134.5": 2500,
          "58055.5": 7354,
        },
      },
    })
  ).toStrictEqual({
    asks: {
      "58157": 7144,
      "58169": 15000,
      "58170": 10000,
      "58177": 6611,
      "58178": 19206,
      "58179": 9865,
      "58185": 6010,
      "58190": 5000,
      "58195": 450,
      "58203": 2017,
      "58205": 82547,
      "58210": 25000,
      "58212": 9415,
      "58220": 2582,
      "58222": 399999,
      "58223": 5230,
      "58225": 26019,
      "58231": 121546,
      "58233": 11940,
      "58245": 140000,
      "58252": 2028,
      "58254": 7056,
      "58259": 7559,
      "58284": 2093,
      "58291": 8220,
      "58317": 31323,
      "58343": 7514,
      "58344": 10559,
      "58359": 74999,
      "58373": 399124,
      "58380": 7000,
      "58388": 2786,
      "58400": 500000,
      "58462": 36278,
      "58610": 300000,
      "58671": 26024,
      "58900": 490420,
      "59314": 80000,
      "58180.5": 15000,
      "58182.5": 3815,
      "58486.5": 17512,
      "58472.5": 200,
      "58240.5": 40696,
      "58415.5": 2106,
      "58181.5": 1000,
      "58291.5": 58578,
      "58347.5": 27843,
      "58418.5": 232715,
      "58354.5": 12942,
      "58178.5": 6688,
      "58244.5": 2027,
      "58307.5": 1982,
      "58399.5": 1927,
      "58516.5": 2086,
      "58338.5": 50000,
      "58377.5": 40000,
      "58441.5": 3000,
      "58493.5": 225000,
      "58900.5": 300000,
      "59656.5": 400000,
      "60528.5": 900000,
      "58160.5": 4435,
      "58168.5": 1,
      "58173.5": 2500,
      "58253.5": 150000,
      "58754.5": 176,
      "58165.5": 1256,
      "58170.5": 10000,
      "58204.5": 15192,
      "58255.5": 250000,
      "58372.5": 1893669,
      "58172.5": 1000,
    },
    bids: {
      "55866": 900000,
      "56738": 300000,
      "57559": 469927,
      "57818": 1904,
      "57901": 225000,
      "57988": 7524,
      "58026": 2028,
      "58028": 1984,
      "58031": 2574,
      "58056": 150000,
      "58058": 2024,
      "58070": 25,
      "58073": 148160,
      "58076": 114177,
      "58077": 150000,
      "58086": 1901,
      "58087": 20000,
      "58089": 61532,
      "58090": 11618,
      "58092": 150000,
      "58093": 23999,
      "58094": 7500,
      "58095": 2071,
      "58097": 150000,
      "58100": 40000,
      "58103": 3909,
      "58110": 15000,
      "58115": 25000,
      "58116": 58490,
      "58119": 4587,
      "58120": 1000,
      "58125": 1000,
      "58126": 1000,
      "58128": 6878,
      "58127.5": 6174,
      "58122.5": 66020,
      "58121.5": 20009,
      "58109.5": 3576,
      "58100.5": 6363,
      "58098.5": 11940,
      "58089.5": 20000,
      "57943.5": 8995,
      "57892.5": 12839,
      "57971.5": 1839605,
      "58027.5": 5212,
      "58087.5": 25,
      "58080.5": 108973,
      "58143.5": 1000,
      "57933.5": 2052,
      "57993.5": 1976,
      "58050.5": 49964,
      "58083.5": 40000,
      "57319.5": 225000,
      "57784.5": 225000,
      "58115.5": 19889,
      "57970.5": 3000,
      "57559.5": 79477,
      "57881.5": 233545,
      "58077.5": 399999,
      "58124.5": 5000,
      "58055.5": 7354,
      "58048.5": 250000,
    },
  });
});

export const testFeedOutput = {
  asks: [
    {
      price: 58154,
      size: 12500,
      total: 12500,
      pricePercent: 100,
      sizePercent: 0.9277759799541011,
    },
    {
      price: 58149,
      size: 178,
      total: 12678,
      pricePercent: 99.78041282389108,
      sizePercent: 0.013211529954546398,
    },
    {
      price: 58138,
      size: 90,
      total: 12768,
      pricePercent: 99.29732103645146,
      sizePercent: 0.006679987055669527,
    },
    {
      price: 58133,
      size: 118126,
      total: 130894,
      pricePercent: 99.07773386034255,
      sizePercent: 8.767557232644652,
    },
    {
      price: 58130,
      size: 1261,
      total: 132155,
      pricePercent: 98.9459815546772,
      sizePercent: 0.09359404085776972,
    },
    {
      price: 58118,
      size: 32000,
      total: 164155,
      pricePercent: 98.41897233201581,
      sizePercent: 2.3751065086824985,
    },
    {
      price: 58115,
      size: 98054,
      total: 262209,
      pricePercent: 98.28722002635047,
      sizePercent: 7.277771675073554,
    },
    {
      price: 58101,
      size: 500,
      total: 262709,
      pricePercent: 97.6723759332455,
      sizePercent: 0.03711103919816404,
    },
  ],
  bids: [
    {
      price: 55877,
      size: 100000,
      total: 100000,
      pricePercent: 0,
      sizePercent: 7.422207839632809,
    },
    {
      price: 56633,
      size: 300000,
      total: 400000,
      pricePercent: 33.201581027667984,
      sizePercent: 22.266623518898427,
    },
    {
      price: 56819,
      size: 27843,
      total: 427843,
      pricePercent: 41.370223978919626,
      sizePercent: 2.066565328788963,
    },
    {
      price: 57212,
      size: 225000,
      total: 652843,
      pricePercent: 58.629776021080374,
      sizePercent: 16.699967639173817,
    },
    {
      price: 57286,
      size: 8923,
      total: 661766,
      pricePercent: 61.879666227492315,
      sizePercent: 0.6622836055304355,
    },
    {
      price: 57303,
      size: 27843,
      total: 689609,
      pricePercent: 62.62626262626263,
      sizePercent: 2.066565328788963,
    },
    {
      price: 57342,
      size: 58578,
      total: 748187,
      pricePercent: 64.33904259991216,
      sizePercent: 4.347780908300106,
    },
    {
      price: 57375,
      size: 469523,
      total: 1217710,
      pricePercent: 65.788317962231,
      sizePercent: 34.84897291487915,
    },
    {
      price: 57483,
      size: 29598,
      total: 1247308,
      pricePercent: 70.53140096618358,
      sizePercent: 2.1968250763745187,
    },
    {
      price: 57520,
      size: 100000,
      total: 1347308,
      pricePercent: 72.15634606938954,
      sizePercent: 7.422207839632809,
    },
  ],
};

it("order book feed processor", async () => {
  await expect(
    processFeed({
      tick: 0.5,
      feedStorage: {
        asks: {
          "58101": 500,
          "58115": 98054,
          "58118": 32000,
          "58130": 1261,
          "58133": 118126,
          "58138": 90,
          "58149": 178,
          "58154": 12500,
        },
        bids: {
          "55877": 100000,
          "56633": 300000,
          "56819": 27843,
          "57212": 225000,
          "57286": 8923,
          "57303": 27843,
          "57342": 58578,
          "57375": 469523,
          "57483": 29598,
          "57520": 100000,
        },
      },
    })
  ).resolves.toStrictEqual(testFeedOutput);
});
