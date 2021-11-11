//local server
export const baseUrl = "http://localhost:3000";

export const defaultIcons = {
    userIcon: 'https://image.flaticon.com/icons/png/128/847/847969.png'
}

export const user = {
    allUrl: baseUrl+'/profile',


    signUp: baseUrl+'/user/sign/up',
    signIn: baseUrl+'/user/sign/in',
    getProfile: baseUrl+'/user/get/profile',
    setProfile: baseUrl+'/user/set/profile',
}

export const post = {
    allUrl: baseUrl+'/posts',
}