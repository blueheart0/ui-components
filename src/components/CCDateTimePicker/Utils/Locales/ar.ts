import dayjs from "dayjs";
import "dayjs/locale/ar";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("ar", {
  formats: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "D/‏M/‏YYYY",
    LL: "D MMMM YYYY",
    LMD: "D/\u200FM",
    LMM: "M/\u200FYYYY",
    LLL: "D MMMM YYYY h:mm A",
    LLLL: "dddd D MMMM YYYY h:mm A",
    CALD: "D/\u200FM [(]ddd[)]"
  },
  meridiemParse: "ص|م",
  isPM: function (input: string) {
    return "م" === input;
  },
  meridiem: function (hour: number, minute: any, isLower: any) {
    if (hour < 12) {
      return "ص";
    } else {
      return "م";
    }
  }
});
