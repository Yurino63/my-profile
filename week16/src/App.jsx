import { useState } from 'react'

const results = ['大吉', '中吉', '小吉', '吉', '凶']

function getColor(result) {
  if (result === '大吉') {
    return 'text-red-600'
  } else if (result === '凶') {
    return 'text-slate-500'
  } else {
    return 'text-amber-700'
  }
}

function App() {

  const [result, setResult] = useState('？')

  function drawOmikuji() {

    const index = Math.floor(Math.random() * results.length)

    setResult(results[index])
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 text-center">
      <h1 className="text-xl font-bold text-amber-800">今日の運勢</h1>

      <div className="my-8">
        <p className={'text-6xl font-bold transition ' + getColor(result)}>
          {result}
        </p>
      </div>

      <button
        onClick={drawOmikuji}
        className="w-full py-3 rounded-xl bg-amber-600 text-white font-bold hover:bg-amber-700 active:scale-95 transition"
      >
        おみくじを引く
      </button>

      <p className="mt-4 text-xs text-slate-400">
        ボタンを押すたびに結果が変わります
      </p>
    </div>
  )
}

export default App
