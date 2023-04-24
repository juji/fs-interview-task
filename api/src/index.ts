
import App from '@/App'
import dotenv from 'dotenv'

dotenv.config()

App.bootstrap()
.then(() => App.listen( process.env.PORT ? Number(process.env.PORT) : null ))
.catch((e: any) => {
  console.error('BOOTSTRAP ERROR');
  console.error(e);
  process.exit(1);
});
