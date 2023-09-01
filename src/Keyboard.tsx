import React from 'react';
import styles from './Keyboard.module.css';

const KEYS = Array.from('abcdefghijklmnopqrstuvwxyz');

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard: React.FC<KeyboardProps> = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '0.5rem',
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        const buttonClasses = [
          styles.btn,
          isActive ? styles.active : '',
          isInactive ? styles.inactive : '',
        ].join(' ');

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={buttonClasses}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
