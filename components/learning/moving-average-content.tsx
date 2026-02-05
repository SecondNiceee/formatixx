export function MovingAverageContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What is a Moving Average?</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          A moving average (MA) is one of the most popular and easy-to-use technical indicators. It smooths out
          price data by creating a constantly updated average price over a specific time period. This helps
          traders identify the direction of the trend and potential support/resistance levels.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Types of Moving Averages</h3>
        <p className="text-white/80 leading-relaxed mb-3">There are two main types of moving averages:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Simple Moving Average (SMA):</strong> Calculates the average of prices over a set period.
            All prices are weighted equally.
          </li>
          <li>
            <strong>Exponential Moving Average (EMA):</strong> Gives more weight to recent prices, making it
            more responsive to new information.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Common Time Periods</h3>
        <p className="text-white/80 leading-relaxed mb-3">
          Different traders use different periods based on their trading style:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>20-day MA:</strong> Short-term trend identification
          </li>
          <li>
            <strong>50-day MA:</strong> Intermediate trend analysis
          </li>
          <li>
            <strong>200-day MA:</strong> Long-term trend, considered very significant
          </li>
          <li>
            <strong>Multiple MAs:</strong> Using 2-3 MAs together helps confirm trends
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">How to Use Moving Averages</h3>
        <p className="text-white/80 leading-relaxed mb-3">Moving averages provide several trading signals:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Trend Direction:</strong> Price above MA = uptrend, price below MA = downtrend
          </li>
          <li>
            <strong>Support/Resistance:</strong> Moving averages often act as dynamic support or resistance
            levels
          </li>
          <li>
            <strong>Golden Cross:</strong> When a short-term MA crosses above a long-term MA (bullish signal)
          </li>
          <li>
            <strong>Death Cross:</strong> When a short-term MA crosses below a long-term MA (bearish signal)
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Key Takeaways</h3>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 my-6">
          <ul className="text-white/80 space-y-2">
            <li>Moving averages smooth price action and identify trends</li>
            <li>EMAs react faster to price changes than SMAs</li>
            <li>Use multiple MAs to confirm trend strength and direction</li>
            <li>MAs work best in trending markets, less effective in ranging markets</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
