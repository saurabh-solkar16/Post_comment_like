function loginstatus(state={status:null,username:"saurabh solkar",password:""},action){
 
    switch (action.type) {
    
        case 'username':
          return { username: action.payload.username}
        default:
          return state
        }
}


export default loginstatus;