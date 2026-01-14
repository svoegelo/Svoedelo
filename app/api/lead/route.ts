// app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('❌ Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env.local');
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const businessType = formData.get('businessType')?.toString() || '';
    const employees = formData.get('employees')?.toString() || '';
    const turnover = formData.get('turnover')?.toString() || '';
    const needs = formData.get('needs')?.toString() || '';

    const message = `
🆕 Новая заявка на расчёт стоимости!

💼 Вид деятельности: ${businessType}
👥 Сотрудников: ${employees}
💰 Оборот: ${turnover}
📝 Пожелания: ${needs || '—'}
🕒 ${new Date().toLocaleString('ru-RU')}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error('Telegram API error:', await response.text());
      return NextResponse.json({ success: false, error: 'Telegram send failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}