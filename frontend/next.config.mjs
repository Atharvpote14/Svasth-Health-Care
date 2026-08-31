/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/help/',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/care-services/faq',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/care-services/faq/',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/care-services/help',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
      {
        source: '/care-services/help/',
        destination: '/care-services/faq-help-center/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;