export function SupportAndResistanceContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Support And Resistance</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Support and resistance levels are fundamental concepts in technical analysis. They represent price levels
          where buying or selling pressure is strong enough to pause or reverse price movements.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">What is Support?</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Support is a price level where buying interest is strong enough to prevent the price from falling further.
          Think of it as a "floor" that catches falling prices. When price approaches support, buyers step in.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">What is Resistance?</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Resistance is a price level where selling pressure is strong enough to prevent prices from rising further. It
          acts as a "ceiling" that caps price increases. When price reaches resistance, sellers become active.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Role Reversal</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          When price breaks through support, that level often becomes resistance. Similarly, when price breaks above
          resistance, that level often becomes support. This role reversal is a powerful trading concept.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Identifying Support and Resistance</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Look for price levels where the market has reversed multiple times. The more times a level has been tested,
          the stronger it is. Round numbers (like 1.2000) often act as psychological support/resistance.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Trading with Support and Resistance</h3>
        <p className="text-white/80 leading-relaxed">
          Buy near support levels with stops below support. Sell near resistance levels with stops above resistance.
          Trade breakouts when price decisively breaks through these levels with strong volume.
        </p>
      </section>
    </div>
  )
}
