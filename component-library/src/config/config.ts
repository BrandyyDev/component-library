interface ConfigEndpoints {
    auth: {
        register: string;
        login: string;
    };
    components: {
        stats: string;
        track: string;
    };
}

interface Config {
    apiBaseUrl: string;
    endpoints: ConfigEndpoints;
}

const config: Config = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api',
    endpoints: {
        auth: {
            register: '/auth/register',
            login: '/auth/login',
        },
        components: {
            stats: '/components/stats',
            track: '/components/track',
        },
    },
};

export default config;