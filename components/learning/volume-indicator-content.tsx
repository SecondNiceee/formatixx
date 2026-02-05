export function VolumeIndicatorContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">What is Volume?</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Volume is one of the most important indicators in trading. It represents the number of shares,
          contracts, or lots traded during a specific time period. High volume indicates strong interest in a
          security, while low volume suggests less interest.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Why Volume Matters</h3>
        <p className="text-white/80 leading-relaxed mb-3">Volume confirms price movements and helps validate trends:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Trend Confirmation:</strong> Rising prices with increasing volume confirm an uptrend
          </li>
          <li>
            <strong>Reversal Signals:</strong> High volume at price extremes may signal reversals
          </li>
          <li>
            <strong>Breakout Validation:</strong> Volume spikes confirm genuine breakouts from patterns
          </li>
          <li>
            <strong>Weak Moves:</strong> Price changes on low volume are often unreliable
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Reading Volume Bars</h3>
        <p className="text-white/80 leading-relaxed mb-3">
          Volume is typically displayed as vertical bars below the price chart:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Tall bars:</strong> High trading activity and strong conviction
          </li>
          <li>
            <strong>Short bars:</strong> Low activity, often during consolidation
          </li>
          <li>
            <strong>Green bars:</strong> Usually indicate buying pressure (price closed higher)
          </li>
          <li>
            <strong>Red bars:</strong> Usually indicate selling pressure (price closed lower)
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Volume Trading Strategies</h3>
        <p className="text-white/80 leading-relaxed mb-3">Professional traders use volume in several ways:</p>
        <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
          <li>
            <strong>Volume Surge:</strong> Sudden volume spikes often precede significant moves
          </li>
          <li>
            <strong>Climax Volume:</strong> Extreme volume can signal exhaustion and potential reversal
          </li>
          <li>
            <strong>Volume Dry-Up:</strong> Decreasing volume during trends suggests weakening momentum
          </li>
          <li>
            <strong>Accumulation/Distribution:</strong> Steady volume increase suggests institutional buying
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Key Takeaways</h3>
        <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 my-6">
          <ul className="text-white/80 space-y-2">
            <li>Volume confirms the strength of price movements</li>
            <li>Always check volume when analyzing breakouts or reversals</li>
            <li>High volume validates trends, low volume signals caution</li>
            <li>Combine volume with other indicators for best results</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
