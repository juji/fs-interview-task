import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import requestWithToken from '@/lib/requestWithToken';

export default withApiAuthRequired(async function getList(req, res) {
  try {

    const { text } = req.body

    const response = await requestWithToken({
        req, res, 
        uri: '/item',
        method: 'POST',
        data: { text }
    });

    res.status(200).json(response);

  } catch (error: any) {

    res.status(error.status || 500).json({ error: error.message });

  }
});
