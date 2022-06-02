import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which actor plays the character Tony Stark?',
			answerOptions: [
				{ answerText: 'Chris Evans', isCorrect: false },
				{ answerText: 'Jeremy Renner', isCorrect: false },
				{ answerText: 'Robert Downey Jr.', isCorrect: true },
				{ answerText: 'Paul Bettany', isCorrect: false },
			],
		},
		{
			questionText: 'How many Infinity Stones are there in the MCU?',
			answerOptions: [
				{ answerText: 'Four', isCorrect: false },
				{ answerText: 'Six', isCorrect: true },
				{ answerText: 'Nine', isCorrect: false },
				{ answerText: 'Five', isCorrect: false },
			],
		},
		{
			questionText: "What is the name of Thor's hammer?",
			answerOptions: [
				{ answerText: 'Mjolnir', isCorrect: true },
				{ answerText: 'Storm Terror', isCorrect: false },
				{ answerText: 'Thunder Storm', isCorrect: false },
				{ answerText: 'Jonathan?', isCorrect: false },
			],
		},
		{
			questionText: 'Complete the following, "I love you ___."',
			answerOptions: [
				{ answerText: 'more', isCorrect: false },
				{ answerText: '100', isCorrect: false },
				{ answerText: "but you don't", isCorrect: false },
				{ answerText: '3000', isCorrect: true },
			],
		},
    {
			questionText: 'How many Spider Men are there in Spider-Man: No Way Home?',
			answerOptions: [
				{ answerText: 'Two', isCorrect: false },
				{ answerText: 'Three', isCorrect: true },
				{ answerText: 'One', isCorrect: false },
				{ answerText: 'Zero', isCorrect: false },
			],
		},
    {
			questionText: 'What colour is the Time Stone?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Black', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const [prev, setPrev] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const handleBackClick = (prev) => {
		const prevQuestion = currentQuestion - 1;
		if (prevQuestion >= 0) {
			setPrev(prev = true);
			if (prev) {
				setCurrentQuestion(prevQuestion);
			}
		}
		console.log(prevQuestion);
		prev = false;
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div>
							<button className='back-button' onClick={() => handleBackClick(true)}>Back</button>
						</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
						{/* <button onClick={() => handleBackClick(true)}>Back</button> */}
					</div>
				</>
			)}
		</div>
	);
}
