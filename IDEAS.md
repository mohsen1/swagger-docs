# Resolve flow
Before using a Swagger document for rendering, it should get "resolved". Resolving means:

1. Resolve all `$ref` references
2. Add path level parameters to operations under that path
3. Add global level securities to all operations
4. ...?


# Make an Angular Filter for striping out vendor extension
It can be used like this:

```
ng-repeat="parameter in parameters | removeVX"
```
