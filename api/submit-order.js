const { google } = require('googleapis');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const {
      firstName,
      lastName,
      company,
      country,
      streetAddress,
      apartment,
      city,
      state,
      postcode,
      phone,
      email,
      paymentMethod,
      orderNotes,
      items,
      subtotal,
      shipping,
      total
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !country || !streetAddress || !city || !state || !postcode || !phone || !email || !paymentMethod) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

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

    // Format items for the sheet
    const itemsString = items.map(item => `${item.name} x${item.quantity} (¥${(item.numericPrice * item.quantity).toFixed(2)})`).join('; ');

    // Prepare row data
    const timestamp = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
    const rowData = [
      timestamp,
      firstName,
      lastName,
      company || '',
      country,
      streetAddress,
      apartment || '',
      city,
      state,
      postcode,
      phone,
      email,
      paymentMethod === 'wechatPay' ? '微信支付' : 'QQ支付',
      orderNotes || '',
      itemsString,
      `¥${subtotal.toFixed(2)}`,
      `¥${shipping.toFixed(2)}`,
      `¥${total.toFixed(2)}`
    ];

    // Add data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:R', // A to R columns (18 columns total)
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData]
      }
    });

    res.status(200).json({ 
      success: true, 
      message: 'Order submitted successfully!' 
    });

  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit order',
      error: error.message 
    });
  }
} 