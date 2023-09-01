import React from 'react';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord: React.FC<HangmanWordProps> = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}) => {
  const renderLetter = (letter: string, index: number) => {
    const isGuessed = guessedLetters.includes(letter);
    const isHidden = !isGuessed && reveal;
    const textColor = isHidden ? 'red' : 'black';

    return (
      <span
        key={index}
        style={{
          borderBottom: '.1em solid black',
          visibility: isHidden ? 'visible' : 'hidden',
          color: textColor,
        }}
      >
        {letter}
      </span>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => renderLetter(letter, index))}
    </div>
  );
};

export default HangmanWord;
