class Profile{
    constructor(){
        this.clientid = '',
        this.clientSecret = ''
    }

    async getProfile(username) {
        const baseUrl =`https://jsonplaceholder.typicode.com/users?username=${username}`;
        const profileRes = await fetch(baseUrl);
        const profile = await profileRes.json();

        const userid= profile[0].id;

        const todoUrl =`https://jsonplaceholder.typicode.com/todos`;
        const todoRes = await fetch(todoUrl);
        const todo = await todoRes.json();
        const userTodos =todo.filter(todo =>todo.userId===userid);

        return{
            profile,
            userTodos
        }
        
    }
}
