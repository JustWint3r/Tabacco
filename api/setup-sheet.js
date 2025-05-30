const { google } = require('googleapis');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Set up headers for the sheet
    const headers = [
      '提交时间',
      '姓名',
      '姓氏',
      '公司名称',
      '国家/地区',
      '街道地址',
      '公寓/单元',
      '城市',
      '省份/州',
      '邮政编码',
      '电话',
      '邮箱',
      '支付方式',
      '订单备注',
      '订购商品',
      '小计',
      '运费',
      '总计'
    ];

    // Add headers to the first row
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:R1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [headers]
      }
    });

    // Format the header row (make it bold)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      resource: {
        requests: [
          {
            repeatCell: {
              range: {
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 18
              },
              cell: {
                userEnteredFormat: {
                  textFormat: {
                    bold: true
                  },
                  backgroundColor: {
                    red: 0.83,
                    green: 0.69,
                    blue: 0.22
                  }
                }
              },
              fields: 'userEnteredFormat(textFormat,backgroundColor)'
            }
          }
        ]
      }
    });

    res.status(200).json({ 
      success: true, 
      message: 'Google Sheet headers set up successfully!' 
    });

  } catch (error) {
    console.error('Error setting up sheet:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to set up sheet',
      error: error.message 
    });
  }
} 