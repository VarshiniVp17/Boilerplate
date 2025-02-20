export const config = {
  auth: {
    clientId: "client_id", // Application (client) ID from Azure
    authority: "https://login.microsoftonline.com/tenant_id", // Directory (tenant) ID from Azure
    clientSecret: "clien_secret", // The client secret you generated
  },
  system: {
    loggerOptions: {
      logLevel: "Info", // Adjust for your needs
      piiLoggingEnabled: false,
    },
  },
};
