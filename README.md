### This TechSketch shows usage of @, =, and & scope properties used on custom angular directives.

Angular directives have various options for working with $scope. First of all you don't have to use the built-in $scope object at all. You can choose to have your directive totally work within the scope of it's parent, or you can choose to have it work with it's very own isolated $scope object. Isolated scope allows your directive to be totally independent (isolated) from all other instances of your directive, thus avoiding variable collisions. However, even if your directive uses isolate scope, it can still interact with the outside world by means of scope properties. These, in effect, allow you to define a specific API that enables the passing values, objects.

