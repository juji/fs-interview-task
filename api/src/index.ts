
import App from '@/App'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT ? Number(process.env.PORT) : null

App.bootstrap()
.then(() => App.listen( port ))
.catch((e: any) => {
  console.error('BOOTSTRAP ERROR');
  console.error(e);
  process.exit(1);
});
