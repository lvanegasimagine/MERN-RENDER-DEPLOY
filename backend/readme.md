# Crear instancia de Docker

```
docker run --name render-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5444:5432 postgres  
```