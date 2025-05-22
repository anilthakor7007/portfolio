import { google } from 'googleapis';
import { readFileSync } from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const credentialsPath = path.join(process.cwd(), 'google-service-account.json');
const credentials = JSON.parse(readFileSync(credentialsPath, 'utf8'));
console.log("Resolved credentials path:", credentialsPath);


const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export const appendToSheet = async ({ firstName, lastName, email, phone, message }) => {
    const timestamp = new Date().toISOString();
    const values = [[timestamp, firstName, lastName, email, phone, message]];

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SHEET_ID, 
        range: 'Sheet1!A:F',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values,
        },
    });
};
