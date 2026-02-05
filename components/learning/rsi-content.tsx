export function RSIContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What is RSI?</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of
          recent price changes to evaluate overbought or oversold conditions. It ranges from 0 to 100 and is
          typically displayed as a line graph below the main price chart.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Understanding RSI Levels</h3>
        <p className="text-white/80 leading-relaxed mb-3">RSI readings help identify potential reversal points:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Above 70:</strong> Asset is considered overbought, possible correction ahead
          </li>
          <li>
            <strong>Below 30:</strong> Asset is considered oversold, possible bounce ahead
          </li>
          <li>
            <strong>50 Level:</strong> Acts as a support/resistance level and trend indicator
          </li>
          <li>
            <strong>Extreme Levels (80+/20-):</strong> Very strong momentum, but reversal risk increases
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">RSI Divergence</h3>
        <p className="text-white/80 leading-relaxed mb-3">
          One of the most powerful RSI signals is divergence between price and RSI:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Bullish Divergence:</strong> Price makes lower lows, but RSI makes higher lows (reversal up)
          </li>
          <li>
            <strong>Bearish Divergence:</strong> Price makes higher highs, but RSI makes lower highs (reversal
            down)
          </li>
          <li>
            <strong>Hidden Divergence:</strong> Signals trend continuation rather than reversal
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Trading with RSI</h3>
        <p className="text-white/80 leading-relaxed mb-3">Effective RSI trading strategies:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Overbought/Oversold:</strong> Look for entries when RSI exits extreme zones
          </li>
          <li>
            <strong>Centerline Crossover:</strong> RSI crossing above/below 50 confirms trend direction
          </li>
          <li>
            <strong>Failure Swings:</strong> RSI fails to reach overbought/oversold, signals reversal
          </li>
          <li>
            <strong>Combine with Price Action:</strong> Use RSI to confirm support/resistance breaks
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Key Takeaways</h3>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 my-6">
          <ul className="text-white/80 space-y-2">
            <li>RSI measures momentum and identifies overbought/oversold conditions</li>
            <li>Readings above 70 or below 30 suggest potential reversals</li>
            <li>Divergence between price and RSI is a powerful signal</li>
            <li>Works best when combined with trend analysis and support/resistance</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
