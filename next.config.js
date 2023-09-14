// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['localhost'], // Добавьте здесь домены, с которыми работает ваше приложение
  },
  env: {
    PORT_BACKEND: process.env.PORT_BACKEND || 'http://localhost:4000',
  },
};