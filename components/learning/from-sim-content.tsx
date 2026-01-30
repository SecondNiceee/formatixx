export function FromSimContent() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Understanding Trading Platforms</h2>
        <p className="text-white/80 leading-relaxed mb-4">
          A trading platform is your gateway to the binary options market. While simulators provide a great learning
          environment, real trading platforms connect you directly to the market and execute your trades with actual
          brokers. Choosing the right platform is crucial for your trading success.
        </p>
        <p className="text-white/80 leading-relaxed">
          The best platforms combine user-friendly interfaces with powerful analysis tools, fast execution, and reliable
          customer support. They should also be regulated by reputable financial authorities to protect your capital.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Popular Trading Platforms</h3>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Quotex</h4>
            <p className="text-white/80 leading-relaxed mb-2">
              The most popular binary options platform worldwide. Known for its reliability, extensive technical
              indicators.
            </p>
            <p className="text-purple-400 text-sm">
              Best for: Beginners and experienced traders seeking reliability
            </p>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Pocket Option</h4>
            <p className="text-white/80 leading-relaxed mb-2">
              A binary options broker that offers a wide range of trading options across various assets, including
              currency pairs, stocks, indices, and cryptocurrencies.
            </p>
            <p className="text-purple-400 text-sm">Best for: Multi-asset traders wanting advanced features</p>
          </div>

          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">TradingView</h4>
            <p className="text-white/80 leading-relaxed mb-2">
              Excellent charting and social features with the ability to connect to brokers for trading. Great analysis
              tools but execution depends on broker integration.
            </p>
            <p className="text-purple-400 text-sm">Best for: Traders who prioritize chart analysis and community</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Key Features to Look For</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Regulation & Security</h4>
            <p className="text-white/80 leading-relaxed">
              Choose brokers regulated by FCA, ASIC, CySEC, or similar authorities. Your funds should be segregated from
              broker's operating capital.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Low Spreads & Fees</h4>
            <p className="text-white/80 leading-relaxed">
              Compare spreads on major pairs. Lower spreads mean lower trading costs, which significantly impacts
              profitability over time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Fast Execution</h4>
            <p className="text-white/80 leading-relaxed">
              Look for platforms with execution times under 100ms. Slippage and requotes can eat into your profits,
              especially for scalpers.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Educational Resources</h4>
            <p className="text-white/80 leading-relaxed">
              Good platforms offer webinars, tutorials, and market analysis to help you continue learning and improving
              your trading skills.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">Making the Transition</h3>
        <p className="text-white/80 leading-relaxed mb-4">
          Start by opening a demo account with your chosen platform. Even though you've practiced on a simulator, each
          platform has unique features and interfaces. Spend 1-2 weeks familiarizing yourself with order placement,
          charting tools, and account management features.
        </p>
        <p className="text-white/80 leading-relaxed">
          When you're comfortable, open a live account with a small deposit. Many platforms allow you to start with as
          little as $100-$500. Begin with micro lots (0.01) to get used to trading with real money while minimizing
          risk. Only increase your position sizes after you've proven consistent profitability.
        </p>
      </section>

      <section className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-purple-400 mb-2">Pro Tip</h4>
        <p className="text-white/80 leading-relaxed">
          Don't choose a broker based solely on bonuses or promotions. Focus on regulation, execution quality, and
          customer service. A reliable broker is your business partner - choose wisely. Read reviews from multiple
          sources and test their demo account thoroughly before depositing real money.
        </p>
      </section>
    </div>
  )
}
