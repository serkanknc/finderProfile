const profile = new Profile();
const userUI = new UserUI();
const searchUser = document.querySelector("#searchProfile");

searchUser.addEventListener("keyup",(e)=>{
    userUI.clear();
    let text = e.target.value;

    if(text !==""){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length===0){
                    userUI.showAlert(text);
                }else{
                    let todos = res.userTodos;
                    let user = res.profile[0];
                    userUI.showProfile(user);
                    userUI.showTodos(todos);
                }
            })
            .catch(err=>{
                userUI.showAlert(text);
            });
    }
});