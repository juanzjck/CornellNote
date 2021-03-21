require('dotenv').config();
const { GraphQLServer  } = require('graphql-yoga');
const { importSchema}  = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const {verifyToken} = require('./src/utils');
const mongoose = require('mongoose');
const AuthDirective = require('./src/resolvers/Directives/AuthResolver');
const resolvers = require('./src/resolvers');
const ENABLE_PLAYGROUND = process.env.STAGE === 'production' ? false:'/';
const DEBUG_MODE_ON = process.env.DEBUG_ON === 'true' ? true:false;

//Connect the database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: true,
});
const mongo = mongoose.connection;
mongo.on('error', error => console.log(error))
    .once('open', () =>{ console.log('Connected to DB')
    if (!DEBUG_MODE_ON) {
        console = console || {};
        console.log = function(){};
    }
    });

//Import schema 
const typeDefs = importSchema( __dirname + '/schema.graphql');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives: {
        auth: AuthDirective,
    }
});

//Init server
const server = new GraphQLServer({
    schema,
    context: async (contextParams) => ({
        ...contextParams,
        userAuth: contextParams.request 
            ? await verifyToken(contextParams.request)
            : {},
    }
    ),
});
const serverOptions={
    playground: ENABLE_PLAYGROUND,
    bodyParserOptions: { limit: "10mb", type: "application/json" },
}
server.start(serverOptions,
    () => console.log('Servidor iniciado puerto 3030!')
);