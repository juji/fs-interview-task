
import App from '@/App'


App.bootstrap()
.then(() => App.listen())
.catch((e: any) => {
  console.error('BOOTSTRAP ERROR');
  console.error(e);
  process.exit(1);
});
