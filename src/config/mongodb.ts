import mongoose from 'mongoose';

class ConexionDB {

    connectDB() {

        const DB_URI:string = process.env.DB_URI || 'mongodb://localhost:27017/ecommerce';
        //const DB_URI:string = "mongodb://localhost:27017/ecommerce"
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