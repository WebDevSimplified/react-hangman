import React from 'react';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const renderLetter = (
  letter: string,
  index: number,
  guessedLetters: string[],
  reveal: boolean
) => {
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

const HangmanWord: React.FC<HangmanWordProps> = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}) => {
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
      {wordToGuess.split('').map((letter, index) =>
        renderLetter(letter, index, guessedLetters, reveal)
      )}
    </div>
  );
};

export default HangmanWord;
