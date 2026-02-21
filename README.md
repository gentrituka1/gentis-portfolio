# Genti's Portfolio

Portfolio site for Gentrit Uka, built with Next.js and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Contact form (email)

The contact form sends email via [Resend](https://resend.com). To enable it:

1. Copy `.env.example` to `.env.local`.
2. Sign up at [resend.com](https://resend.com) and create an API key.
3. Set `RESEND_API_KEY` in `.env.local`.

Optional: set `CONTACT_FROM_EMAIL` (default: `Portfolio <onboarding@resend.dev>`) and `CONTACT_TO_EMAIL` (default: `gentrit-uka@live.com`). With the default from address, Resend only delivers to the email you used to sign up until you verify a domain.
