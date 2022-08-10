import { google } from "googleapis";
require("dotenv").config();

const { API_KEY_SHEET } = process.env;

export const storeData = async (values: Array<string>) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credential.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  //   Instance of Google Sheets API
  const googleSheets: any = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = API_KEY_SHEET;

  // // Read rows from spreadsheet
  // const getRows = await googleSheets.spreadsheets.values.get({
  //   auth,
  //   spreadsheetId,
  //   range: "Sheet1!A:B",
  // });

  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [values],
    },
  });
};
