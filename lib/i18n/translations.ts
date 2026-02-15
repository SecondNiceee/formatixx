export type Locale = "en" | "es" | "pt" | "ar"

export const translations = {
  en: {
    // Common
    common: {
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      verified: "VERIFIED",
      years: "years",
      yearsOld: "years old",
      calculate: "Calculate",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Trade like a",
      pro: "Pro",
      title2: "without much",
      guru: "trading experience",
      description:
        "AI-powered chart analysis that delivers actionable trade plans. Upload your charts and get instant insights for better trading decisions.",
      analyzeButton: "Analyze a Chart",
    },

    // How It Works
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple, fast and powerful chart analysis in three steps",
      step1Title: "1. Upload Chart",
      step1Desc: "Upload your trading chart screenshot or image from any platform",
      step2Title: "2. AI Analysis",
      step2Desc: "Our AI analyzes patterns, levels, and market structure instantly",
      step3Title: "3. Trade Plan",
      step3Desc: "Get actionable insights with entry, stop loss, and take profit levels",
    },

    // Powerful Features
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for successful trading analysis",
      aiTrade: "AI Trade Analysis",
      aiTradeDesc: "Advanced pattern recognition and market structure analysis powered by artificial intelligence",
      scalp: "Scalp Trading",
      scalpDesc: "Ultra-short term trading opportunities for quick profits with precision timing",
      risk: "Risk Management",
      riskDesc: "Advanced position sizing and risk calculation tools to protect your capital",
      swing: "Swing Trading",
      swingDesc: "Multi-day to multi-week trading opportunities analysis for strategic positions",
      priceAction: "Price Action Analysis",
      priceActionDesc: "Deep analysis of price movements and market psychology for informed decisions",
    },

    // Testimonials
    testimonials: {
      title: "What our traders are saying",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "After 10 years on the market, finally find a tool that really it works. My results have improved 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "As the mother of two children, I need fast and efficient analysis. FoMatrix allows me to operate in the intervals of my day!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Economics student who does trading to pay for college. With FoMatrix, I can be consistent in operations!",
    },

    // Sidebar
    sidebar: {
      analysis: "Analysis",
      learning: "Learning",
      tradingReview: "Trading Review",
      settings: "Settings",
    },

    // Settings - Added new translation keys
    settings: {
      title: "Settings",
      description: "Manage your account settings, preferences, and security options.",
      userPreferences: "User Preferences",
      language: "Language",
      timezone: "Timezone",
      displayCurrency: "Display Currency",
      savePreferences: "Save Preferences",
      saving: "Saving...",
      changePassword: "Change Password",
      changeEmail: "Change Email",
      currentEmail: "Current Email",
      newEmail: "New Email",
      enterNewEmail: "Enter your new email",
      updateEmail: "Update Email",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm Password",
      updatePassword: "Update Password",
      updating: "Updating...",
      enterCurrentPassword: "Enter your current password",
      enterNewPassword: "Enter your new password",
      confirmNewPassword: "Confirm your new password",
      minChars: "Minimum 6 characters required",
      preferencesSaved: "Preferences saved",
      preferencesDesc: "Your preferences have been updated successfully.",
      passwordUpdated: "Password updated",
      passwordDesc: "Your password has been changed successfully.",
      passwordMismatch: "Passwords do not match.",
      passwordTooShort: "Password must be at least 6 characters.",
      selectLanguage: "Select language",
      selectTimezone: "Select timezone",
      selectCurrency: "Select currency",
      emailUpdated: "Email updated",
      emailUpdatedDesc: "Your email has been changed successfully.",
    },

    // Auth Dialog
    auth: {
      welcome: "Welcome",
      registerPrompt: "Hi, you need to register to enter",
      emailAddress: "Email Address",
      createPassword: "Create Password",
      password: "Password",
      rememberMe: "Remember me for 7 days",
      loggedInAs: "Logged in as:",
      emailRequired: "Email required",
      emailRequiredDesc: "Please enter your email address",
      invalidEmail: "Invalid email",
      invalidEmailDesc: "Please enter a valid email address",
      passwordRequired: "Password required",
      passwordRequiredDesc: "Please enter your password",
      passwordTooShort: "Password too short",
      passwordTooShortDesc: "Minimum 6 characters required",
      confirmRequired: "Password confirmation required",
      confirmRequiredDesc: "Please confirm your password",
      passwordMismatch: "Password mismatch",
      passwordMismatchDesc: "Passwords do not match",
      redirecting: "Redirecting to your dashboard...",
      registrationFailed: "Registration failed",
      loginFailed: "Login failed",
      loggedOut: "Logged out",
      loggedOutDesc: "You have been successfully logged out",
    },

    // Analyze Page
    analyze: {
      title: "Trading Analysis",
      uploadTitle: "Upload Chart Image",
      uploadDesc: "Drag and drop your trading chart screenshot or click to browse",
      supportedFormats: "Supported formats: JPG, PNG, GIF (max 5MB)",
      analyzing: "Analyzing...",
      analyzeChart: "Analyze Chart",
      removeImage: "Remove image",
      confidence: "Confluence",
      buy: "BUY",
      sell: "SELL",
      noSignal: "NO SIGNAL",
      analysisResult: "Analysis Result",
      pleaseLogin: "Please login to use the analysis feature",
      invalidFile: "Invalid file type",
      invalidFileDesc: "Please upload an image file (JPG, PNG, GIF)",
      fileTooLarge: "File size too large",
      fileTooLargeDesc: "File size exceeds 5MB limit",
      activateAccount: "Activate Account",
      activateDesc: "Link your broker account to continue using the analysis feature",
    },

    formatrixTurbo: {
      title: "ForMatrix",
      turbo: "Turbo",
      description:
        "High-speed binary options strategy with AI-powered pattern recognition for rapid signals with 1-5 minute expiration times",
      chartAnalysisInfo: "Chart Analysis Information",
      chartAnalysisInfoDesc:
        "Upload your charts for AI-powered technical analysis, pattern recognition, and trade recommendations based on proven trading strategies scalp trading",
      selectImage: "Select Image",
      pasteTip: "Tip: You can also paste (Ctrl+V) a copied image!",
      waitForResponse: "Wait for a response",
      sessionExpired: "Session expired",
      analysisLimitExceeded: "Analysis limit exceeded",
      upgradAccount: "You have reached your daily analysis limit. Upgrade your account for unlimited analysis.",
      noDescription: "No description",
      analysisCompleted: "Analysis completed!",
      analysisCompletedDesc: "AI analysis has been successfully completed",
      analysisFailed: "Analysis failed",
    },

    // Learning Page
    learning: {
      title: "Learning",
      center: "Center",
      comingSoon:
        "Educational content and trading tutorials coming soon. Stay tuned for comprehensive learning materials.",
      section1: {
        title: "Getting Started",
        subtitle: "Your Trading Journey",
      },
      section2: {
        title: "The Money Makers",
        subtitle: "What Moves Markets",
      },
      section3: {
        title: "Reading the Market",
        subtitle: "Master the Charts",
      },
      // Getting Started Lessons
      lessons: {
        whyTradeBinary: {
          title: "Why Trade Binary Options?",
          sections: {
            intro: "Why Trade Binary Options?",
            content1:
              "The pandemic, the Russian-Ukrainian war, the oil price slide or natural disasters in Asia can all have major impacts on the economy, but for currency traders these are dominant profit opportunities.",
            content2:
              "During these volatile times, more than 2,000,000 people worldwide have gained knowledge and experience through our exclusive content and rich illustrations.",
            content3:
              "Once you've unlocked and gone through everything our binary options trading app withholds, you'll be more confident trading with your own investments.",
            callout: "YOUR \"BINARY OPTIONS WISDOM\" IS ABOUT TO GROW RAPIDLY. READ ON.",
            crisis: "History Has Proven That During Financial Crisis:",
            crisisItems: [
              "The stock market declines",
              "The real estate transactions freeze",
              "The retail sector may suffer high losses or even bankruptcy",
            ],
            crisisContent:
              "If your predictions are correct, then Binary Options can remain profitable even in the worst of times because currencies are always traded in pairs. When the value of one currency declines, the value of the other one rises.",
            crisisProfit: "Pretty awesome, huh? You can earn, regardless of whether the market is trending up or down, but if your prediction is wrong, you can lose as much.",
            hammock: "Trade While Lying in a Hammock",
            hammockContent:
              "Access the trading world from anywhere while lying in a hammock! All you need is a computer and/or a smartphone and an Internet connection. Many successful Binary Options traders use advanced trading apps on their iPhone or Android smartphones and tablets. So choose the lifestyle that suits your trading goals and trade the way you want to.",
            startWith: "Start With $250",
            startWithContent1:
              "Unlike any other financial market, Binary Options have low entry costs due to the large number of market participants. Also, the increasing competition among brokers lowers their commissions and consequently transaction costs.",
            startWithContent2:
              "Currently, Binary Options are the most cost-effective market for retail investors. In Binary Options, you can start trading with $100-$2000. As you start to get a stronger grasp of binary options trading and risk management, invest more. Remember that losses are a part of the game even for experienced traders, but the more you learn, the less likely you will make rookie mistakes.",
            easyRules: "Easy Rules",
            easyRulesContent:
              "In 2023 there are more than 45,000 publicly traded companies worldwide and although there are many currencies in the binary options market, traders work mainly with just 8. In addition, the value of currencies is affected by significantly fewer factors than the value of stocks. As a result, it's relatively easier for you to follow and predict changes in Binary Options market.",
            sellAnytime: "Sell At Any Time",
            sellAnytimeContent:
              "With a daily turnover of more than $6.6 trillion, binary Options are the most liquid financial market. There is always a buyer when you want to sell, and there is always a seller when you want to buy. This is highly reassuring! But it can get better, if you build more money to earn more money, which you can withdraw whenever you want!",
            socialTrading: "Learn From Pros With Social Trading",
            socialTradingContent:
              "Now, when technology is so strong and internet access is everywhere, you are free to use it on the go. With a new groundbreaking innovation, Binary Options Social Trading, you can follow and learn from professional traders or even copy them automatically and make them work for you. Just monitor their success on the go with the mobile app.",
          },
          quiz: {
            q1: "When is it possible to trade currencies?",
            q1o1: "Round the clock",
            q1o2: "9:00 - 17:00",
            q1o3: "9:00 - 18:00",
            q1a: "Binary Options trading is available round the clock, allowing you to trade at any time that suits your schedule.",
            q2: "Currency fluctuations can be used to:",
            q2o1: "Incur losses",
            q2o2: "Make a profit",
            q2o3: "Wait",
            q2a: "Currency fluctuations create opportunities to make profits by correctly predicting price movements.",
            q3: "What is the recommended trading amount in Binary Options?",
            q3o1: "500 USD",
            q3o2: "250 USD",
            q3o3: "100 USD",
            q3a: "Starting with $250 is recommended as it provides enough capital to manage trades while keeping risk manageable.",
          },
        },
        howMuchBinary: {
          title: "How Much Can You Make Trading?",
          sections: {
            intro: "How Much Can You Make Trading?",
            subtitle: "Understanding realistic profit expectations",
            content1:
              "Number #1 question asked by new traders is, \"how much money can I make trading?\" While the answer to that question varies depending on a variety of factors such as market conditions, your strategy, and risk management, we can explore some scenarios to get an idea of what's possible.",
            startWith: "Start With What You Have!",
            startWithContent:
              "Our graduates who become skilled day traders make around 1-3% profit per day.",
            example1: "Start trading with",
            example1Value: "$100",
            example1Result: "$24 - $87",
            example1Text: "per month",
            example2: "Start with",
            example2Value: "$5k",
            example2Result: "$674 and $2,262",
            example2Text: "of profit per month",
            startContentEnd:
              "Not too bad, right? While it's possible to start with as low as $10 with modern trading platforms, to make a decent profit and have some leeway in your trades it's best to start with $1k - $5k.",
            note: "It's ok to start with less, it will just take longer to build up your portfolio.",
            isItEasy: "Is It Easy To Learn To Trade?",
          },
          quiz: {
            q1: "What is the recommended starting capital?",
            q1o1: "$10",
            q1o2: "$1,000 - $5,000",
            q1o3: "$10,000",
            q1a: "Starting with $1,000 - $5,000 allows for decent profits and proper trade management.",
            q2: "What daily profit percentage do skilled traders typically aim for?",
            q2o1: "10-20%",
            q2o2: "1-3%",
            q2o3: "5-10%",
            q2a: "Skilled day traders typically make around 1-3% profit per day.",
          },
        },
        whenToTradeBinary: {
          title: "When to Trade",
          sections: {
            intro: "When to Trade",
            subtitle: "Timing is everything in trading",
            content1:
              "Timing is everything in trading, and knowing the most profitable times to enter the market can be a key factor in your trading results. In this lesson, we'll guide you through the best times to trade each asset class. These insights will help you make informed decisions to maximise profits and minimise risk.",
            windowOfOpportunity: "The Window of Opportunity",
            windowContent:
              "There is a specific period widely regarded as the prime time for trading all assets. In short, that is when there is the most activity in the markets, with traders from around the world participating in the buzz.",
            overlap: "The overlap between the London and New York sessions, which occurs from",
            overlapTime: "8 am to 12 pm ET",
            overlapEnd: ", is the most active and liquid time of the day for trading currencies, stocks, and other assets.",
            overlapDetail:
              "This period is characterised by high volumes and significant volatility, which means there are more opportunities for you to enter and exit trades.",
            whatIsSession: "What is a Session?",
            whatIsSessionContent: "Now let's get into specific market opening and closing times for each asset class.",
            binaryOptions: "Binary Options",
            binaryOptionsContent:
              "The flexibility of binary options trading hours is a significant advantage, allowing you to access the market from anywhere in the world on weekdays.",
            offPeakContent:
              "For those unable to trade during the London-New York overlap, off-peak hours can still offer some advantages. Trading during the Asian session can be beneficial if you trade the yen or other Asian currencies, and major news releases outside of peak trading hours can create big moves despite lower market activity.",
          },
          quiz: {
            q1: "When is the best time to trade?",
            q1o1: "London-New York overlap (8 am - 12 pm ET)",
            q1o2: "Asian session only",
            q1o3: "Any time",
            q1a: "The London-New York overlap (8 am - 12 pm ET) is the most active and liquid trading time.",
            q2: "What advantage do binary options have regarding trading hours?",
            q2o1: "Fixed hours only",
            q2o2: "Flexibility to trade from anywhere on weekdays",
            q2o3: "Only during weekends",
            q2a: "Binary options offer flexibility to trade from anywhere in the world on weekdays.",
          },
        },
        socialTradingBinary: {
          title: "Social Trading (Copy Trading)",
          sections: {
            intro: "Social Trading (Copy Trading)",
            subtitle: "Learn from professionals",
            content1:
              "Social trading, also known as copy trading, is a revolutionary feature that allows you to follow and automatically copy the trades of successful professional traders.",
            benefits: "Benefits of Social Trading",
            benefit1: "Learn from experienced traders",
            benefit2: "Automate your trading strategy",
            benefit3: "Reduce emotional trading decisions",
            benefit4: "Build wealth by copying successful traders",
          },
          quiz: {
            q1: "What is social trading?",
            q1o1: "Trading with friends only",
            q1o2: "Following and copying professional traders",
            q1o3: "Trading on social media",
            q1a: "Social trading allows you to follow and automatically copy trades from successful professional traders.",
            q2: "What is a main benefit of copy trading?",
            q2o1: "Guaranteed profits",
            q2o2: "Learning from experienced traders and automation",
            q2o3: "No need to learn trading",
            q2a: "Copy trading helps you learn from professionals and automate your strategy while reducing emotional decisions.",
          },
        },
      },
    },

    // Trading Review Page - Added imagePasted key
    tradingReview: {
      title: "Trade",
      review: "Reviews",
      description:
        "Upload your trade data or screenshots to get personalized feedback, performance metrics, and educational insights to improve your trading.",
      yourReview: "Your Review",
      placeholder: "Write your trading review here...",
      attachImage: "Attach Image (optional)",
      dragDrop: "Drag & drop an image or click to browse",
      fileLimit: "JPG, PNG, GIF up to 5MB",
      submitReview: "Submit Review",
      submitting: "Submitting...",
      reviewSubmitted: "Review submitted!",
      thankYou: "Thank you for your feedback",
      enterReview: "Please enter your review",
      englishOnly: "Please write your review in English.",
      failedSubmit: "Failed to submit review",
      tryAgain: "Please try again later",
      imagePasted: "Image pasted successfully",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Trade",
      smarter: "Smarter",
      notHarder: "Not",
      harder: "Harder",
      description:
        "Upload your trading chart from any platform and let our AI instantly analyze patterns, levels, and market structure. Receive actionable trade plans with entry points, stop loss, and take profit levels—no guru required.",
      specialOffer: "Special Offer",
      startAnalysis: "Start Chart Analysis",
      linkBroker: "Link Broker Account",
      freeAnalyses: "Free",
      startWith3: "Start with 3",
      analyses: "Analyses",
      freeTrialDesc: "Try it out with three completely free chart analyses to see the value for yourself.",
      unlockAccess: "Unlock Full Access",
      afterFree: "After your free analyses, you'll need to:",
      step1: "Open an account with one of our",
      partneredBrokers: "partnered brokers",
      step1End: "via the link provided.",
      step2: "Maintain a",
      minDeposit: "minimum deposit",
      of50: "of",
      step2End: "to continue accessing AI trade plans.",
      confidence: "confidence",
    },

    // Register Page
    register: {
      brokerAccess: "Broker",
      accessRequirements: "Access",
      requirements: "Requirements",
      step1: "Register with one of our partner brokers using the link provided.",
      step2: "Make a minimum deposit of $50 to activate your trading account.",
      step3: "After registration, please write your ID below",
      registration: "Registration",
      alreadyHaveAccount: "Already have an account? Enter your ID below",
      enterAccountId: "Enter Your Account ID",
      enterId: "Enter your ID",
      tooManyRequests: "Too many requests. Please try again later.",
      registrationSuccess: "Your account ID has been successfully registered!",
      registrationFailed: "Registration failed",
    },
  },

  es: {
    // Common
    common: {
      login: "Iniciar Sesión",
      signup: "Registrarse",
      logout: "Cerrar Sesión",
      save: "Guardar",
      cancel: "Cancelar",
      submit: "Enviar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      verified: "VERIFICADO",
      years: "años",
      yearsOld: "años",
      calculate: "Calcular",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Opera como un",
      pro: "Profesional",
      title2: "sin mucha",
      guru: "experiencia en trading",
      description:
        "Análisis de gráficos impulsado por IA que ofrece planes de trading accionables. Sube tus gráficos y obtén información instantánea para mejores decisiones de trading.",
      analyzeButton: "Analizar un Gráfico",
    },

    // How It Works
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "Análisis de gráficos simple, rápido y potente en tres pasos",
      step1Title: "1. Subir Gráfico",
      step1Desc: "Sube tu captura de pantalla del gráfico de trading desde cualquier plataforma",
      step2Title: "2. Análisis IA",
      step2Desc: "Nuestra IA analiza patrones, niveles y estructura del mercado instantáneamente",
      step3Title: "3. Plan de Trading",
      step3Desc: "Obtén información accionable con niveles de entrada, stop loss y take profit",
    },

    // Powerful Features
    features: {
      title: "Funciones Potentes",
      subtitle: "Todo lo que necesitas para un análisis de trading exitoso",
      aiTrade: "Análisis de Trading con IA",
      aiTradeDesc:
        "Reconocimiento avanzado de patrones y análisis de estructura de mercado impulsado por inteligencia artificial",
      scalp: "Scalp Trading",
      scalpDesc: "Oportunidades de trading a ultra corto plazo para ganancias rápidas con timing preciso",
      risk: "Gestión de Riesgo",
      riskDesc: "Herramientas avanzadas de dimensionamiento de posición y cálculo de riesgo para proteger tu capital",
      swing: "Swing Trading",
      swingDesc: "Análisis de oportunidades de trading de varios días a varias semanas para posiciones estratégicas",
      priceAction: "Análisis de Acción del Precio",
      priceActionDesc: "Análisis profundo de movimientos de precio y psicología del mercado para decisiones informadas",
    },

    // Testimonials
    testimonials: {
      title: "Lo que dicen nuestros traders",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "¡Después de 10 años en el mercado, finalmente encontré una herramienta que realmente funciona. Mis resultados han mejorado un 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "Como madre de dos hijos, necesito análisis rápido y eficiente. ¡FoMatrix me permite operar en los intervalos de mi día!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Estudiante de economía que hace trading para pagar la universidad. ¡Con FoMatrix, puedo ser consistente en las operaciones!",
    },

    // Sidebar
    sidebar: {
      analysis: "Análisis",
      learning: "Aprendizaje",
      tradingReview: "Reseña de Trading",
      settings: "Configuración",
    },

    // Settings - Added new translation keys
    settings: {
      title: "Configuración",
      description: "Administra la configuración de tu cuenta, preferencias y opciones de seguridad.",
      userPreferences: "Preferencias de Usuario",
      language: "Idioma",
      timezone: "Zona Horaria",
      displayCurrency: "Moneda de Visualización",
      savePreferences: "Guardar Preferencias",
      saving: "Guardando...",
      changePassword: "Cambiar Contraseña",
      changeEmail: "Cambiar Correo",
      currentEmail: "Correo Actual",
      newEmail: "Nuevo Correo",
      enterNewEmail: "Ingresa tu nuevo correo",
      updateEmail: "Actualizar Correo",
      currentPassword: "Contraseña Actual",
      newPassword: "Nueva Contraseña",
      confirmPassword: "Confirmar Contraseña",
      updatePassword: "Actualizar Contraseña",
      updating: "Actualizando...",
      enterCurrentPassword: "Ingresa tu contraseña actual",
      enterNewPassword: "Ingresa tu nueva contraseña",
      confirmNewPassword: "Confirma tu nueva contraseña",
      minChars: "Mínimo 6 caracteres requeridos",
      preferencesSaved: "Preferencias guardadas",
      preferencesDesc: "Tus preferencias se han actualizado correctamente.",
      passwordUpdated: "Contraseña actualizada",
      passwordDesc: "Tu contraseña se ha cambiado correctamente.",
      passwordMismatch: "Las contraseñas no coinciden.",
      passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
      selectLanguage: "Seleccionar idioma",
      selectTimezone: "Seleccionar zona horaria",
      selectCurrency: "Seleccionar moneda",
      emailUpdated: "Correo actualizado",
      emailUpdatedDesc: "Tu correo se ha cambiado correctamente.",
    },

    // Auth Dialog
    auth: {
      welcome: "Bienvenido",
      registerPrompt: "Hola, necesitas registrarte para entrar",
      emailAddress: "Correo Electrónico",
      createPassword: "Crear Contraseña",
      password: "Contraseña",
      rememberMe: "Recordarme por 7 días",
      loggedInAs: "Conectado como:",
      emailRequired: "Correo requerido",
      emailRequiredDesc: "Por favor ingresa tu correo electrónico",
      invalidEmail: "Correo inválido",
      invalidEmailDesc: "Por favor ingresa un correo electrónico válido",
      passwordRequired: "Contraseña requerida",
      passwordRequiredDesc: "Por favor ingresa tu contraseña",
      passwordTooShort: "Contraseña muy corta",
      passwordTooShortDesc: "Mínimo 6 caracteres requeridos",
      confirmRequired: "Confirmación requerida",
      confirmRequiredDesc: "Por favor confirma tu contraseña",
      passwordMismatch: "Contraseñas no coinciden",
      passwordMismatchDesc: "Las contraseñas no coinciden",
      redirecting: "Redirigiendo a tu panel...",
      registrationFailed: "Registro fallido",
      loginFailed: "Inicio de sesión fallido",
      loggedOut: "Sesión cerrada",
      loggedOutDesc: "Has cerrado sesión correctamente",
    },

    // Analyze Page
    analyze: {
      title: "Análisis de Trading",
      uploadTitle: "Subir Imagen del Gráfico",
      uploadDesc: "Arrastra y suelta tu captura del gráfico de trading o haz clic para buscar",
      supportedFormats: "Formatos soportados: JPG, PNG, GIF (máx 5MB)",
      analyzing: "Analizando...",
      analyzeChart: "Analizar Gráfico",
      removeImage: "Eliminar imagen",
      confidence: "Confluencia",
      buy: "COMPRAR",
      sell: "VENDER",
      noSignal: "SIN SEÑAL",
      analysisResult: "Resultado del Análisis",
      pleaseLogin: "Por favor inicia sesión para usar la función de análisis",
      invalidFile: "Tipo de archivo inválido",
      invalidFileDesc: "Por favor sube un archivo de imagen (JPG, PNG, GIF)",
      fileTooLarge: "Archivo muy grande",
      fileTooLargeDesc: "El archivo excede el límite de 5MB",
      activateAccount: "Activar Cuenta",
      activateDesc: "Vincula tu cuenta de broker para continuar usando la función de análisis",
    },

    formatrixTurbo: {
      title: "ForMatrix",
      turbo: "Turbo",
      description:
        "Estrategia de opciones binarias de alta velocidad con reconocimiento de patrones impulsado por IA para señales rápidas con tiempos de expiración de 1-5 minutos",
      chartAnalysisInfo: "Información de Análisis de Gráficos",
      chartAnalysisInfoDesc:
        "Sube tus gráficos para análisis técnico con IA, reconocimiento de patrones y recomendaciones de trading basadas en estrategias probadas de scalp trading",
      selectImage: "Seleccionar Imagen",
      pasteTip: "Consejo: ¡También puedes pegar (Ctrl+V) una imagen copiada!",
      waitForResponse: "Espera la respuesta",
      sessionExpired: "Sesión expirada",
      analysisLimitExceeded: "Límite de análisis excedido",
      upgradAccount: "Has alcanzado tu límite diario de análisis. Mejora tu cuenta para análisis ilimitados.",
      noDescription: "Sin descripción",
      analysisCompleted: "¡Análisis completado!",
      analysisCompletedDesc: "El análisis de IA se ha completado exitosamente",
      analysisFailed: "Análisis fallido",
    },

    // Learning Page
    learning: {
      title: "Centro de",
      center: "Aprendizaje",
      comingSoon:
        "Contenido educativo y tutoriales de trading próximamente. Mantente atento a materiales de aprendizaje completos.",
      section1: {
        title: "Primeros Pasos",
        subtitle: "Tu Viaje de Trading",
      },
      section2: {
        title: "Los Generadores de Dinero",
        subtitle: "Lo Que Mueve los Mercados",
      },
      section3: {
        title: "Leyendo el Mercado",
        subtitle: "Domina los Gráficos",
      },
      // Getting Started Lessons
      lessons: {
        whyTradeBinary: {
          title: "¿Por Qué Operar con Opciones Binarias?",
          sections: {
            intro: "¿Por Qué Operar con Opciones Binarias?",
            content1:
              "La pandemia, la guerra Rusa-Ucraniana, la caída del precio del petróleo o desastres naturales en Asia pueden tener grandes impactos en la economía, pero para los operadores de divisas estas son oportunidades de ganancia dominantes.",
            content2:
              "Durante estos tiempos volátiles, más de 2,000,000 de personas en todo el mundo han adquirido conocimiento y experiencia a través de nuestro contenido exclusivo e ilustraciones enriquecidas.",
            content3:
              "Una vez que hayas desbloqueado y revisado todo lo que nuestra aplicación de trading de opciones binarias ofrece, tendrás más confianza al operar con tus propias inversiones.",
            callout: "TU \"SABIDURÍA EN OPCIONES BINARIAS\" ESTÁ A PUNTO DE CRECER RÁPIDAMENTE. SIGUE LEYENDO.",
            crisis: "La Historia Ha Probado Que Durante Crisis Financieras:",
            crisisItems: [
              "El mercado de valores declina",
              "Las transacciones inmobiliarias se congelan",
              "El sector minorista puede sufrir grandes pérdidas o incluso quiebra",
            ],
            crisisContent:
              "Si tus predicciones son correctas, entonces las Opciones Binarias pueden seguir siendo rentables incluso en los peores tiempos porque las divisas siempre se cotizan en pares. Cuando el valor de una moneda disminuye, el valor de la otra aumenta.",
            crisisProfit: "¿Bastante impresionante, verdad? Puedes ganar, sin importar si el mercado sube o baja, pero si tu predicción es incorrecta, puedes perder tanto.",
            hammock: "Negocia Mientras Te Relajas en una Hamaca",
            hammockContent:
              "¡Accede al mundo del trading desde cualquier lugar mientras te relajas en una hamaca! Todo lo que necesitas es una computadora y/o un smartphone y una conexión a Internet. Muchos operadores exitosos de Opciones Binarias usan aplicaciones de trading avanzadas en sus iPhones o smartphones Android y tabletas. Así que elige el estilo de vida que se adapte a tus objetivos de trading.",
            startWith: "Comienza Con $250",
            startWithContent1:
              "A diferencia de otros mercados financieros, las Opciones Binarias tienen costos de entrada bajos debido a la gran cantidad de participantes del mercado. Además, la creciente competencia entre brokers reduce sus comisiones y, en consecuencia, los costos de transacción.",
            startWithContent2:
              "Actualmente, las Opciones Binarias son el mercado más rentable para inversores minoristas. En Opciones Binarias, puedes comenzar a operar con $100-$2000. A medida que adquieras un dominio más sólido del trading de opciones binarias y la gestión del riesgo, invierte más. Recuerda que las pérdidas son parte del juego incluso para operadores experimentados, pero cuanto más aprendas, menos probabilidades tendrás de cometer errores de principiante.",
            easyRules: "Reglas Fáciles",
            easyRulesContent:
              "En 2023 hay más de 45,000 empresas que cotizan en bolsa en todo el mundo y aunque hay muchas divisas en el mercado de opciones binarias, los operadores trabajan principalmente con solo 8. Además, el valor de las divisas se ve afectado por significativamente menos factores que el valor de las acciones. Como resultado, es relativamente más fácil para ti seguir y predecir cambios en el mercado de Opciones Binarias.",
            sellAnytime: "Vende En Cualquier Momento",
            sellAnytimeContent:
              "Con un volumen diario de más de $6.6 billones, las Opciones Binarias son el mercado financiero más líquido. Siempre hay un comprador cuando quieres vender, y siempre hay un vendedor cuando quieres comprar. ¡Esto es muy tranquilizador! Pero puede mejorar aún más, si haces que tu dinero genere más dinero, que puedes retirar cuando quieras.",
            socialTrading: "Aprende de Profesionales Con Trading Social",
            socialTradingContent:
              "Ahora, cuando la tecnología es tan fuerte y el acceso a Internet está en todas partes, eres libre de usarlo sobre la marcha. Con una innovación revolucionaria, Trading Social de Opciones Binarias, puedes seguir y aprender de operadores profesionales o incluso copiarlos automáticamente y hacerlos trabajar para ti. Solo monitorea su éxito sobre la marcha con la aplicación móvil.",
          },
          quiz: {
            q1: "¿Cuándo es posible operar divisas?",
            q1o1: "Las 24 horas",
            q1o2: "9:00 - 17:00",
            q1o3: "9:00 - 18:00",
            q1a: "El trading de Opciones Binarias está disponible las 24 horas, permitiéndote operar en cualquier momento que se adapte a tu horario.",
            q2: "Las fluctuaciones de divisas se pueden usar para:",
            q2o1: "Incurrir en pérdidas",
            q2o2: "Obtener ganancias",
            q2o3: "Esperar",
            q2a: "Las fluctuaciones de divisas crean oportunidades para obtener ganancias prediciendo correctamente los movimientos de precios.",
            q3: "¿Cuál es la cantidad recomendada para operar en Opciones Binarias?",
            q3o1: "500 USD",
            q3o2: "250 USD",
            q3o3: "100 USD",
            q3a: "Se recomienda comenzar con $250 ya que proporciona capital suficiente para administrar trades manteniendo el riesgo manejable.",
          },
        },
        howMuchBinary: {
          title: "¿Cuánto Puedes Ganar Operando?",
          sections: {
            intro: "¿Cuánto Puedes Ganar Operando?",
            subtitle: "Entendiendo expectativas realistas de ganancias",
            content1:
              "La pregunta #1 que hacen los nuevos operadores es: \"¿cuánto dinero puedo ganar operando?\" Mientras que la respuesta varía dependiendo de diversos factores como las condiciones del mercado, tu estrategia y gestión del riesgo, podemos explorar algunos escenarios.",
            startWith: "¡Comienza Con Lo Que Tienes!",
            startWithContent: "Nuestros graduados que se convierten en operadores diarios hábiles generan alrededor del 1-3% de ganancia por día.",
            example1: "Comienza operando con",
            example1Value: "$100",
            example1Result: "$24 - $87",
            example1Text: "por mes",
            example2: "Comienza con",
            example2Value: "$5k",
            example2Result: "$674 y $2,262",
            example2Text: "de ganancia por mes",
            startContentEnd:
              "¿No está mal, verdad? Aunque es posible comenzar con tan poco como $10 con plataformas modernas, para obtener una ganancia decente es mejor comenzar con $1k - $5k.",
            note: "Está bien comenzar con menos, solo llevará más tiempo construir tu portafolio.",
            isItEasy: "¿Es Fácil Aprender a Operar?",
          },
          quiz: {
            q1: "¿Cuál es el capital inicial recomendado?",
            q1o1: "$10",
            q1o2: "$1,000 - $5,000",
            q1o3: "$10,000",
            q1a: "Comenzar con $1,000 - $5,000 permite ganancias decentes y gestión adecuada de trades.",
            q2: "¿Qué porcentaje de ganancia diaria buscan típicamente los operadores hábiles?",
            q2o1: "10-20%",
            q2o2: "1-3%",
            q2o3: "5-10%",
            q2a: "Los operadores diarios hábiles generan típicamente alrededor del 1-3% de ganancia por día.",
          },
        },
        whenToTradeBinary: {
          title: "Cuándo Operar",
          sections: {
            intro: "Cuándo Operar",
            subtitle: "El tiempo lo es todo en el trading",
            content1:
              "El tiempo lo es todo en el trading, y conocer los momentos más rentables para entrar al mercado puede ser un factor clave en tus resultados. En esta lección, te guiaremos a través de los mejores momentos para operar cada clase de activo.",
            windowOfOpportunity: "La Ventana de Oportunidad",
            windowContent:
              "Hay un período específico considerado como el mejor momento para operar todos los activos. En resumen, es cuando hay la mayor actividad en los mercados, con operadores de todo el mundo participando.",
            overlap: "La superposición entre las sesiones de Londres y Nueva York, que ocurre de",
            overlapTime: "8 am a 12 pm ET",
            overlapEnd: ", es la hora más activa y líquida del día para operar divisas, acciones y otros activos.",
            overlapDetail:
              "Este período se caracteriza por altos volúmenes y volatilidad significativa, lo que significa que hay más oportunidades para entrar y salir de trades.",
            whatIsSession: "¿Qué es una Sesión?",
            whatIsSessionContent: "Ahora entremos en los horarios específicos de apertura y cierre del mercado para cada clase de activo.",
            binaryOptions: "Opciones Binarias",
            binaryOptionsContent:
              "La flexibilidad de los horarios de trading de opciones binarias es una ventaja significativa, permitiéndote acceder al mercado desde cualquier parte del mundo entre semana.",
            offPeakContent:
              "Para quienes no pueden operar durante la superposición Londres-Nueva York, las horas no pico aún pueden ofrecer ventajas. Operar durante la sesión asiática puede ser beneficioso si operas el yen u otras divisas asiáticas.",
          },
          quiz: {
            q1: "¿Cuándo es el mejor momento para operar?",
            q1o1: "Superposición Londres-Nueva York (8 am - 12 pm ET)",
            q1o2: "Solo sesión asiática",
            q1o3: "Cualquier momento",
            q1a: "La superposición Londres-Nueva York (8 am - 12 pm ET) es la hora más activa y líquida para trading.",
            q2: "¿Qué ventaja tienen las opciones binarias respecto a los horarios de trading?",
            q2o1: "Solo horarios fijos",
            q2o2: "Flexibilidad para operar desde cualquier lugar entre semana",
            q2o3: "Solo durante los fines de semana",
            q2a: "Las opciones binarias ofrecen flexibilidad para operar desde cualquier parte del mundo entre semana.",
          },
        },
        socialTradingBinary: {
          title: "Trading Social (Copy Trading)",
          sections: {
            intro: "Trading Social (Copy Trading)",
            subtitle: "Aprende de profesionales",
            content1:
              "El trading social, también conocido como copy trading, es una característica revolucionaria que te permite seguir y copiar automáticamente los trades de operadores profesionales exitosos.",
            benefits: "Beneficios del Trading Social",
            benefit1: "Aprende de operadores experimentados",
            benefit2: "Automatiza tu estrategia de trading",
            benefit3: "Reduce las decisiones emocionales",
            benefit4: "Construye riqueza copiando operadores exitosos",
          },
          quiz: {
            q1: "¿Qué es el trading social?",
            q1o1: "Operar solo con amigos",
            q1o2: "Seguir y copiar a operadores profesionales",
            q1o3: "Operar en redes sociales",
            q1a: "El trading social te permite seguir y copiar automáticamente trades de operadores profesionales exitosos.",
            q2: "¿Cuál es el principal beneficio del copy trading?",
            q2o1: "Ganancias garantizadas",
            q2o2: "Aprender de operadores experimentados y automatización",
            q2o3: "No necesitas aprender trading",
            q2a: "El copy trading te ayuda a aprender de profesionales y automatizar tu estrategia reduciendo decisiones emocionales.",
          },
        },
      },
    },

    // Trading Review Page - Added imagePasted key
    tradingReview: {
      title: "Reseñas de",
      review: "Trading",
      description:
        "Sube tus datos de trading o capturas de pantalla para obtener comentarios personalizados, métricas de rendimiento e información educativa para mejorar tu trading.",
      yourReview: "Tu Reseña",
      placeholder: "Escribe tu reseña de trading aquí...",
      attachImage: "Adjuntar Imagen (opcional)",
      dragDrop: "Arrastra y suelta una imagen o haz clic para buscar",
      fileLimit: "JPG, PNG, GIF hasta 5MB",
      submitReview: "Enviar Reseña",
      submitting: "Enviando...",
      reviewSubmitted: "¡Reseña enviada!",
      thankYou: "Gracias por tus comentarios",
      enterReview: "Por favor ingresa tu reseña",
      englishOnly: "Por favor escribe tu reseña en inglés.",
      failedSubmit: "Error al enviar reseña",
      tryAgain: "Por favor intenta más tarde",
      imagePasted: "Imagen pegada exitosamente",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Opera",
      smarter: "Inteligentemente",
      notHarder: "No",
      harder: "Difícilmente",
      description:
        "Sube tu gráfico de trading desde cualquier plataforma y deja que nuestra IA analice instantáneamente patrones, niveles y estructura del mercado. Recibe planes de trading accionables con puntos de entrada, stop loss y niveles de take profit, sin necesidad de gurú.",
      specialOffer: "Oferta Especial",
      startAnalysis: "Iniciar Análisis de Gráfico",
      linkBroker: "Vincular Cuenta de Broker",
      freeAnalyses: "Gratis",
      startWith3: "Comienza con 3",
      analyses: "Análisis",
      freeTrialDesc: "Pruébalo con tres análisis de gráficos completamente gratis para ver el valor por ti mismo.",
      unlockAccess: "Desbloquear Acceso Completo",
      afterFree: "Después de tus análisis gratuitos, necesitarás:",
      step1: "Abrir una cuenta con uno de nuestros",
      partneredBrokers: "brokers asociados",
      step1End: "a través del enlace proporcionado.",
      step2: "Mantener un",
      minDeposit: "depósito mínimo",
      of50: "de",
      step2End: "para continuar accediendo a los planes de trading con IA.",
      confidence: "confianza",
    },

    // Register Page
    register: {
      brokerAccess: "Requisitos de",
      accessRequirements: "Acceso al",
      requirements: "Broker",
      step1: "Regístrate con uno de nuestros brokers asociados usando el enlace proporcionado.",
      step2: "Realiza un depósito mínimo de $50 para activar tu cuenta de trading.",
      step3: "Después del registro, por favor escribe tu ID abajo",
      registration: "Registro",
      alreadyHaveAccount: "¿Ya tienes una cuenta? Ingresa tu ID abajo",
      enterAccountId: "Ingresa Tu ID de Cuenta",
      enterId: "Ingresa tu ID",
      tooManyRequests: "Demasiadas solicitudes. Por favor intenta más tarde.",
      registrationSuccess: "¡Tu ID de cuenta se ha registrado correctamente!",
      registrationFailed: "Registro fallido",
    },
  },

  pt: {
    // Common
    common: {
      login: "Entrar",
      signup: "Cadastrar",
      logout: "Sair",
      save: "Salvar",
      cancel: "Cancelar",
      submit: "Enviar",
      loading: "Carregando...",
      error: "Erro",
      success: "Sucesso",
      verified: "VERIFICADO",
      years: "anos",
      yearsOld: "anos",
      calculate: "Calcular",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "Opere como um",
      pro: "Profissional",
      title2: "sem muita",
      guru: "experiência em trading",
      description:
        "Análise de gráficos com IA que entrega planos de trading acionáveis. Envie seus gráficos e obtenha insights instantâneos para melhores decisões de trading.",
      analyzeButton: "Analisar um Gráfico",
    },

    // How It Works
    howItWorks: {
      title: "Como Funciona",
      subtitle: "Análise de gráficos simples, rápida e poderosa em três passos",
      step1Title: "1. Enviar Gráfico",
      step1Desc: "Envie sua captura de tela do gráfico de trading de qualquer plataforma",
      step2Title: "2. Análise IA",
      step2Desc: "Nossa IA analisa padrões, níveis e estrutura de mercado instantaneamente",
      step3Title: "3. Plano de Trading",
      step3Desc: "Obtenha insights acionáveis com níveis de entrada, stop loss e take profit",
    },

    // Powerful Features
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para uma análise de trading bem-sucedida",
      aiTrade: "Análise de Trading com IA",
      aiTradeDesc:
        "Reconhecimento avançado de padrões e análise de estrutura de mercado alimentada por inteligência artificial",
      scalp: "Scalp Trading",
      scalpDesc: "Oportunidades de trading de ultra curto prazo para lucros rápidos com timing preciso",
      risk: "Gestão de Risco",
      riskDesc: "Ferramentas avançadas de dimensionamento de posição e cálculo de risco para proteger seu capital",
      swing: "Swing Trading",
      swingDesc: "Análise de oportunidades de trading de vários dias a várias semanas para posições estratégicas",
      priceAction: "Análise de Price Action",
      priceActionDesc: "Análise profunda de movimentos de preço e psicologia de mercado para decisões informadas",
    },

    // Testimonials
    testimonials: {
      title: "O que nossos traders estão dizendo",
      trader1Name: "Roberto Lima",
      trader1Role: "Day Trader",
      trader1Quote:
        "Após 10 anos no mercado, finalmente encontrei uma ferramenta que realmente funciona. Meus resultados melhoraram 300%!",
      trader2Name: "Isabella Alves",
      trader2Role: "Swing Trader",
      trader2Quote:
        "Como mãe de dois filhos, preciso de análise rápida e eficiente. FoMatrix me permite operar nos intervalos do meu dia!",
      trader3Name: "Carlos Eduardo",
      trader3Role: "Scalper",
      trader3Quote:
        "Estudante de economia que faz trading para pagar a faculdade. Com FoMatrix, consigo ser consistente nas operações!",
    },

    // Sidebar
    sidebar: {
      analysis: "Análise",
      learning: "Aprendizado",
      tradingReview: "Avaliação de Trading",
      settings: "Configurações",
    },

    // Settings - Added new translation keys
    settings: {
      title: "Configurações",
      description: "Gerencie as configurações da sua conta, preferências e opções de segurança.",
      userPreferences: "Preferências do Usuário",
      language: "Idioma",
      timezone: "Fuso Horário",
      displayCurrency: "Moeda de Exibição",
      savePreferences: "Salvar Preferências",
      saving: "Salvando...",
      changePassword: "Alterar Senha",
      changeEmail: "Alterar Email",
      currentEmail: "Email Atual",
      newEmail: "Novo Email",
      enterNewEmail: "Digite seu novo email",
      updateEmail: "Atualizar Email",
      currentPassword: "Senha Atual",
      newPassword: "Nova Senha",
      confirmPassword: "Confirmar Senha",
      updatePassword: "Atualizar Senha",
      updating: "Atualizando...",
      enterCurrentPassword: "Digite sua senha atual",
      enterNewPassword: "Digite sua nova senha",
      confirmNewPassword: "Confirme sua nova senha",
      minChars: "Mínimo de 6 caracteres necessários",
      preferencesSaved: "Preferências salvas",
      preferencesDesc: "Suas preferências foram atualizadas com sucesso.",
      passwordUpdated: "Senha atualizada",
      passwordDesc: "Sua senha foi alterada com sucesso.",
      passwordMismatch: "As senhas não coincidem.",
      passwordTooShort: "A senha deve ter pelo menos 6 caracteres.",
      selectLanguage: "Selecionar idioma",
      selectTimezone: "Selecionar fuso horário",
      selectCurrency: "Selecionar moeda",
      emailUpdated: "Email atualizado",
      emailUpdatedDesc: "Seu email foi alterado com sucesso.",
    },

    // Auth Dialog
    auth: {
      welcome: "Bem-vindo",
      registerPrompt: "Olá, você precisa se cadastrar para entrar",
      emailAddress: "Endereço de Email",
      createPassword: "Criar Senha",
      password: "Senha",
      rememberMe: "Lembrar-me por 7 dias",
      loggedInAs: "Conectado como:",
      emailRequired: "Email obrigatório",
      emailRequiredDesc: "Por favor, digite seu endereço de email",
      invalidEmail: "Email inválido",
      invalidEmailDesc: "Por favor, digite um endereço de email válido",
      passwordRequired: "Senha obrigatória",
      passwordRequiredDesc: "Por favor, digite sua senha",
      passwordTooShort: "Senha muito curta",
      passwordTooShortDesc: "Mínimo de 6 caracteres necessários",
      confirmRequired: "Confirmação obrigatória",
      confirmRequiredDesc: "Por favor, confirme sua senha",
      passwordMismatch: "Senhas não coincidem",
      passwordMismatchDesc: "As senhas não coincidem",
      redirecting: "Redirecionando para seu painel...",
      registrationFailed: "Cadastro falhou",
      loginFailed: "Login falhou",
      loggedOut: "Desconectado",
      loggedOutDesc: "Você foi desconectado com sucesso",
    },

    // Analyze Page
    analyze: {
      title: "Análise de Trading",
      uploadTitle: "Enviar Imagem do Gráfico",
      uploadDesc: "Arraste e solte sua captura de tela do gráfico ou clique para procurar",
      supportedFormats: "Formatos suportados: JPG, PNG, GIF (máx 5MB)",
      analyzing: "Analisando...",
      analyzeChart: "Analisar Gráfico",
      removeImage: "Remover imagem",
      confidence: "Confluência",
      buy: "COMPRAR",
      sell: "VENDER",
      noSignal: "SEM SINAL",
      analysisResult: "Resultado da Análise",
      pleaseLogin: "Por favor, faça login para usar o recurso de análise",
      invalidFile: "Tipo de arquivo inválido",
      invalidFileDesc: "Por favor, envie um arquivo de imagem (JPG, PNG, GIF)",
      fileTooLarge: "Arquivo muito grande",
      fileTooLargeDesc: "O arquivo excede o limite de 5MB",
      activateAccount: "Ativar Conta",
      activateDesc: "Vincule sua conta de corretora para continuar usando o recurso de análise",
    },

    formatrixTurbo: {
      title: "ForMatrix",
      turbo: "Turbo",
      description:
        "Estratégia de opções binárias de alta velocidade com reconhecimento de padrões por IA para sinais rápidos com tempos de expiração de 1-5 minutos",
      chartAnalysisInfo: "Informações de Análise de Gráficos",
      chartAnalysisInfoDesc:
        "Envie seus gráficos para análise técnica com IA, reconhecimento de padrões e recomendações de trading baseadas em estratégias comprovadas de scalp trading",
      selectImage: "Selecionar Imagem",
      pasteTip: "Dica: Você também pode colar (Ctrl+V) uma imagem copiada!",
      waitForResponse: "Aguarde a resposta",
      sessionExpired: "Sessão expirada",
      analysisLimitExceeded: "Limite de análise excedido",
      upgradAccount: "Você atingiu seu limite diário de análises. Atualize sua conta para análises ilimitadas.",
      noDescription: "Sem descrição",
      analysisCompleted: "Análise concluída!",
      analysisCompletedDesc: "A análise de IA foi concluída com sucesso",
      analysisFailed: "Análise falhou",
    },

    // Learning Page
    learning: {
      title: "Centro de",
      center: "Aprendizado",
      comingSoon:
        "Conteúdo educacional e tutoriais de trading em breve. Fique atento para materiais de aprendizado completos.",
      section1: {
        title: "Começando",
        subtitle: "Sua Jornada de Trading",
      },
      section2: {
        title: "Os Geradores de Dinheiro",
        subtitle: "O Que Move os Mercados",
      },
      section3: {
        title: "Lendo o Mercado",
        subtitle: "Domine os Gráficos",
      },
      // Getting Started Lessons
      lessons: {
        whyTradeBinary: {
          title: "Por Que Negociar Opções Binárias?",
          sections: {
            intro: "Por Que Negociar Opções Binárias?",
            content1:
              "A pandemia, a guerra Russo-Ucraniana, a queda do preço do petróleo ou desastres naturais na Ásia podem ter grandes impactos na economia, mas para os traders de moedas estas são oportunidades de lucro dominantes.",
            content2:
              "Durante esses tempos voláteis, mais de 2,000,000 de pessoas em todo o mundo adquiriram conhecimento e experiência através do nosso conteúdo exclusivo e ilustrações ricas.",
            content3:
              "Uma vez que você desbloqueie e passe por tudo que nosso app de trading de opções binárias oferece, você terá mais confiança para negociar com seus próprios investimentos.",
            callout: "SUA \"SABEDORIA EM OPÇÕES BINÁRIAS\" ESTÁ PRESTES A CRESCER RAPIDAMENTE. CONTINUE LENDO.",
            crisis: "A História Provou Que Durante Crises Financeiras:",
            crisisItems: [
              "O mercado de ações declina",
              "As transações imobiliárias congelam",
              "O setor de varejo pode sofrer grandes perdas ou até insolvência",
            ],
            crisisContent:
              "Se suas previsões estiverem corretas, então Opções Binárias podem permanecer lucrativas mesmo nos piores momentos porque moedas são sempre negociadas em pares. Quando o valor de uma moeda declina, o valor da outra sobe.",
            crisisProfit: "Bem legal, né? Você pode ganhar, independentemente de o mercado estar subindo ou descendo, mas se sua previsão estiver errada, você pode perder tanto.",
            hammock: "Negocie Enquanto Se Relaxa em uma Rede",
            hammockContent:
              "Acesse o mundo do trading de qualquer lugar enquanto se relaxa em uma rede! Tudo que você precisa é um computador e/ou um smartphone e uma conexão com a Internet. Muitos traders bem-sucedidos de Opções Binárias usam apps de trading avançados em seus iPhones ou smartphones Android e tablets. Então escolha o estilo de vida que se adapta aos seus objetivos de trading.",
            startWith: "Comece Com $250",
            startWithContent1:
              "Diferente de qualquer outro mercado financeiro, Opções Binárias têm custos de entrada baixos devido ao grande número de participantes do mercado. Além disso, a crescente competição entre brokers reduz suas comissões e consequentemente os custos de transação.",
            startWithContent2:
              "Atualmente, Opções Binárias são o mercado mais econômico para investidores de varejo. Em Opções Binárias, você pode começar a negociar com $100-$2000. Conforme você adquire um entendimento mais forte de trading de opções binárias e gestão de risco, invista mais. Lembre que perdas fazem parte do jogo até para traders experientes, mas quanto mais você aprende, menos provável é que cometa erros de iniciante.",
            easyRules: "Regras Fáceis",
            easyRulesContent:
              "Em 2023 existem mais de 45,000 empresas negociadas publicamente em todo o mundo e embora haja muitas moedas no mercado de opções binárias, traders trabalham principalmente com apenas 8. Além disso, o valor das moedas é afetado por significativamente menos fatores que o valor das ações. Como resultado, é relativamente mais fácil para você acompanhar e prever mudanças no mercado de Opções Binárias.",
            sellAnytime: "Venda A Qualquer Momento",
            sellAnytimeContent:
              "Com um volume diário de mais de $6,6 trilhões, Opções Binárias são o mercado financeiro mais líquido. Há sempre um comprador quando você quer vender, e há sempre um vendedor quando você quer comprar. Isto é muito tranquilizador! Mas pode ficar ainda melhor, se você fizer seu dinheiro gerar mais dinheiro, que você pode sacar quando quiser!",
            socialTrading: "Aprenda de Profissionais Com Trading Social",
            socialTradingContent:
              "Agora, quando a tecnologia é tão forte e o acesso à internet está em todos os lugares, você é livre de usá-lo por onde vai. Com uma inovação revolucionária, Trading Social de Opções Binárias, você pode seguir e aprender de traders profissionais ou até copiá-los automaticamente e fazê-los trabalhar para você. Apenas monitore seu sucesso por onde vai com o app móvel.",
          },
          quiz: {
            q1: "Quando é possível negociar moedas?",
            q1o1: "24 horas",
            q1o2: "9:00 - 17:00",
            q1o3: "9:00 - 18:00",
            q1a: "Trading de Opções Binárias está disponível 24 horas, permitindo você negociar a qualquer hora que se adapte seu horário.",
            q2: "Flutuações de moedas podem ser usadas para:",
            q2o1: "Incorrer em perdas",
            q2o2: "Fazer lucro",
            q2o3: "Esperar",
            q2a: "Flutuações de moedas criam oportunidades para fazer lucro prevendo corretamente os movimentos de preços.",
            q3: "Qual é a quantidade recomendada para negociar em Opções Binárias?",
            q3o1: "500 USD",
            q3o2: "250 USD",
            q3o3: "100 USD",
            q3a: "Começar com $250 é recomendado pois fornece capital suficiente para gerenciar trades mantendo risco gerenciável.",
          },
        },
        howMuchBinary: {
          title: "Quanto Você Pode Ganhar Negociando?",
          sections: {
            intro: "Quanto Você Pode Ganhar Negociando?",
            subtitle: "Entendendo expectativas realistas de lucro",
            content1:
              "A pergunta #1 feita por traders novatos é, \"quanto dinheiro eu posso ganhar negociando?\" Enquanto a resposta varia dependendo de vários fatores como condições de mercado, sua estratégia e gestão de risco, podemos explorar alguns cenários.",
            startWith: "Comece Com o Que Você Tem!",
            startWithContent: "Nossos graduados que se tornam traders diários hábeis ganham cerca de 1-3% de lucro por dia.",
            example1: "Comece negociando com",
            example1Value: "$100",
            example1Result: "$24 - $87",
            example1Text: "por mês",
            example2: "Comece com",
            example2Value: "$5k",
            example2Result: "$674 e $2,262",
            example2Text: "de lucro por mês",
            startContentEnd:
              "Não é mal, né? Embora seja possível começar com tão pouco quanto $10 com plataformas modernas, para fazer um lucro decente é melhor começar com $1k - $5k.",
            note: "Está tudo bem começar com menos, vai apenas levar mais tempo para construir seu portfólio.",
            isItEasy: "É Fácil Aprender a Negociar?",
          },
          quiz: {
            q1: "Qual é o capital inicial recomendado?",
            q1o1: "$10",
            q1o2: "$1,000 - $5,000",
            q1o3: "$10,000",
            q1a: "Começar com $1,000 - $5,000 permite lucros decentes e gerenciamento adequado de trades.",
            q2: "Qual percentual de lucro diário os traders hábeis tipicamente buscam?",
            q2o1: "10-20%",
            q2o2: "1-3%",
            q2o3: "5-10%",
            q2a: "Traders diários hábeis típicamente ganham cerca de 1-3% de lucro por dia.",
          },
        },
        whenToTradeBinary: {
          title: "Quando Negociar",
          sections: {
            intro: "Quando Negociar",
            subtitle: "Timing é tudo em trading",
            content1:
              "Timing é tudo em trading, e saber os momentos mais lucrativos para entrar no mercado pode ser um fator chave nos seus resultados. Nesta lição, vamos guiá-lo através dos melhores momentos para negociar cada classe de ativo.",
            windowOfOpportunity: "A Janela de Oportunidade",
            windowContent:
              "Há um período específico amplamente considerado como o melhor momento para negociar todos os ativos. Em resumo, é quando há a maior atividade nos mercados, com traders de todo o mundo participando.",
            overlap: "A sobreposição entre as sessões de Londres e Nova York, que ocorre de",
            overlapTime: "8 am a 12 pm ET",
            overlapEnd: ", é o horário mais ativo e líquido do dia para negociar moedas, ações e outros ativos.",
            overlapDetail:
              "Este período é caracterizado por altos volumes e volatilidade significativa, o que significa que há mais oportunidades para você entrar e sair de trades.",
            whatIsSession: "O que é uma Sessão?",
            whatIsSessionContent: "Agora vamos aos horários específicos de abertura e fechamento do mercado para cada classe de ativo.",
            binaryOptions: "Opções Binárias",
            binaryOptionsContent:
              "A flexibilidade dos horários de trading de opções binárias é uma vantagem significativa, permitindo você acessar o mercado de qualquer lugar do mundo em dias de semana.",
            offPeakContent:
              "Para aqueles incapazes de negociar durante a sobreposição Londres-Nova York, horas não-pico ainda podem oferecer algumas vantagens. Negociar durante a sessão asiática pode ser benéfico se você negocia o iene ou outras moedas asiáticas.",
          },
          quiz: {
            q1: "Quando é o melhor momento para negociar?",
            q1o1: "Sobreposição Londres-Nova York (8 am - 12 pm ET)",
            q1o2: "Apenas sessão asiática",
            q1o3: "Qualquer momento",
            q1a: "A sobreposição Londres-Nova York (8 am - 12 pm ET) é o horário mais ativo e líquido para trading.",
            q2: "Qual vantagem opções binárias têm considerando horários de trading?",
            q2o1: "Apenas horários fixos",
            q2o2: "Flexibilidade para negociar de qualquer lugar em dias de semana",
            q2o3: "Apenas durante fins de semana",
            q2a: "Opções binárias oferecem flexibilidade para negociar de qualquer lugar do mundo em dias de semana.",
          },
        },
        socialTradingBinary: {
          title: "Trading Social (Copy Trading)",
          sections: {
            intro: "Trading Social (Copy Trading)",
            subtitle: "Aprenda de profissionais",
            content1:
              "Trading social, também conhecido como copy trading, é um recurso revolucionário que permite você seguir e copiar automaticamente as negociações de traders profissionais bem-sucedidos.",
            benefits: "Benefícios do Trading Social",
            benefit1: "Aprenda de traders experientes",
            benefit2: "Automatize sua estratégia de trading",
            benefit3: "Reduza decisões de trading emocional",
            benefit4: "Construa riqueza copiando traders bem-sucedidos",
          },
          quiz: {
            q1: "O que é trading social?",
            q1o1: "Negociar apenas com amigos",
            q1o2: "Seguir e copiar traders profissionais",
            q1o3: "Negociar em redes sociais",
            q1a: "Trading social permite você seguir e copiar automaticamente as negociações de traders profissionais bem-sucedidos.",
            q2: "Qual é o principal benefício do copy trading?",
            q2o1: "Lucros garantidos",
            q2o2: "Aprender de traders experientes e automação",
            q2o3: "Não precisa aprender trading",
            q2a: "Copy trading ajuda você aprender de profissionais e automatizar sua estratégia reduzindo decisões emocional.",
          },
        },
      },
    },

    // Trading Review Page - Added imagePasted key
    tradingReview: {
      title: "Avaliações de",
      review: "Trading",
      description:
        "Envie seus dados de trading ou capturas de tela para obter feedback personalizado, métricas de desempenho e insights educacionais para melhorar seu trading.",
      yourReview: "Sua Avaliação",
      placeholder: "Escreva sua avaliação de trading aqui...",
      attachImage: "Anexar Imagem (opcional)",
      dragDrop: "Arraste e solte uma imagem ou clique para procurar",
      fileLimit: "JPG, PNG, GIF até 5MB",
      submitReview: "Enviar Avaliação",
      submitting: "Enviando...",
      reviewSubmitted: "Avaliação enviada!",
      thankYou: "Obrigado pelo seu feedback",
      enterReview: "Por favor, digite sua avaliação",
      englishOnly: "Por favor, escreva sua avaliação em inglês.",
      failedSubmit: "Falha ao enviar avaliação",
      tryAgain: "Por favor, tente novamente mais tarde",
      imagePasted: "Imagem colada com sucesso",
    },

    // Offer Page
    offer: {
      tradeSmarter: "Opere",
      smarter: "Inteligentemente",
      notHarder: "Não",
      harder: "Difícil",
      description:
        "Envie seu gráfico de trading de qualquer plataforma e deixe nossa IA analisar instantaneamente padrões, níveis e estrutura de mercado. Receba planos de trading acionáveis com pontos de entrada, stop loss e níveis de take profit, sem necessidade de guru.",
      specialOffer: "Oferta Especial",
      startAnalysis: "Iniciar Análise de Gráfico",
      linkBroker: "Vincular Conta de Corretora",
      freeAnalyses: "Grátis",
      startWith3: "Comece com 3",
      analyses: "Análises",
      freeTrialDesc: "Experimente com três análises de gráficos completamente grátis para ver o valor por si mesmo.",
      unlockAccess: "Desbloquear Acesso Completo",
      afterFree: "Após suas análises gratuitas, você precisará:",
      step1: "Abrir uma conta com uma de nossas",
      partneredBrokers: "corretoras parceiras",
      step1End: "através do link fornecido.",
      step2: "Manter um",
      minDeposit: "depósito mínimo",
      of50: "de",
      step2End: "para continuar acessando os planos de trading com IA.",
      confidence: "confiança",
    },

    // Register Page
    register: {
      brokerAccess: "Requisitos de",
      accessRequirements: "Acesso à",
      requirements: "Corretora",
      step1: "Cadastre-se com uma de nossas corretoras parceiras usando o link fornecido.",
      step2: "Faça um depósito mínimo de $50 para ativar sua conta de trading.",
      step3: "Após o cadastro, por favor escreva seu ID abaixo",
      registration: "Registro",
      alreadyHaveAccount: "Já tem uma conta? Digite seu ID abaixo",
      enterAccountId: "Digite Seu ID de Conta",
      enterId: "Digite seu ID",
      tooManyRequests: "Muitas solicitações. Por favor, tente novamente mais tarde.",
      registrationSuccess: "Seu ID de conta foi registrado com sucesso!",
      registrationFailed: "Cadastro falhou",
    },
  },

  ar: {
    // Common
    common: {
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      logout: "تسجيل الخروج",
      save: "حفظ",
      cancel: "إلغاء",
      submit: "إرسال",
      loading: "جاري التحميل...",
      error: "خطأ",
      success: "نجاح",
      verified: "موثق",
      years: "سنوات",
      yearsOld: "سنة",
      calculate: "حساب",
    },

    // Header
    header: {
      brandName: "FoMatrix",
    },

    // Hero Section
    hero: {
      title1: "تداول مثل",
      pro: "المحترفين",
      title2: "بدون خبرة كبيرة في",
      guru: "التداول",
      description:
        "تحليل الرسوم البيانية المدعوم بالذكاء الاصطناعي يقدم خطط تداول قابلة للتنفيذ. ارفع رسومك البيانية واحصل على رؤى فورية لقرارات تداول أفضل.",
      analyzeButton: "تحليل الرسم البياني",
    },

    // How It Works
    howItWorks: {
      title: "كيف يعمل",
      subtitle: "تحليل رسوم بيانية بسيط وسريع وقوي في ثلاث خطوات",
      step1Title: "1. رفع الرسم البياني",
      step1Desc: "ارفع لقطة شاشة الرسم البياني للتداول من أي منصة",
      step2Title: "2. تحليل الذكاء الاصطناعي",
      step2Desc: "يحلل ذكاؤنا الاصطناعي الأنماط والمستويات وهيكل السوق فوراً",
      step3Title: "3. خطة التداول",
      step3Desc: "احصل على رؤى قابلة للتنفيذ مع مستويات الدخول ووقف الخسارة وجني الأرباح",
    },

    // Powerful Features
    features: {
      title: "ميزات قوية",
      subtitle: "كل ما تحتاجه لتحليل تداول ناجح",
      aiTrade: "تحليل التداول بالذكاء الاصطناعي",
      aiTradeDesc: "التعرف المتقدم على الأنماط وتحليل هيكل السوق مدعوم بالذكاء الاصطناعي",
      scalp: "تداول السكالبينج",
      scalpDesc: "فرص تداول قصيرة المدى جداً لأرباح سريعة بتوقيت دقيق",
      risk: "إدارة المخاطر",
      riskDesc: "أدوات متقدمة لتحديد حجم المركز وحساب المخاطر لحماية رأس مالك",
      swing: "تداول السوينج",
      swingDesc: "تحليل فرص التداول من عدة أيام إلى عدة أسابيع للمراكز الاستراتيجية",
      priceAction: "تحليل حركة السعر",
      priceActionDesc: "تحليل عميق لتحركات الأسعار وعلم نفس السوق لقرارات مدروسة",
    },

    // Testimonials
    testimonials: {
      title: "ما يقوله متداولونا",
      trader1Name: "روبرتو ليما",
      trader1Role: "متداول يومي",
      trader1Quote: "بعد 10 سنوات في السوق، أخيراً وجدت أداة تعمل حقاً. تحسنت نتائجي بنسبة 300%!",
      trader2Name: "إيزابيلا ألفيس",
      trader2Role: "متداول سوينج",
      trader2Quote: "كأم لطفلين، أحتاج تحليلاً سريعاً وفعالاً. FoMatrix يتيح لي التداول في فترات استراحتي!",
      trader3Name: "كارلوس إدواردو",
      trader3Role: "متداول سكالبينج",
      trader3Quote: "طالب اقتصاد يتداول لدفع رسوم الجامعة. مع FoMatrix، أستطيع أن أكون ثابتاً في العمليات!",
    },

    // Sidebar
    sidebar: {
      analysis: "التحليل",
      learning: "التعلم",
      tradingReview: "مراجعة التداول",
      settings: "الإعدادات",
    },

    // Settings - Added new translation keys
    settings: {
      title: "الإعدادات",
      description: "إدارة إعدادات حسابك وتفضيلاتك وخيارات الأمان.",
      userPreferences: "تفضيلات المستخدم",
      language: "اللغة",
      timezone: "المنطقة الزمنية",
      displayCurrency: "عملة العرض",
      savePreferences: "حفظ التفضيلات",
      saving: "جاري الحفظ...",
      changePassword: "تغيير كلمة المرور",
      changeEmail: "تغيير البريد الإلكتروني",
      currentEmail: "البريد الإلكتروني الحالي",
      newEmail: "البريد الإلكتروني الجديد",
      enterNewEmail: "أدخل بريدك الإلكتروني الجديد",
      updateEmail: "تحديث البريد الإلكتروني",
      currentPassword: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور",
      updatePassword: "تحديث كلمة المرور",
      updating: "جاري التحديث...",
      enterCurrentPassword: "أدخل كلمة المرور الحالية",
      enterNewPassword: "أدخل كلمة المرور الجديدة",
      confirmNewPassword: "أكد كلمة المرور الجديدة",
      minChars: "مطلوب 6 أحرف على الأقل",
      preferencesSaved: "تم حفظ التفضيلات",
      preferencesDesc: "تم تحديث تفضيلاتك بنجاح.",
      passwordUpdated: "تم تحديث كلمة المرور",
      passwordDesc: "تم تغيير كلمة المرور بنجاح.",
      passwordMismatch: "كلمات المرور غير متطابقة.",
      passwordTooShort: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
      selectLanguage: "اختر اللغة",
      selectTimezone: "اختر المنطقة الزمنية",
      selectCurrency: "اختر العملة",
      emailUpdated: "تم تحديث البريد الإلكتروني",
      emailUpdatedDesc: "تم تغيير بريدك الإلكتروني بنجاح.",
    },

    // Auth Dialog
    auth: {
      welcome: "مرحباً",
      registerPrompt: "مرحباً، تحتاج للتسجيل للدخول",
      emailAddress: "عنوان البريد الإلكتروني",
      createPassword: "إنشاء كلمة مرور",
      password: "كلمة المرور",
      rememberMe: "تذكرني لمدة 7 أيام",
      loggedInAs: "مسجل الدخول كـ:",
      emailRequired: "البريد الإلكتروني مطلوب",
      emailRequiredDesc: "يرجى إدخال عنوان بريدك الإلكتروني",
      invalidEmail: "بريد إلكتروني غير صالح",
      invalidEmailDesc: "يرجى إدخال عنوان بريد إلكتروني صالح",
      passwordRequired: "كلمة المرور مطلوبة",
      passwordRequiredDesc: "يرجى إدخال كلمة المرور",
      passwordTooShort: "كلمة المرور قصيرة جداً",
      passwordTooShortDesc: "مطلوب 6 أحرف على الأقل",
      confirmRequired: "تأكيد كلمة المرور مطلوب",
      confirmRequiredDesc: "يرجى تأكيد كلمة المرور",
      passwordMismatch: "كلمات المرور غير متطابقة",
      passwordMismatchDesc: "كلمات المرور غير متطابقة",
      redirecting: "جاري إعادة التوجيه إلى لوحة التحكم...",
      registrationFailed: "فشل التسجيل",
      loginFailed: "فشل تسجيل الدخول",
      loggedOut: "تم تسجيل الخروج",
      loggedOutDesc: "تم تسجيل خروجك بنجاح",
    },

    // Analyze Page
    analyze: {
      title: "تحليل التداول",
      uploadTitle: "رفع صورة الرسم البياني",
      uploadDesc: "اسحب وأفلت لقطة شاشة الرسم البياني أو انقر للتصفح",
      supportedFormats: "الصيغ المدعومة: JPG، PNG، GIF (الحد الأقصى 5 ميجابايت)",
      analyzing: "جاري التحليل...",
      analyzeChart: "تحليل الرسم البياني",
      removeImage: "إزالة الصورة",
      confidence: "الالتقاء",
      buy: "شراء",
      sell: "بيع",
      noSignal: "لا إشارة",
      analysisResult: "نتيجة التحليل",
      pleaseLogin: "يرجى تسجيل الدخول لاستخدام ميزة التحليل",
      invalidFile: "نوع ملف غير صالح",
      invalidFileDesc: "يرجى رفع ملف صورة (JPG، PNG، GIF)",
      fileTooLarge: "حجم الملف كبير جداً",
      fileTooLargeDesc: "حجم الملف يتجاوز حد 5 ميجابايت",
      activateAccount: "تفعيل الحساب",
      activateDesc: "اربط حساب الوسيط الخاص بك لمتابعة استخدام ميزة التحليل",
    },

    formatrixTurbo: {
      title: "ForMatrix",
      turbo: "Turbo",
      description:
        "استراتيجية خيارات ثنائية عالية السرعة مع التعرف على الأنماط بالذكاء الاصطناعي للإشارات السريعة مع أوقات انتهاء 1-5 دقائق",
      chartAnalysisInfo: "معلومات تحليل الرسم البياني",
      chartAnalysisInfoDesc:
        "ارفع رسومك البيانية للتحليل الفني بالذكاء الاصطناعي، والتعرف على الأنماط، وتوصيات التداول بناءً على استراتيجيات سكالبينج مثبتة",
      selectImage: "اختر صورة",
      pasteTip: "نصيحة: يمكنك أيضاً لصق (Ctrl+V) صورة منسوخة!",
      waitForResponse: "انتظر الرد",
      sessionExpired: "انتهت الجلسة",
      analysisLimitExceeded: "تجاوز حد التحليل",
      upgradAccount: "لقد وصلت إلى حد التحليل اليومي. قم بترقية حسابك للتحليلات غير المحدودة.",
      noDescription: "لا يوجد وصف",
      analysisCompleted: "اكتمل التحليل!",
      analysisCompletedDesc: "تم إكمال تحليل الذكاء الاصطناعي بنجاح",
      analysisFailed: "فشل التحليل",
    },

    // Learning Page
    learning: {
      title: "مركز",
      center: "التعلم",
      comingSoon:
        "سيتم إتاحة محتوى تعليمي وبرامج تعليمية للتداول قريباً. ابقَ على اطلاع على مواد التعلم الشاملة.",
      section1: {
        title: "البداية",
        subtitle: "رحلتك في التداول",
      },
      section2: {
        title: "مولدات الأموال",
        subtitle: "ما يحرك الأسواق",
      },
      section3: {
        title: "قراءة السوق",
        subtitle: "احترف الرسوم البيانية",
      },
      // Getting Started Lessons
      lessons: {
        whyTradeBinary: {
          title: "لماذا تتداول الخيارات الثنائية؟",
          sections: {
            intro: "لماذا تتداول الخيارات الثنائية؟",
            content1:
              "الجائحة، الحرب الروسية الأوكرانية، انخفاض أسعار النفط أو الكوارث الطبيعية في آسيا يمكن أن يكون لها تأثيرات كبيرة على الاقتصاد، لكن بالنسبة لمتداولي العملات هذه فرص ربح سائدة.",
            content2:
              "خلال هذه الأوقات المتقلبة، اكتسب أكثر من 2,000,000 شخص حول العالم المعرفة والخبرة من خلال محتوانا الحصري والرسوم التوضيحية الغنية.",
            content3:
              "بمجرد فتح وتصفح كل ما توفره تطبيق التداول بالخيارات الثنائية لدينا، ستشعر بثقة أكبر عند التداول باستثماراتك الخاصة.",
            callout: "\"حكمتك في الخيارات الثنائية\" على وشك أن تنمو بسرعة. تابع القراءة.",
            crisis: "لقد أثبتت التاريخ أنه خلال الأزمات المالية:",
            crisisItems: [
              "سوق الأسهم ينخفض",
              "معاملات العقارات تتوقف",
              "قطاع التجزئة قد يعاني من خسائر كبيرة أو حتى إفلاس",
            ],
            crisisContent:
              "إذا كانت توقعاتك صحيحة، فيمكن أن تظل الخيارات الثنائية مربحة حتى في أسوأ الأوقات لأن العملات يتم تداولها دائماً في أزواج. عندما تنخفض قيمة عملة واحدة، ترتفع قيمة العملة الأخرى.",
            crisisProfit: "رائع جداً، أليس كذلك؟ يمكنك الربح، بغض النظر عما إذا كان السوق يتجه نحو الأعلى أو الأسفل، لكن إذا كان توقعك خاطئاً، يمكنك أن تخسر بنفس القدر.",
            hammock: "تداول وأنت مسترخٍ في أرجوحة",
            hammockContent:
              "يمكنك الوصول إلى عالم التداول من أي مكان وأنت مسترخٍ في أرجوحة! كل ما تحتاجه هو جهاز كمبيوتر و/أو هاتف ذكي واتصال بالإنترنت. يستخدم العديد من متداولي الخيارات الثنائية الناجحين تطبيقات التداول المتقدمة على هواتفهم الذكية iPhone أو Android والأجهزة اللوحية. لذلك اختر نمط الحياة الذي يناسب أهدافك التجارية.",
            startWith: "ابدأ بـ 250 دولار",
            startWithContent1:
              "على عكس أي سوق مالي آخر، تتمتع الخيارات الثنائية بتكاليف دخول منخفضة بسبب العدد الكبير من المشاركين في السوق. بالإضافة إلى ذلك، فإن المنافسة المتزايدة بين الوسطاء تخفض عمولاتهم وبالتالي تكاليف المعاملات.",
            startWithContent2:
              "حالياً، الخيارات الثنائية هي السوق الأكثر فعالية من حيث التكلفة للمستثمرين الأفراد. في الخيارات الثنائية، يمكنك البدء في التداول بـ 100-2000 دولار. مع اكتسابك فهماً أقوى لتداول الخيارات الثنائية وإدارة المخاطر، استثمر أكثر. تذكر أن الخسائر جزء من اللعبة حتى للمتداولين ذوي الخبرة، لكن كلما تعلمت أكثر، قلت احتمالية إرتكابك لأخطاء المبتدئين.",
            easyRules: "قواعد سهلة",
            easyRulesContent:
              "في عام 2023 هناك أكثر من 45,000 شركة مدرجة علناً حول العالم وعلى الرغم من وجود عملات كثيرة في سوق الخيارات الثنائية، يعمل المتداولون بشكل أساسي مع 8 فقط. بالإضافة إلى ذلك، تتأثر قيمة العملات بعوامل أقل بكثير من قيمة الأسهم. نتيجة لذلك، من الأسهل نسبياً عليك متابعة والتنبؤ بالتغييرات في سوق الخيارات الثنائية.",
            sellAnytime: "بع في أي وقت",
            sellAnytimeContent:
              "مع حجم تداول يومي يزيد عن 6.6 تريليون دولار، الخيارات الثنائية هي السوق المالي الأكثر سيولة. هناك دائماً مشترٍ عندما تريد البيع، وهناك دائماً بائع عندما تريد الشراء. هذا مطمئن جداً! لكن يمكن أن يكون أفضل إذا جعلت أموالك تجني المزيد من الأموال، التي يمكنك سحبها متى تشاء!",
            socialTrading: "تعلم من المحترفين مع التداول الاجتماعي",
            socialTradingContent:
              "الآن، عندما تكون التكنولوجيا قوية جداً والإنترنت في كل مكان، أنت حر في استخدامه أثناء التنقل. من خلال الابتكار الثوري، التداول الاجتماعي بالخيارات الثنائية، يمكنك متابعة والتعلم من المتداولين المحترفين أو حتى نسخهم تلقائياً وجعلهم يعملون من أجلك. فقط راقب نجاحهم أثناء التنقل مع تطبيق الهاتف المحمول.",
          },
          quiz: {
            q1: "متى يمكن تداول العملات؟",
            q1o1: "على مدار الساعة طوال الأسبوع",
            q1o2: "9:00 - 17:00",
            q1o3: "9:00 - 18:00",
            q1a: "تداول الخيارات الثنائية متاح على مدار الساعة، مما يسمح لك بالتداول في أي وقت يناسب جدولك.",
            q2: "يمكن استخدام تقلبات العملات ل:",
            q2o1: "تكبد خسائر",
            q2o2: "تحقيق أرباح",
            q2o3: "الانتظار",
            q2a: "تقلبات العملات تخلق فرصاً لتحقيق أرباح من خلال التنبؤ الصحيح بتحركات الأسعار.",
            q3: "ما هو المبلغ الموصى به للتداول في الخيارات الثنائية؟",
            q3o1: "500 دولار",
            q3o2: "250 دولار",
            q3o3: "100 دولار",
            q3a: "يُنصح بالبدء بـ 250 دولار لأنه يوفر رأس مال كافٍ لإدارة الصفقات مع الحفاظ على المخاطر قابلة للإدارة.",
          },
        },
        howMuchBinary: {
          title: "كم يمكنك أن تكسب من التداول؟",
          sections: {
            intro: "كم يمكنك أن تكسب من التداول؟",
            subtitle: "فهم توقعات الربح الواقعية",
            content1:
              "السؤال رقم 1 الذي يطرحه المتداولون الجدد هو: \"كم من المال يمكنني أن أكسب من التداول؟\" بينما الإجابة تختلف حسب عوامل مختلفة مثل ظروف السوق والاستراتيجية وإدارة المخاطر.",
            startWith: "ابدأ بما لديك!",
            startWithContent: "خريجونا الذين أصبحوا متداولي يوم ماهرين يحققون حوالي 1-3% ربح يومي.",
            example1: "ابدأ التداول بـ",
            example1Value: "$100",
            example1Result: "$24 - $87",
            example1Text: "شهرياً",
            example2: "ابدأ بـ",
            example2Value: "$5k",
            example2Result: "$674 و $2,262",
            example2Text: "من الربح شهرياً",
            startContentEnd:
              "ليس سيئاً، أليس كذلك؟ على الرغم من أنه من الممكن البدء برأس مال منخفض مثل 10 دولارات مع المنصات الحديثة، للحصول على ربح لائق من الأفضل البدء بـ 1000 - 5000 دولار.",
            note: "لا بأس بالبدء برأس مال أقل، فقط سيستغرق وقتاً أطول لبناء محفظتك.",
            isItEasy: "هل من السهل تعلم التداول؟",
          },
          quiz: {
            q1: "ما هو رأس المال الأولي الموصى به؟",
            q1o1: "$10",
            q1o2: "$1,000 - $5,000",
            q1o3: "$10,000",
            q1a: "البدء برأس مال 1,000 - 5,000 دولار يسمح بأرباح لائقة وإدارة صفقات مناسبة.",
            q2: "ما نسبة الربح اليومي التي يسعى إليها المتداولون الماهرون عادة؟",
            q2o1: "10-20%",
            q2o2: "1-3%",
            q2o3: "5-10%",
            q2a: "متداولو اليوم الماهرون عادة يحققون حوالي 1-3% ربح يومي.",
          },
        },
        whenToTradeBinary: {
          title: "متى تتداول",
          sections: {
            intro: "متى تتداول",
            subtitle: "التوقيت هو كل شيء في التداول",
            content1:
              "التوقيت هو كل شيء في التداول، ومعرفة أكثر الأوقات ربحية للدخول إلى السوق يمكن أن تكون عاملاً رئيسياً في نتائجك. في هذا الدرس، سنوجهك خلال أفضل الأوقات للتداول كل فئة أصول.",
            windowOfOpportunity: "نافذة الفرصة",
            windowContent:
              "هناك فترة زمنية محددة تعتبر أفضل وقت للتداول في جميع الأصول. باختصار، هو عندما يكون هناك أكثر نشاط في الأسواق، مع مشاركة المتداولين من حول العالم.",
            overlap: "التداخل بين جلسات لندن ونيويورك، الذي يحدث من",
            overlapTime: "8 صباحاً إلى 12 ظهراً بتوقيت الشرق",
            overlapEnd: ", هو الوقت الأكثر نشاطاً وسيولة في اليوم للتداول بالعملات والأسهم والأصول الأخرى.",
            overlapDetail:
              "تتميز هذه الفترة بأحجام عالية وتقلبية كبيرة، مما يعني أن هناك المزيد من الفرص لك للدخول والخروج من الصفقات.",
            whatIsSession: "ما هي الجلسة؟",
            whatIsSessionContent: "الآن دعنا نناقش أوقات الفتح والإغلاق المحددة للسوق لكل فئة أصول.",
            binaryOptions: "الخيارات الثنائية",
            binaryOptionsContent:
              "مرونة ساعات تداول الخيارات الثنائية هي ميزة كبيرة، مما يسمح لك بالوصول إلى السوق من أي مكان في العالم في أيام الأسبوع.",
            offPeakContent:
              "بالنسبة لأولئك الذين لا يستطيعون التداول أثناء تداخل لندن-نيويورك، قد تقدم ساعات غير الذروة بعض المزايا. يمكن أن يكون التداول خلال الجلسة الآسيوية مفيداً إذا كنت تتداول الين أو عملات آسيوية أخرى.",
          },
          quiz: {
            q1: "متى يكون أفضل وقت للتداول؟",
            q1o1: "تداخل لندن-نيويورك (8 صباحاً - 12 ظهراً بتوقيت الشرق)",
            q1o2: "جلسة آسيوية فقط",
            q1o3: "أي وقت",
            q1a: "تداخل لندن-نيويورك (8 صباحاً - 12 ظهراً بتوقيت الشرق) هو أنشط وقت وأكثره سيولة للتداول.",
            q2: "ما الميزة التي توفرها الخيارات الثنائية فيما يتعلق بساعات التداول؟",
            q2o1: "ساعات ثابتة فقط",
            q2o2: "المرونة للتداول من أي مكان في أيام الأسبوع",
            q2o3: "خلال نهاية الأسبوع فقط",
            q2a: "الخيارات الثنائية توفر المرونة للتداول من أي مكان في العالم في أيام الأسبوع.",
          },
        },
        socialTradingBinary: {
          title: "التداول الاجتماعي (نسخ التداول)",
          sections: {
            intro: "التداول الاجتماعي (نسخ التداول)",
            subtitle: "تعلم من المحترفين",
            content1:
              "التداول الاجتماعي، المعروف أيضاً بنسخ التداول، هو ميزة ثورية تسمح لك بمتابعة ونسخ صفقات متداولين محترفين ناجحين تلقائياً.",
            benefits: "فوائد التداول الاجتماعي",
            benefit1: "تعلم من متداولين ذوي خبرة",
            benefit2: "أتمتة استراتيجية التداول الخاصة بك",
            benefit3: "قلل قرارات التداول العاطفية",
            benefit4: "بناء الثروة بنسخ متداولين ناجحين",
          },
          quiz: {
            q1: "ما هو التداول الاجتماعي؟",
            q1o1: "التداول مع الأصدقاء فقط",
            q1o2: "متابعة ونسخ المتداولين المحترفين",
            q1o3: "التداول على وسائل التواصل الاجتماعي",
            q1a: "التداول الاجتماعي يسمح لك بمتابعة ونسخ صفقات متداولين محترفين ناجحين تلقائياً.",
            q2: "ما الفائدة الرئيسية لنسخ التداول؟",
            q2o1: "أرباح مضمونة",
            q2o2: "التعلم من متداولين محترفين والأتمتة",
            q2o3: "لا حاجة لتعلم التداول",
            q2a: "نسخ التداول يساعدك على التعلم من محترفين وأتمتة استراتيجيتك مع تقليل القرارات العاطفية.",
          },
        },
      },
    },

    // Trading Review Page - Added imagePasted key
    tradingReview: {
      title: "مراجعات",
      review: "التداول",
      description:
        "ارفع بيانات تداولك أو لقطات الشاشة للحصول على ملاحظات مخصصة، ومقاييس الأداء، ورؤى تعليمية لتحسين تداولك.",
      yourReview: "مراجعتك",
      placeholder: "اكتب مراجعة التداول هنا...",
      attachImage: "إرفاق صورة (اختياري)",
      dragDrop: "اسحب وأفلت صورة أو انقر للتصفح",
      fileLimit: "JPG، PNG، GIF حتى 5 ميجابايت",
      submitReview: "إرسال المراجعة",
      submitting: "جاري الإرسال...",
      reviewSubmitted: "تم إرسال المراجعة!",
      thankYou: "شكراً لملاحظاتك",
      enterReview: "يرجى إدخال مراجعتك",
      englishOnly: "يرجى كتابة مراجعتك باللغة الإنجليزية.",
      failedSubmit: "فشل إرسال المراجعة",
      tryAgain: "يرجى المحاولة مرة أخرى لاحقاً",
      imagePasted: "تم لصق الصورة بنجاح",
    },

    // Offer Page
    offer: {
      tradeSmarter: "تداول",
      smarter: "بذكاء",
      notHarder: "ليس",
      harder: "بصعوبة",
      description:
        "ارفع رسمك البياني من أي منصة ودع ذكاءنا الاصطناعي يحلل فوراً الأنماط والمستويات وهيكل السوق. احصل على خطط تداول قابلة للتنفيذ مع نقاط الدخول ووقف الخسارة ومستويات جني الأرباح—بدون الحاجة لمعلم.",
      specialOffer: "عرض خاص",
      startAnalysis: "بدء تحليل الرسم البياني",
      linkBroker: "ربط حساب الوسيط",
      freeAnalyses: "مجاناً",
      startWith3: "ابدأ بـ 3",
      analyses: "تحليلات",
      freeTrialDesc: "جربها مع ثلاث تحليلات رسوم بيانية مجانية تماماً لترى القيمة بنفسك.",
      unlockAccess: "فتح الوصول الكامل",
      afterFree: "بعد تحليلاتك المجانية، ستحتاج إلى:",
      step1: "فتح حساب مع أحد",
      partneredBrokers: "وسطائنا الشركاء",
      step1End: "عبر الرابط المقدم.",
      step2: "الحفاظ على",
      minDeposit: "حد أدنى للإيداع",
      of50: "قدره",
      step2End: "لمواصلة الوصول إلى خطط التداول بالذكاء الاصطناعي.",
      confidence: "ثقة",
    },

    // Register Page
    register: {
      brokerAccess: "متطلبات",
      accessRequirements: "الوصول إلى",
      requirements: "الوسيط",
      step1: "سجل مع أحد وسطائنا الشركاء باستخدام الرابط المقدم.",
      step2: "قم بإيداع حد أدنى قدره 50 دولار لتفعيل حساب التداول الخاص بك.",
      step3: "بعد التسجيل، يرجى كتابة معرفك أدناه",
      registration: "التسجيل",
      alreadyHaveAccount: "لديك حساب بالفعل؟ أدخل معرفك أدناه",
      enterAccountId: "أدخل معرف حسابك",
      enterId: "أدخل معرفك",
      tooManyRequests: "طلبات كثيرة جداً. يرجى المحاولة مرة أخرى لاحقاً.",
      registrationSuccess: "تم تسجيل معرف حسابك بنجاح!",
      registrationFailed: "فشل التسجيل",
    },
  },
}

export type TranslationKeys = typeof translations.en
export type Translations = typeof translations.en
