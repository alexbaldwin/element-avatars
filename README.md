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
http://avatar.simplecasual.com/120/Rich%20Rines?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```

![Avatar for Rich Rines](http://avatar.simplecasual.com/120/Rich%20Rines?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)

### Square avatars
Use the parameter `square` to get square-shaped avatars. 

```
http://avatar.simplecasual.com/120/Rich%20Rines?colors=264653,2a9d8f,e9c46a,f4a261,e76f51&square
```

![Square avatar for Rich Rines](http://avatar.simplecasual.com/120/Rich%20Rines?colors=264653,2a9d8f,e9c46a,f4a261,e76f51&square)

### Name

You can use a `username`, `email` or any random text to generate a unique `avatar`. 

```
http://avatar.simplecasual.com/120/Rich%20Rines
```

![Avatar for Rich Rines](http://avatar.simplecasual.com/120/Rich%20Rines)


### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an `svg` image with a 88*88px size.

```
http://avatar.simplecasual.com/
```

![Random avatar](http://avatar.simplecasual.com/)


### Random sampling

![Random sample avatar](http://avatar.simplecasual.com/88/octagon)
![Random sample avatar](http://avatar.simplecasual.com/88/water)
![Random sample avatar](http://avatar.simplecasual.com/88/air)
![Random sample avatar](http://avatar.simplecasual.com/88/lemur)
![Random sample avatar](http://avatar.simplecasual.com/88/global)
![Random sample avatar](http://avatar.simplecasual.com/88/beige)
![Random sample avatar](http://avatar.simplecasual.com/88/vector)
![Random sample avatar](http://avatar.simplecasual.com/88/munger)
![Random sample avatar](http://avatar.simplecasual.com/88/pentagram)
![Random sample avatar](http://avatar.simplecasual.com/88/smile)
![Random sample avatar](http://avatar.simplecasual.com/88/random)
![Random sample avatar](http://avatar.simplecasual.com/88/diskutil)
![Random sample avatar](http://avatar.simplecasual.com/88/squircle)
![Random sample avatar](http://avatar.simplecasual.com/88/flippy)
![Random sample avatar](http://avatar.simplecasual.com/88/bookwise)
![Random sample avatar](http://avatar.simplecasual.com/88/cookie)
