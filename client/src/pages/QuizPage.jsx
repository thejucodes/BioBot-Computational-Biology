import React, { useState, useEffect } from 'react';
import {
  Award, CheckCircle2, XCircle, RefreshCw, ArrowRight,
  Sparkles, HelpCircle, Flame, Trophy, MessageSquare, RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizPage({ onAskBioBot }) {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicFilter, setTopicFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, [topicFilter, difficultyFilter]);

  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/quizzes?topic=${topicFilter}&difficulty=${difficultyFilter}`);
      const data = await res.json();
      setQuizzes(data.quizzes || []);
      // Reset quiz session
      resetQuizState();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const resetQuizState = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setQuizFinished(false);
    setWrongAnswers([]);
  };

  const currentQ = quizzes[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setStreak(0);
      setWrongAnswers(prev => [...prev, { ...currentQ, userChoice: selectedOption }]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizzes.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const getRankBadge = (percentage) => {
    if (percentage >= 90) return { title: "Genomics Master", desc: "Outstanding! You possess an expert grasp of computational biology." };
    if (percentage >= 70) return { title: "Bioinformatics Practitioner", desc: "Great job! You have a solid foundation in biological algorithms." };
    if (percentage >= 50) return { title: "Molecular Explorer", desc: "Good effort! Review the missed concepts with BioBot to level up." };
    return { title: "Apprentice Biologist", desc: "Keep practicing! Use the 'Explain Simply' mode in chat to reinforce the fundamentals." };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 text-emerald" /> Test My Knowledge
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-forest-dark">Computational Biology Quiz Zone</h1>
        <p className="text-sm text-slate-600">
          Reinforce your understanding with interactive questions, instant feedback, and thorough scientific explanations.
        </p>
      </div>

      {/* Filter Row */}
      <div className="bg-white rounded-2xl p-4 border border-sage/40 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Difficulty filter */}
          <span className="text-xs font-bold text-slate-500 uppercase">Difficulty:</span>
          {['all', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficultyFilter(diff)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                difficultyFilter === diff
                  ? 'bg-forest text-white shadow-xs'
                  : 'bg-offwhite text-slate-700 hover:bg-mint/40 border border-slate-200'
              }`}
            >
              {diff === 'all' ? 'All Levels' : diff}
            </button>
          ))}
        </div>

        {/* Streak counter */}
        <div className="flex items-center gap-2 text-xs font-bold text-forest">
          <span className="flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-lg">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            Streak: {streak}
          </span>
          <button
            onClick={resetQuizState}
            className="p-1.5 text-slate-400 hover:text-forest hover:bg-slate-100 rounded-lg transition"
            title="Restart quiz"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quiz Card */}
      {loading ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-sage/40 shadow-xl space-y-3">
          <RefreshCw className="w-8 h-8 text-emerald animate-spin mx-auto" />
          <p className="text-sm font-semibold text-forest">Loading questions from knowledge base...</p>
        </div>
      ) : quizzes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-sage/40 shadow-xl space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">No questions found for this filter</h3>
          <button
            onClick={() => { setDifficultyFilter('all'); setTopicFilter('all'); }}
            className="px-4 py-2 bg-emerald text-white text-xs font-bold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      ) : quizFinished ? (
        /* Results Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sage/40 shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald to-sage mx-auto flex items-center justify-center text-white shadow-xl shadow-emerald/30">
            <Trophy className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald bg-mint px-3 py-1 rounded-full">
              Quiz Completed!
            </span>
            <h2 className="text-3xl font-extrabold text-forest-dark">
              You Scored {score} / {quizzes.length} ({Math.round((score / quizzes.length) * 100)}%)
            </h2>
            <div className="pt-2">
              <span className="text-lg font-bold text-emerald">
                {getRankBadge(Math.round((score / quizzes.length) * 100)).title}
              </span>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                {getRankBadge(Math.round((score / quizzes.length) * 100)).desc}
              </p>
            </div>
          </div>

          {/* Wrong answers review section */}
          {wrongAnswers.length > 0 && (
            <div className="text-left bg-offwhite rounded-2xl p-6 border border-sage/40 space-y-4">
              <h4 className="text-sm font-bold text-forest-dark uppercase tracking-wider">
                Concepts to Reinforce ({wrongAnswers.length}):
              </h4>
              <div className="space-y-3">
                {wrongAnswers.map((w, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <p className="font-semibold text-slate-800">{w.question}</p>
                    <p className="text-emerald-700 font-medium">✓ Correct: {w.options[w.correctIndex]}</p>
                    <p className="text-slate-500 text-[11px] italic">{w.explanation}</p>
                    <button
                      onClick={() => onAskBioBot && onAskBioBot(`Explain the answer to this question: "${w.question}". Why is "${w.options[w.correctIndex]}" correct?`)}
                      className="inline-flex items-center gap-1 text-[11px] text-forest font-bold hover:text-emerald mt-1"
                    >
                      <MessageSquare className="w-3 h-3 text-emerald" /> Review with BioBot ➔
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={resetQuizState}
              className="w-full sm:w-auto px-6 py-3 bg-forest hover:bg-forest-dark text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-mint" />
              Retake Quiz
            </button>
            <button
              onClick={() => onAskBioBot && onAskBioBot("Can you test my knowledge with a custom quiz on computational biology?")}
              className="w-full sm:w-auto px-6 py-3 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Ask BioBot for More Questions
            </button>
          </div>
        </div>
      ) : (
        /* Question Card */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/40 shadow-xl space-y-6">
          {/* Progress row */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="text-forest font-bold">
                Question {currentIndex + 1} of {quizzes.length}
              </span>
              <span className="px-2 py-0.5 rounded bg-offwhite border border-sage/30 text-forest-dark text-[11px]">
                {currentQ.topicTitle} • {currentQ.difficulty}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-offwhite border border-sage/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald to-forest transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / quizzes.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-forest-dark leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let optionStyle = 'bg-offwhite border-slate-200 text-slate-800 hover:border-emerald/60 hover:bg-mint/20';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-400';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-red-50 border-red-500 text-red-950 font-semibold ring-2 ring-red-400';
                } else {
                  optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-mint/60 border-emerald text-forest-dark font-semibold ring-2 ring-emerald-300';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full p-4 rounded-xl border-2 text-left text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border border-current text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Revealed after answer submission) */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-mint/30 border border-sage/50 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-dark">
                <Sparkles className="w-3.5 h-3.5 text-emerald" /> Biological Rationale:
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
              <button
                onClick={() => onAskBioBot && onAskBioBot(`Can you explain more deeply why "${currentQ.options[currentQ.correctIndex]}" is the correct answer to: "${currentQ.question}"?`)}
                className="inline-flex items-center gap-1.5 text-xs text-forest font-bold hover:text-emerald mt-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald" /> Ask BioBot for Deeper Explanation ➔
              </button>
            </div>
          )}

          {/* Bottom Action Button */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              Score: <strong className="text-forest">{score}</strong> / {currentIndex + (isAnswerSubmitted ? 1 : 0)}
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold shadow-md transition ${
                  selectedOption === null
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-forest hover:bg-forest-dark text-white hover:scale-105'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-emerald hover:bg-emerald-dark text-white rounded-xl text-xs font-bold shadow-md transition flex items-center gap-1.5 hover:scale-105"
              >
                <span>{currentIndex + 1 === quizzes.length ? 'Finish Quiz' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
