const cfg = {
    port: 9090,
    get baseUrl() {
        return 'http://localhost:' + this.port
    },
    get client(){
        return {
            clientId: 'JJTNgYBZgAsDB52ixfAg4NTc7XnJSQD9',
            clientSecret: 'ZkMMEwK5GfDBXNxHiNJNP6tTGyW2E4XbzGmGMuYjNcuMYpqZRSqF4qzuM5GtzmzN2eQ3nWio8j7L7uEGfh44sqjmYgvseY6kdX2PSiPQh69vWDaN5zyyys2zdEAtLXs3',
            accessTokenUri: 'https://auth.onepassport.eu/token',
            authorizationUri: 'https://auth.onepassport.eu/authorize',
            getResourcenUri: 'https://auth.onepassport.eu/whoami/emails',
            redirectUri: this.baseUrl + this.paths.authFlowCallback,
            scopes: ['identity.profile', 'identity.email', 'identity.contact_info'],
            state: '1234567890'
            
        }
    },
    paths: {
        authFlowStart: '/oauth-client/auth',
        authFlowCallback: '/oauth-client/auth/callback',
        resourceData: '/oauth-client/auth/identity'
    }
};

module.exports = cfg;