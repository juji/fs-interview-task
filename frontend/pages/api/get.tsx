import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import requestWithToken from '@/lib/requestWithToken';

export default withApiAuthRequired(async function getList(req, res) {
  try {

    const list = await requestWithToken({
        req, res, 
        scopes: ['read:todo'],
        uri: '/list'
    });

    res.status(200).json(list);

  } catch (error: any) {

    res.status(error.status || 500).json({ error: error.message });

  }
});
