export const config = {
  auth: {
    clientId: "e72c2490-1269-46f8-b79e-de3e38016b7d", // Application (client) ID from Azure
    authority: "https://login.microsoftonline.com/97f7fcbd-e642-4be8-b84f-fc2cd7f8d6ff", // Directory (tenant) ID from Azure
    clientSecret: "bY88Q~yyLHNctB7GGyOC6RWjLmrCJQ7g.KX6caOp", // The client secret you generated
  },
  system: {
    loggerOptions: {
      logLevel: "Info", // Adjust for your needs
      piiLoggingEnabled: false,
    },
  },
};
