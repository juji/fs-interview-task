import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';

import getUsers from '@/lib/auth0/getUsers'

export default withApiAuthRequired(async function users(req, res) {
  
  const session = await getSession(req,res)
  if(!session?.user?.accessTokenScope?.admin)
    return res.status(400).json({ error: 'should be admin' })

  try {

    const users = await getUsers()
    res.status(200).json( users );

  } catch (error: any) {

    res.status(error.status || 500).json({ error: error.message });

  }
});
