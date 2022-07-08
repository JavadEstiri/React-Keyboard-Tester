import React from 'react'
import Key from './key/Key'
import './KeyBord.css'

const KeyBord = () => {
  return (
    <div className="keyboard-base">
        <Key Code="Backquote" CssClasses=" ">~</Key>
        <Key Code="Digit1" CssClasses=" ">1</Key>
        <Key Code="Digit2" CssClasses=" ">2</Key>
        <Key Code="Digit3" CssClasses=" ">3</Key>
        <Key Code="Digit4" CssClasses=" ">4</Key>
        <Key Code="Digit5" CssClasses=" ">5</Key>
        <Key Code="Digit6" CssClasses=" ">6</Key>
        <Key Code="Digit7" CssClasses=" ">7</Key>
        <Key Code="Digit8" CssClasses=" ">8</Key>
        <Key Code="Digit9" CssClasses=" ">9</Key>
        <Key Code="Digit0" CssClasses=" ">0</Key>
        <Key Code="Minus" CssClasses=" ">-</Key>
        <Key Code="Equal" CssClasses=" ">+</Key>
        <Key Code="Delete" CssClasses=" delete">Delete</Key>
        <Key Code="Tab" CssClasses=" tab">Tab</Key>
        <Key Code="KeyQ" CssClasses=" ">Q</Key>
        <Key Code="KeyW" CssClasses=" ">W</Key>
        <Key Code="KeyE" CssClasses=" ">E</Key>
        <Key Code="KeyR" CssClasses=" ">R</Key>
        <Key Code="KeyT" CssClasses=" ">T</Key>
        <Key Code="KeyY" CssClasses=" ">Y</Key>
        <Key Code="KeyU" CssClasses=" ">U</Key>
        <Key Code="KeyI" CssClasses=" ">I</Key>
        <Key Code="KeyO" CssClasses=" ">O</Key>
        <Key Code="KeyP" CssClasses=" ">P</Key>
        <Key Code="BracketLeft" CssClasses=" ">[</Key>
        <Key Code="BracketRight" CssClasses=" ">]</Key>
        <Key Code="Backslash" CssClasses=" backslash">\</Key>
        <Key Code="CapsLock" CssClasses=" capslock">CapsLock</Key>
        <Key Code="KeyA" CssClasses=" ">A</Key>
        <Key Code="KeyS" CssClasses=" ">S</Key>
        <Key Code="KeyD" CssClasses=" ">D</Key>
        <Key Code="KeyF" CssClasses=" ">F</Key>
        <Key Code="KeyG" CssClasses=" ">G</Key>
        <Key Code="KeyH" CssClasses=" ">H</Key>
        <Key Code="KeyJ" CssClasses=" ">J</Key>
        <Key Code="KeyK" CssClasses=" ">K</Key>
        <Key Code="KeyL" CssClasses=" ">L</Key>
        <Key Code="Semicolon" CssClasses=" ">;</Key>
        <Key Code="Quote" CssClasses=" ">'</Key>
        <Key Code="Enter" CssClasses=" enter">Enter</Key>
        <Key Code="ShiftLeft" CssClasses=" leftshift">Shift</Key>
        <Key Code="KeyZ" CssClasses=" ">Z</Key>
        <Key Code="KeyX" CssClasses=" ">X</Key>
        <Key Code="KeyC" CssClasses=" ">C</Key>
        <Key Code="KeyV" CssClasses=" ">V</Key>
        <Key Code="KeyB" CssClasses=" ">B</Key>
        <Key Code="KeyN" CssClasses=" ">N</Key>
        <Key Code="KeyM" CssClasses=" ">M</Key>
        <Key Code="Comma" CssClasses=" ">,</Key>
        <Key Code="Period" CssClasses=" ">.</Key>
        <Key Code="Slash" CssClasses=" ">/</Key>
        <Key Code="ShiftRight" CssClasses=" rightshift">Shift</Key>
        <Key Code="ControlLeft" CssClasses=" leftctrl">Ctrl</Key>
        <Key Code="AltLeft" CssClasses=" ">Alt</Key>
        <Key Code="MetaLeft" CssClasses=" command">Command</Key>
        <Key Code="Space" CssClasses=" space">Space</Key>
        <Key Code="ContextMenu" CssClasses=" command">ContextMenu</Key>
        <Key Code="AltRight" CssClasses=" ">Alt</Key>
        <Key Code="ControlRight" CssClasses=" ">Ctrl</Key>
        <Key Code="" CssClasses=" ">Fn</Key>
    </div>
  )
}

export default KeyBord