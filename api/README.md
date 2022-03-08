# API for testing

## GET /weather

Returns weather information

```
> curl localhost:8080/weather

{"rainfall":10,"daylight":"daytime"}
```

## POST /security

Sets the security status

```
> curl -X POST localhost:8080/security

{"enabled":false}
```
