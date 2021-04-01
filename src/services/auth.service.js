/**
 * Save the user token
 * @param {String} token
 * */
function setAuth(token) {
    localStorage.setItem('_tkn', token)
}

/**
 * Return token string
 * @return {String}
 */
function getAuth() {
    if (!isAuth()) return null

    const token = localStorage.getItem('_tkn')

    return token
}

/**
 * Check is user token exist
 * @return {Boolean}
 */
function isAuth() {
    return localStorage.getItem('_tkn') !== null
}

/**
 * Remove token credentials
 */
function removeAuth() {
    localStorage.removeItem('_tkn')
}

export { setAuth, getAuth, removeAuth, isAuth }
