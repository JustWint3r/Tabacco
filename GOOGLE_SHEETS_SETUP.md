# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically receive order submissions from your tobacco shop website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Tobacco Shop Orders" (or any name you prefer)
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123DEF456GHI789JKL/edit`
   - Sheet ID: `1ABC123DEF456GHI789JKL`

## Step 2: Create Google Cloud Project & Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create a Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Enter name: "Tobacco Shop Orders"
   - Click "Create and Continue"
   - Skip optional steps and click "Done"

5. Create a Key for the Service Account:
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose "JSON" format
   - Download the JSON file

## Step 3: Share Google Sheet with Service Account

1. Open the JSON file you downloaded
2. Copy the `client_email` value (looks like: `tobacco-shop-orders@project-123456.iam.gserviceaccount.com`)
3. In your Google Sheet, click "Share"
4. Paste the service account email
5. Set permission to "Editor"
6. Uncheck "Notify people"
7. Click "Share"

## Step 4: Set Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add the following variables from your JSON file:

```
GOOGLE_PROJECT_ID = [your project_id from JSON]
GOOGLE_PRIVATE_KEY_ID = [your private_key_id from JSON]
GOOGLE_PRIVATE_KEY = [your private_key from JSON - keep the quotes and \n]
GOOGLE_CLIENT_EMAIL = [your client_email from JSON]
GOOGLE_CLIENT_ID = [your client_id from JSON]
GOOGLE_SHEET_ID = [your Google Sheet ID from Step 1]
```

**Important Notes:**
- For `GOOGLE_PRIVATE_KEY`: Copy the entire value including quotes and \n characters
- Make sure to set all variables for "Production", "Preview", and "Development"

## Step 5: Initialize Sheet Headers (One-time setup)

After deploying your changes, you need to set up the sheet headers once:

1. Use a tool like Postman or curl to make a POST request to:
   ```
   https://your-site.vercel.app/api/setup-sheet
   ```

2. Or create a temporary button in your site to call this endpoint once

The headers will be set up in Chinese as follows:
- 提交时间 (Submission Time)
- 姓名 (First Name)
- 姓氏 (Last Name)
- 公司名称 (Company)
- 国家/地区 (Country)
- 街道地址 (Street Address)
- 公寓/单元 (Apartment)
- 城市 (City)
- 省份/州 (State)
- 邮政编码 (Postal Code)
- 电话 (Phone)
- 邮箱 (Email)
- 支付方式 (Payment Method)
- 订单备注 (Order Notes)
- 订购商品 (Ordered Items)
- 小计 (Subtotal)
- 运费 (Shipping)
- 总计 (Total)

## Step 6: Test the Integration

1. Deploy your changes to Vercel
2. Go to your website's billing page
3. Fill out a test order
4. Submit the order
5. Check your Google Sheet - you should see the order data appear automatically!

## Troubleshooting

### Common Issues:

1. **"Failed to submit order" error:**
   - Check environment variables are set correctly
   - Verify Google Sheet is shared with service account
   - Check Vercel function logs

2. **JSON parsing errors:**
   - Ensure `GOOGLE_PRIVATE_KEY` includes all quotes and \n characters
   - Don't modify the JSON values when copying

3. **Permission denied:**
   - Verify service account email is shared with Editor permission
   - Check Google Sheets API is enabled

### Viewing Logs:
- Go to Vercel Dashboard > Functions tab to see error logs
- Check browser console for client-side errors

## Security Notes

- Never commit the service account JSON file to your repository
- Keep environment variables secure
- The service account only has access to sheets you explicitly share
- Consider setting up monitoring for the sheet

## Next Steps

Once set up, every order submission will automatically:
1. Validate all required fields
2. Send data to your Google Sheet
3. Include timestamp, customer details, items, and totals
4. Show success/error messages to customers

You can now easily:
- Track all orders in real-time
- Export data for analysis
- Share access with team members
- Set up notifications for new orders 