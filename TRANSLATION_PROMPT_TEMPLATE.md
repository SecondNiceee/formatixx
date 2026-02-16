# Translation Prompt Template

Copy and paste this prompt to an AI assistant to translate any learning section into 4 languages (English, Spanish, Portuguese, Arabic).

---

## PROMPT TO TRANSLATE A NEW SECTION

### Background
I have a trading education website with multi-language support. I need to translate a new learning section into 4 languages: English, Spanish, Portuguese, and Arabic.

### Section Information
**Section Name:** [REPLACE WITH SECTION NAME]
**Section Title:** [REPLACE WITH ENGLISH TITLE]
**Section Subtitle:** [REPLACE WITH ENGLISH SUBTITLE]
**Lessons in this section:**
- [LESSON 1 NAME]
- [LESSON 2 NAME]
- [LESSON 3 NAME]
- [etc.]

### What Needs Translation

I need you to provide translations for **ALL** of the following in all 4 languages (English, Spanish, Portuguese, Arabic):

#### 1. Section Header Translations
Translate the section title and subtitle:
- **Section Title:** [ENGLISH TITLE]
- **Section Subtitle:** [ENGLISH SUBTITLE]

#### 2. Lesson Titles
Translate all lesson titles in this section:
- [LESSON 1 ENGLISH TITLE]
- [LESSON 2 ENGLISH TITLE]
- [etc.]

#### 3. Lesson Content (if applicable)
For each lesson, translate:
- Main introduction/overview
- Section headings and descriptions
- All body content and explanations
- Call-out boxes and highlights
- List items
- Any conclusion text

#### 4. Quiz Content (if applicable)
For each lesson quiz, translate:
- All quiz questions
- All answer options (usually 3 options per question)
- Explanations for each answer

#### 5. Common UI Text (if not already done)
Translate any new common UI elements:
- Button text
- Navigation labels
- Error/success messages
- Section headers

### Output Format

Please provide the translations in this exact JSON format:

```json
{
  "en": {
    "common": {
      "lessonTitleKey": "Lesson Title in English",
      "lessonTitleKey2": "Another Lesson Title in English"
    },
    "learning": {
      "section2": {
        "title": "Section Title in English",
        "subtitle": "Section Subtitle in English"
      },
      "lessons": {
        "lessonNameKey": {
          "title": "Lesson Title in English",
          "sections": {
            "intro": "Introduction text in English",
            "content1": "First content section in English",
            "content2": "Second content section in English",
            "heading1": "Heading in English",
            "description1": "Description in English"
          },
          "quiz": {
            "q1": "Question 1 in English?",
            "q1o1": "Option 1 for question 1",
            "q1o2": "Option 2 for question 1",
            "q1o3": "Option 3 for question 1",
            "q1a": "Explanation for correct answer",
            "q2": "Question 2 in English?",
            "q2o1": "Option 1 for question 2",
            "q2o2": "Option 2 for question 2",
            "q2o3": "Option 3 for question 2",
            "q2a": "Explanation for correct answer"
          }
        }
      }
    }
  },
  "es": {
    "common": {
      "lessonTitleKey": "Título de Lección en Español",
      "lessonTitleKey2": "Otro Título de Lección en Español"
    },
    "learning": {
      "section2": {
        "title": "Título de Sección en Español",
        "subtitle": "Subtítulo de Sección en Español"
      },
      "lessons": {
        "lessonNameKey": {
          "title": "Título de Lección en Español",
          "sections": {
            "intro": "Texto de introducción en Español",
            "content1": "Primera sección de contenido en Español"
          },
          "quiz": {
            "q1": "Pregunta 1 en Español?",
            "q1o1": "Opción 1 para pregunta 1"
          }
        }
      }
    }
  },
  "pt": {
    "common": {
      "lessonTitleKey": "Título da Lição em Português",
      "lessonTitleKey2": "Outro Título da Lição em Português"
    },
    "learning": {
      "section2": {
        "title": "Título da Seção em Português",
        "subtitle": "Subtítulo da Seção em Português"
      },
      "lessons": {
        "lessonNameKey": {
          "title": "Título da Lição em Português",
          "sections": {
            "intro": "Texto de introdução em Português",
            "content1": "Primeira seção de conteúdo em Português"
          },
          "quiz": {
            "q1": "Pergunta 1 em Português?",
            "q1o1": "Opção 1 para pergunta 1"
          }
        }
      }
    }
  },
  "ar": {
    "common": {
      "lessonTitleKey": "عنوان الدرس بالعربية",
      "lessonTitleKey2": "عنوان درس آخر بالعربية"
    },
    "learning": {
      "section2": {
        "title": "عنوان القسم بالعربية",
        "subtitle": "العنوان الفرعي للقسم بالعربية"
      },
      "lessons": {
        "lessonNameKey": {
          "title": "عنوان الدرس بالعربية",
          "sections": {
            "intro": "نص المقدمة بالعربية",
            "content1": "قسم المحتوى الأول بالعربية"
          },
          "quiz": {
            "q1": "السؤال 1 بالعربية؟",
            "q1o1": "الخيار 1 للسؤال 1"
          }
        }
      }
    }
  }
}
```

### Important Notes

1. **Consistency:** Maintain consistent terminology across all translations for technical terms
2. **Cultural Adaptation:** Adapt examples and references to be culturally appropriate for Spanish, Portuguese, and Arabic speakers
3. **Translation Keys:** Use camelCase for JSON keys (e.g., `lessonNameKey`, `section2`, `q1o1`)
4. **Accuracy:** Ensure all translations are accurate and professional for financial/trading content
5. **Parenthetical Text:** If a lesson title has parenthetical text (e.g., "Social Trading (Copy Trading)"), translate both parts separately

### Next Steps

After providing translations, I will:
1. Add them to the translations file
2. Update lesson pages to use the translations
3. Test all 4 languages to ensure they work correctly

---

## EXAMPLE: How to Use This Template

### Example Section: "The Money Makers"

```
Section Name: moneyMakers
Section Title: The Money Makers
Section Subtitle: What Moves Markets
Lessons:
- basics-binary (Basics)
- language-binary (The Language of Binary Options)
- fundamentals-binary (Following the Fundamentals)
- gold-binary (Gold Prices and Binary Options)
- stocks-vs-binary (Investing in Stocks vs Binary Options)
- crude-oil-binary (Crude Oil Prices and Binary Options)
```

Replace the placeholders in the template above with actual content for each lesson, then ask AI to translate everything into JSON format.

---

## Questions About the Template?

This template is designed to be:
- **Complete:** Covers all translation needs
- **Structured:** Uses consistent JSON format
- **Clear:** Explicitly states what needs translation
- **Reusable:** Can be used for any section

If you're unclear on any part, refer to the TRANSLATION_GUIDE.md for detailed explanations.
