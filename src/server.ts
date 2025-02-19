import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { cca, authCodeUrlParameters } from './core/auth/azureAuth';
import { swaggerSpec } from './infrastructure/config/swagger.config';
import { envs } from './core/config/env';

interface ServerOptions {
  port: number;
  apiPrefix: string;
}

export class Server {
  private readonly app: Application = express();
  private readonly port: number;

  constructor(options: ServerOptions) {
    const { port } = options;
    this.port = port;
  }

  async start(): Promise<void> {
    this.app.use(express.json());

    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).send({
        message: 'Welcome to Initial API! \n Endpoints available at http://localhost:3000/',
      });
    });

    this.app.get('/auth', (_req: Request, res: Response) => {
      cca.getAuthCodeUrl(authCodeUrlParameters)
        .then((response) => res.redirect(response))
        .catch((error) => {
          console.error('Error generating auth code URL:', error);
          res.status(500).send('Error during login');
        });
    });

    this.app.get('/auth/callback', (req: Request, res: Response) => {
      const tokenRequest = {
        code: req.query.code as string,
        scopes: ['user.read'],
        redirectUri: envs.REDIRECT_URI,
      };

      cca.acquireTokenByCode(tokenRequest)
        .then((response) => {
          res.status(200).json({
            message: 'Login successful!',
            accessToken: response.accessToken,
            idToken: response.idToken,
          });
        })
        .catch((error) => {
          console.error('Error acquiring token:', error);
          res.status(500).send('Error during token acquisition');
        });
    });

    // Serve Swagger UI
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Start the server
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}...`);
    });
  }
}
