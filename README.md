# সুস্থ ডায়াগনস্টিক ও ক্লিনিক: অ্যাপয়েন্টমেন্ট পেজ (Next.js 15 + Tailwind 4)

```
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```
- নাম, ফোন, হোয়াটসঅ্যাপ, সার্ভিস, ডাক্তার, সময়, রিভিউ, FAQ: `src/data/site.js`
- ছবি: `public/` ফোল্ডারে (clinic.jpg, doc-*.jpg), পথ `src/data/site.js` এ
- বুকিং যায় Telegram-এ (`.env.local` এ টোকেন ও চ্যাট আইডি), না বসালে টার্মিনালে দেখায়
- Vercel-এ ডিপ্লয়ের সময় একই দুটো Environment Variable বসান

ফোল্ডার: `src/app/_components` (শুধু এই পেজের), `src/components` (গ্লোবাল), `src/lib`, `src/data`
