/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_BACKEND_URL: "https://rybbit.fameve.com",
    NEXT_PUBLIC_DISABLE_SIGNUP: process.env.NEXT_PUBLIC_DISABLE_SIGNUP,
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version
  },
};

module.exports = nextConfig;
