import { storeData } from "../../services/spread-sheet";

export const validateRequestSpreadSheet = (req: {
  date: string;
  chat: string;
}): void => {
  const strSplit = req.chat?.split(" ");
  const date = req.date;
  const amount = strSplit[1];
  const category = strSplit[2];
  const item = strSplit.slice(3).join(" ");

  const storeChatToSpreadSheet: Array<string> = [date, category, item, amount];

  storeData(storeChatToSpreadSheet);
};
