import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { FirebaseAuth } from './firebase';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:4400/graphql'
});


networkInterface.use([{
    async applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {}; // create the header object if needed
        }
        const token = await FirebaseAuth.currentUser.getIdToken(true);
        req.options.headers['Authorization'] = token;
        next();
    }
}]);

const apolloClient = new ApolloClient({ networkInterface });
export default apolloClient;
