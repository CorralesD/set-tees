export const generateUserid = () => {

    const c = document.cookie.split('=')

    if(c.includes('uuid')) {
        const userId = c[1];

        console.log('user is : ' + userId);
        return userId;
    } else {
        const randomNum = Math.floor(Math.random() * 1000000);
        const userId = randomNum;

        const d = new Date();
        d.setDate(d.getDate()+1)
        let expires = "expires="+d.toUTCString();
      
        document.cookie = 'uuid=' + userId + ';' + expires;

        console.log('user is : ' + userId);
        return userId;
    }
};

// const setUserIdCookie = () => {

//     const userId = generateUserid();
//     const d = new Date();
//     d.setDate(d.getDate()+1)
//     let expires = "expires="+d.toUTCString();
  
//   document.cookie = 'uuid=' + userId + ';' + expires;
// };
  