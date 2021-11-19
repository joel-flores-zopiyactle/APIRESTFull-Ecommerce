import mongoose from 'mongoose';

class ConexionDB {

    connectDB() {

        const DB_URI:string = process.env.DB_URI || 'mongodb+srv://admin123:12345678joel@iventas.geh69.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

        // const options = {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // };

        mongoose.connect(DB_URI)
        .then(res => {
            console.log('**** CONEXION ESTABLECIDA A MONGODB ****');
        }).catch(err => {
            console.log('**** FALLO LA CONEXION A MONGODB **** ');
            console.log(err);
        })
       
    }

    desconnectDB() {

    }
}


export const conexion = new ConexionDB();