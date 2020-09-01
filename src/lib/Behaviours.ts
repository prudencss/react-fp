export class Animation {
    public static Ripple = "a-ripple";
    public static RevealOpacity = "a-reveal-opacity";
    public static RevealSlide = "a-reveal-slide";
    public static RevealScale = "a-reveal-scale2d";
}

export class Color {
    public static Primary = "primary";
    public static Secondary = "secondary";
    public static Accent = "accent";
    public static Success = "success";
    public static Info = "info";
    public static Warn = "warn";
    public static Danger = "danger";
    public static Disabled = "disabled";
    public static Light = "neutral-light";
    public static Dark = "neutral-dark";
}

export const ComponentColor = new Proxy(Color, {
    get: function(target, name) {
        if (!(name in target)) {
            throw new Error(`Property '${String(name)}' doesn't exist on type Color`);
        }
        return (infix: string) => `c-${infix}--${(target as any)[name]}`;
    }
});

export class Decoration {
    public static Discrete = 'u-shadow--discrete';
    public static Elevated = 'u-shadow--elevated';
    public static ElevatedBottom = 'u-shadow--elevated-bottom';
    public static sunken = 'u-shadow--sunken';
}

export const Disabled = 'u-pointer--disabled';

export class Size {
    public static Tiny = 'tiny';
    public static Small = 'small';
    public static Medium = 'medium';
    public static Large = 'large';
    public static Huge = 'huge';
}

export const ComponentSize = new Proxy(Size, {
    get: function(target, name) {
        if (!(name in target)) {
            throw new Error(`Property '${String(name)}' doesn't exist on type Color`);
        }
        return (infix: string) => `c-${infix}--${(target as any)[name]}`;
    }
});

export class ButtonType {
    public static Basic = 'c-btn--basic';
    public static Stroked = 'c-btn--stroked';
    public static Flat = 'c-btn--flat';
    public static Fab = 'c-btn--fab';
}
