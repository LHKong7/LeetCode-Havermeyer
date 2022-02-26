## Browser



### Animations



##### Avoid animating expensive properties

Some properties are more expensive to change than others, and are therefore more likely to make things stutter. For example, 

- `box-shadow` of an element requires a much more expensive paint operation than changing
- changing the `width` of an element is likely to be more expensive than chaning its `transform`



There are two primary ways to create animations on the web: With CSS and With JavaScript. 

​	CSS animations for simpler "one-shot" transitions, like toggling UI element states

​	JavaScript animations when you want to have advanced effects like **bouncing, stop, pause, rewind or slow down**

- Use CSS when you have smaller, self-contained states for UI elements. CSS transitions and animations are ideal for bringing a naviagtion menu in from the side, or showing a tooltip
- Use JavaScript when you need significant control over your animations. The Web Animations API is the standards-based approach, available today in most modern browsers. This provides real objects, ideal for complex object-oriented applications. JS is also useful when you need to stop, pause, slow down or reverse your animations
- Use `requestAnimationFrame` directly when you want to orchestrate an entire scene by hand. It will be useful if you are building a game or drawing to an HTML canvas





