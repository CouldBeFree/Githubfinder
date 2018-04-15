class Github {
    constructor(){
        this.client_id = '252e6f2530b612003b47';
        this.client_secret = '61b15b7ff46ec819a02994a208d7d87c5c78e2b0';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}