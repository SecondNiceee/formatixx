export function LanguageOfForexContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">The Language of Forex</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          Every market has its own vocabulary, and Forex is no exception. Understanding these key terms will help you
          navigate the market with confidence.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Currency Pairs</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Forex is always traded in pairs, like EUR/USD or GBP/JPY. The first currency is the base currency, and the
          second is the quote currency. The price tells you how much of the quote currency you need to buy one unit of
          the base currency.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Pips</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          A pip (percentage in point) is the smallest price movement in most currency pairs. For pairs quoted to four
          decimal places, one pip equals 0.0001. For pairs with the Japanese Yen, one pip equals 0.01.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Lot Sizes</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Trading volume is measured in lots. A standard lot is 100,000 units of the base currency. A mini lot is 10,000
          units, and a micro lot is 1,000 units. Choose your lot size based on your account size and risk tolerance.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Spread</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          The spread is the difference between the bid (sell) price and the ask (buy) price. This is how brokers make
          money. Lower spreads mean lower trading costs.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Leverage</h3>
        <p className="text-white/80 leading-relaxed">
          Leverage allows you to control a large position with a small amount of capital. For example, 100:1 leverage
          means you can control $100,000 with just $1,000. While leverage amplifies profits, it also magnifies losses.
        </p>
      </section>
    </div>
  )
}
