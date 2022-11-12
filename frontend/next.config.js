const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./sass/main.scss";`,
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Home",
      },
      {
        source: "/login",
        destination: "/login",
      },
      {
        source: '/cadastro',
        destination: '/Cadastro'
      },
      {
        source: "/ReceiverOrder",
        destination: "/receiver-order",
      },
      {
        source: "/dashboard/infos",
        destination: "/Dashboard",
      },
    ];
  },
};

