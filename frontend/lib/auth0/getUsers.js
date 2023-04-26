
import { auth0 } from './index'

export default async function getUsers( page = 0 ){

    return auth0.users.getAll({
        per_page: 10,
        page
    }).then(async (users) => {

        return await Promise.all(users.map(async (user) => {

            const permissions = await auth0.users.getPermissions({ id: user.user_id })
            return {
                ...user,
                permissions
            }

        }))

    })

}