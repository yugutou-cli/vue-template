
/**
 * 使用 token
 */
export function useToken() {
  return {
    token: sessionStorage.getItem('token') ,
    setToken(token: string) {
      sessionStorage.setItem('token', token)
    },
    removeToken() {
      sessionStorage.removeItem('token')
    },
  }
}
