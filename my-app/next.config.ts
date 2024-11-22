import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  experimental: {
    swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
  }
};

export default nextConfig;
