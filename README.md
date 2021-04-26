This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js Static generation

Page  
┌ ● /  
├ /\_app  
├ ○ /404  
├ ● /agro/[product]  
├ ├ /agro/oil
├ ├ /agro/organic-product
├ ├ /agro/pulses
├ └ [+2 more paths]
└ ● /apparels/[product]  
 ├ /apparels/saree
└ /apparels/lehenga

- First Load JS shared by all  
  ├ chunks/03be3a6357e6f87c51fa97f920079f962e4645c8.6c49b7.js  
  ├ chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.92a4b8.js  
  ├ chunks/framework.e3de07.js  
  ├ chunks/main.6628c3.js  
  ├ chunks/pages/\_app.623072.js  
  ├ chunks/webpack.50bee0.js  
  └ css/178cfb57ae54232c394c.css

λ (Server) server-side renders at runtime (uses getInitialProps or getServerSideProps)
○ (Static) automatically rendered as static HTML (uses no initial props)
● (SSG) automatically generated as static HTML + JSON (uses getStaticProps)
(ISR) incremental static regeneration (uses revalidate in getStaticProps)
