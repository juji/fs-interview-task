import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import requestWithToken from '@/lib/requestWithToken';

export default withApiAuthRequired(async function getList(req, res) {
  try {

    const { id } = req.query

    const response = await requestWithToken({
        req, res, 
        scopes: ['write:todo'],
        uri: `/item/${id}`,
        method: 'DELETE'
    });

    res.status(200).json(response);

  } catch (error: any) {

    res.status(error.status || 500).json({ error: error.message });

  }
});
