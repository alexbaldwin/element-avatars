## How to use Element Avatars service

To generate a custom avatar just embed the following URL `http://avatar.simplecasual.com/` and optionally append a size and a username to generate a custom avatar.

### Custom size (Optional)

```
http://avatar.simplecasual.com/40

```

![Avatar of 40px](http://avatar.simplecasual.com/40)


```
http://avatar.simplecasual.com/120

```

![Avatar of 120px](http://avatar.simplecasual.com/120)


### Custom colors (Optional)

By default, we are using hard-coded color paletters. You can pass an array of colors using the parameter `color` 

```
http://avatar.simplecasual.com/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```

![Avatar for Maria Mitchell](http://avatar.simplecasual.com/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)

### Square avatars
Use the parameter `square` to get square-shaped avatars. 

```
http://avatar.simplecasual.com/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51?square
```

![Square avatar for Maria Mitchell](http://avatar.simplecasual.com/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51?square)

### Name

You can use a `username`, `email` or any random text to generate a unique `avatar`. 

```
http://avatar.simplecasual.com/120/Maria%20Mitchell
```

![Avatar for Maria Mitchell](http://avatar.simplecasual.com/120/Maria%20Mitchell)


### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an `svg` image with a 88*88px size.

```
http://avatar.simplecasual.com/
```

![Random avatar](http://avatar.simplecasual.com/)

