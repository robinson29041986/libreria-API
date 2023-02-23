const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5000'];

const corsOptions = {
  allowedHeards: [
    'Origin',
    'X-Requested-With',
    'Context-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: whitelist,
  preflightContinue: false,
  optionsSuccessStatus: 200
};

export default corsOptions;