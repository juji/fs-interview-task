
import { auth0 } from './index'

export default async function allowWrite( userId, allowWrite ){

    const permissions = [{ 
        permission_name: 'write:todo',
        resource_server_identifier: process.env.AUTH0_AUDIENCE
    }]

    return allowWrite ? auth0.users.assignPermissions(
        { id: userId },
        { permissions }
    ) : auth0.users.removePermissions(
        { id: userId },
        { permissions }
    )

}