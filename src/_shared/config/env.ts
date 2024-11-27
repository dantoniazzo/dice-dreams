export const envVars = {
  nodeEnv: import.meta.env.NODE_ENV || "development",
  api: {
    https: import.meta.env.VITE_APP_BASE_URL,
  },
};
