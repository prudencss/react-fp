# Button-Component

## Variations in
  * size
  * theme (color)
  * click UI/UX (animation)
  * drop-shadow (decoration)
  * disabled
  * html button type (type)
  * themed (grouped) styles (buttonType)
  * circular (fab)

Note that there is a pure-scss version of this component (as I guess there'll be in most cases) in the [scss-version of prudencss](https://github.com/prudencss/scss/blob/master/src/components/_components__button.scss).

```jsx padded
    import { EButtonType, EIntrinsicButtonType } from "../../enums/Button";
    import * as EBehavior from "../../enums/Behaviors";

    import "../../.docbook/prudencss-settings.scss";


import "@prudencss/scss";
    import "@prudencss/icons-svg";

    <Button size={EBehavior.ESize.XS}>Tiny Button</Button>
    <Button size={EBehavior.ESize.S}>Small Button</Button>
    <Button>Normal Button</Button>
    <Button size={EBehavior.ESize.L}>Large Button</Button>
    <Button size={EBehavior.ESize.XL}>Huge Button</Button>
```
<!-- <Playground> -->
<!--     <SizeVariations {...SizeVariations.args} /> -->
<!--     <ColorVariations {...ColorVariations.args} /> -->
<!--     <DecorationVariations {...DecorationVariations.args} /> -->
<!--     <AnimationVariations {...AnimationVariations.args} /> -->
<!--     <DisabledVariations {...DisabledVariations.args} /> -->
<!--     <TypeVariations {...TypeVariations.args} /> -->
<!-- </Playground> -->
