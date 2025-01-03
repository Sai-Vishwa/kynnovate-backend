const { createProxyMiddleware } = require("http-proxy-middleware");

const setRequestBodydata = (proxyReq, req, res) => {
  if(req.body && Object.keys(req.body).length > 0) {
    const bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.write(bodyData);
  }
}
const responseHandle = (proxyRes, req, res) => proxyRes.headers['access-control-allow-origin'] = '*'
const proxyError = (err, req, res) => {
  console.error('Proxy Error:', err);
  res.status(500).send('Proxy Error');
}

const couponProxy = createProxyMiddleware({
  target: 'http://localhost:3206/api/v1/coupons',
  changeOrigin: true,
  pathRewrite: {
    '^/coupons': ''
  },
  on: {
    proxyReq: (proxyReq,req, res) => setRequestBodydata(proxyReq, req, res),
    proxyRes: (proxyRes, req, res) => responseHandle(proxyRes, req, res),
    error: (err, req, res) => proxyError(err, req, res)
  }
});

const bookingProxy = createProxyMiddleware({
    target: 'http://localhost:3207/api/v1/bookings',
    changeOrigin: true,
    pathRewrite: {
      '^/bookings': ''
    },
    on: {
      proxyReq: (proxyReq,req, res) => setRequestBodydata(proxyReq, req, res),
      proxyRes: (proxyRes, req, res) => responseHandle(proxyRes, req, res),
      error: (err, req, res) => proxyError(err, req, res)
    }
  });

  const postsAndReferralsProxy = createProxyMiddleware({
    target: 'http://localhost:3208/api/v1/posts-referrals',
    changeOrigin: true,
    pathRewrite: {
      '^/posts-referrals': ''
    },
    on: {
      proxyReq: (proxyReq,req, res) => setRequestBodydata(proxyReq, req, res),
      proxyRes: (proxyRes, req, res) => responseHandle(proxyRes, req, res),
      error: (err, req, res) => proxyError(err, req, res)
    }
  });

  const systemProxy = createProxyMiddleware({
    target: 'http://localhost:3209/api/v1/system',
    changeOrigin: true,
    pathRewrite: {
      '^/system': ''
    },
    on: {
      proxyReq: (proxyReq,req, res) => setRequestBodydata(proxyReq, req, res),
      proxyRes: (proxyRes, req, res) => responseHandle(proxyRes, req, res),
      error: (err, req, res) => proxyError(err, req, res)
    }
  });

module.exports = {
  couponProxy , bookingProxy , postsAndReferralsProxy , systemProxy
}