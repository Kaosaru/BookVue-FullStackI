//Antes de esto se installa webpack (npm install webpack)
module.exports = {//convierte
    entry: './src/app/index.js',//archivo de entrada
    output: {//salida
        path: __dirname + '/src/public',//carpeta en src
        filename: 'bundle.js'//archivo que crea
    }
};
//Después de esto se usa npm remove webpack y se quita de las dependencias ordinarias
//Se utiliza npm install webpack -D para instalarlo como una dependencia de desarrollo en el package.json
//Al finalizar la instalación se ejecuta npm run webpack para ejecutar el script del package.json
//y crea el archivo especificado en el webpack.config (bundle.js)
//después de generar el bundle se ejecuta npm install babel-loader babel-preset-env vue-loader vue-template-compiler -D
