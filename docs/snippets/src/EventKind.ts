/**
 * A numeric value that represents the type of event in the LiveSession API.
 * Each event type has a corresponding numeric identifier.
 */
export enum EventKind {
    /** DOM mutation event */
    DOMChange = 1,

    /** Element lost focus event */
    ElementBlur = 2,

    /** Element gained focus event */
    ElementFocus = 3,

    /** Page location change event */
    LocationChange = 4,

    /** Mouse click event */
    MouseClick = 5,

    /** Mouse double click event */
    MouseDoubleClick = 6,

    /** Mouse button down event */
    MouseDown = 7,

    /** Mouse movement event */
    MouseMove = 8,

    /** Touch movement event */
    TouchMove = 9,

    /** Mouse button up event */
    MouseUp = 10,

    /** Element scroll event */
    Scroll = 11,

    /** Text selection event */
    Selection = 12,

    /** Input value change event */
    ValueChange = 13,

    /** Window lost focus event */
    WindowBlur = 14,

    /** Window gained focus event */
    WindowFocus = 15,

    /** Window resize event */
    WindowResize = 16,

    /** Window scroll event */
    WindowScroll = 17,

    /** CSS style change event */
    CSSChange = 18,

    /** Resource added to page event */
    ResourceAdded = 19,

    /** Click on error element event */
    ErrorClick = 20,

    /** Rapid click indicating user frustration */
    RageClick = 21,

    /** Form submission event */
    FormSubmit = 22,

    /** Input value set event */
    ValueSet = 23,

    /** Console log event */
    Log = 24,

    /** JavaScript error event */
    Error = 25,

    /** Custom event */
    Custom = 26,

    /** Performance measurement event */
    Performance = 27,

    /** Technology detection event */
    Technology = 28,

    /** Network log event */
    NetLog = 29,

    /** Network error event */
    NetError = 30,

    /** User identification event */
    Identify = 31,

    /** Animation event */
    Animation = 32
}
