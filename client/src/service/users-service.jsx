// const PORT = process.env.PORT || 8080;
const API = process.env.NODE_ENV === 'production' ? `https://moviesmern.herokuapp.com` : 'http://localhost:8080';
/**
 * async function that updating the Users state
 * and returns the Users
 * * @returns {data:Users array,success:bool}
 */
export async function getAllUsers() {
    try {
        return await fetch(`${API}/users/all`)
            .then((res) => { return res.json() })
            .then(results => { return results.data })
    } catch (error) {
        console.log(error);
    }

}
/**
 * async function that add a new User
 * and returns the User 
 * * @returns {data:Users array,success:bool}
 */
export async function registerUserToDb(userToSave) {
    const options = {
        method: "POST",
        body: JSON.stringify({ user: userToSave }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${API}/users/register`, options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new User
 * and returns the User 
 * * @returns {data:Users array,success:bool}
 */
 export async function loginUserApi(userItem) {
    const options = {
        method: "POST",
        body: JSON.stringify({ user: userItem }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${API}/users/login`, options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}
/**
 * async function that add a new User
 * and returns the User 
 * * @returns {data:Users array,success:bool}
 */
export async function removeUser(userId) {
    const options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${API}/users/user/${userId}`, options)
            .then((res) => { return res.json() })
    } catch (error) {
        console.log(error);
    }
}