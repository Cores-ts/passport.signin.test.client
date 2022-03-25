const cfg = {
    port: 9090,
    get baseUrl() {
        return 'http://localhost:' + this.port
    },
    get client(){
        return {
            clientId: 'iv6FnGCFgMH8wryYQmeJniT8nERwM8KR',
            clientSecret: 'DGqPDW5AtSXnQKJB8kyks6mb6SqCWSmsbBF7NFvzory2DB86eWGpg75Aw9XhqvNxzCRu36zZ5cjKWuSX3jNGBK9y2XimvDCxuBPb3kzuGWkCsecFk7zSbskNRWdZpdsH',
            accessTokenUri: 'https://auth.getonepass.eu/token',
            authorizationUri: 'https://auth.getonepass.eu/authorize',
            getResourceUri: 'https://auth.getonepass.eu/whoami/emails',
            getResourceJobProfileUri: 'https://auth.getonepass.eu/whoami/job-profile',
            getResourceOrganizationsUri: 'https://auth.getonepass.eu/whoami/organizations',
            redirectUri: this.baseUrl + this.paths.authFlowCallback,
            scopes: ['identity.profile', 'identity.email', 'identity.contact_info', 'identity.job_profile', 'organizations.memberships'],
            state: '1234567890'
            
        }
    },
    paths: {
        authFlowStart: '/oauth-client/auth',
        authFlowCallback: '/oauth-client/auth/callback',
        resourceData: '/oauth-client/auth/identity',
        resourceJobProfileData: '/oauth-client/auth/job-profile',
        resourceOrganizationsData: '/oauth-client/auth/organizations'
    }
};

module.exports = cfg;