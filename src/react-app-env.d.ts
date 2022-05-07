/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      PUBLIC_URL: string
      REACT_APP_SERVICE_ID: string
      REACT_APP_TEMPLATE_ID: string
    }
  }