import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';

import setWritePermission from '@/lib/auth0/setWritePermission'

export default withApiAuthRequired(async function users(req, res) {
  
  const session = await getSession(req,res)
  if(!session?.user?.accessTokenScope?.admin)
    return res.status(400).json({ error: 'should be admin' })

  try {

    const { userId, allowWrite } = req.body
    const response = await setWritePermission( userId, allowWrite )
    res.status(200).json({ response });

  } catch (error: any) {

    res.status(error.status || 500).json({ error: error.message });

  }
});
