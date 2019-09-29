# Tablas de Multiplicar en NodeJS

Aplicación de consola para crear archivos de las tablas de multiplicar

## Instalación

```
npm install
```

## Uso

Para crear archivos de texto con las tablas de multiplicar ejecuta el comando **crear**:

```
$ node index crear --base 7 // base es la tabla que se va a generar
```

Por defecto el limite de la tabla es 10, si se quiere cambiar el limite se agrega el argumento ```--limite``` con el número limite que se desée:

```
$ node index crear --base 88 --limite 5
```

Si de desea imprimir la tabla de multiplicar en la consola se usa el comando **listar** que acepta los mismos argumentos que el comando crear:

```
$ node index listar --base 99 --limite 30
```

## Posibles Errores

Por defecto la carpeta *archivos* no se encuentra incluida en el repositorio, se debe crear en la misma carpeta que el archivo *index.js*

```
$ mkdir archivos
```

### Versión 1.0.0
